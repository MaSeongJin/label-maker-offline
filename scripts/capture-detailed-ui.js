const fs = require('node:fs/promises');
const path = require('node:path');
const { _electron: electron } = require('playwright');

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function screenshot(page, outputDir, name) {
  await page.screenshot({
    path: path.join(outputDir, name),
    fullPage: false,
  });
}

async function resizeToDesktop(electronApp) {
  await electronApp.evaluate(({ BrowserWindow }) => {
    const win = BrowserWindow.getAllWindows()[0];
    if (win) {
      win.setSize(1920, 1080);
      win.center();
    }
  });
}

async function scrollContainer(page, selector, ratio) {
  await page.evaluate(
    ({ selector, ratio }) => {
      const node = document.querySelector(selector);
      if (!node) {
        return;
      }
      const maxScroll = Math.max(0, node.scrollHeight - node.clientHeight);
      node.scrollTop = Math.round(maxScroll * ratio);
    },
    { selector, ratio }
  );
  await page.waitForTimeout(250);
}

async function openTab(page, tab) {
  await page.click(`[data-tab="${tab}"]`);
  await page.waitForTimeout(350);
}

async function clickIfPresent(page, selector) {
  const node = await page.$(selector);
  if (!node) {
    return false;
  }

  await node.click();
  return true;
}

async function openMasterTab(page, masterTab) {
  await page.click(`[data-master-tab="${masterTab}"]`);
  await page.waitForTimeout(350);
}

async function captureScrollableStates(page, outputDir, prefix, selector, ratios) {
  for (const [index, ratio] of ratios.entries()) {
    await scrollContainer(page, selector, ratio);
    await screenshot(page, outputDir, `${prefix}-${String(index + 1).padStart(2, '0')}.png`);
  }
}

async function main() {
  const appPath = path.join(__dirname, '..');
  const outputDir = path.join(appPath, 'playwright-artifacts', 'detailed');
  await ensureDir(outputDir);

  const electronApp = await electron.launch({
    args: [appPath],
    timeout: 60000,
  });

  try {
    const page = await electronApp.firstWindow({ timeout: 60000 });
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(1000);
    await resizeToDesktop(electronApp);
    await page.waitForTimeout(1000);

    await openTab(page, 'upload');
    await captureScrollableStates(page, outputDir, 'upload', '#tab-upload .import-table-wrap', [0, 0.4, 1]);

    await openTab(page, 'masters');
    await openMasterTab(page, 'specs');
    await captureScrollableStates(page, outputDir, 'masters-specs', '#tab-masters .master-table-wrap', [0, 1]);

    await openTab(page, 'masters');
    await openMasterTab(page, 'traceability');
    await captureScrollableStates(page, outputDir, 'masters-traceability', '#tab-masters .master-table-wrap', [0, 0.5, 1]);

    await openTab(page, 'masters');
    await openMasterTab(page, 'productReports');
    await captureScrollableStates(page, outputDir, 'masters-productReports', '#tab-masters .master-table-wrap', [0, 0.25, 0.6, 1]);

    await openTab(page, 'labels');
    await captureScrollableStates(page, outputDir, 'labels-editor', '.label-form', [0, 0.4, 0.8, 1]);
    await captureScrollableStates(page, outputDir, 'labels-list', '#labels-list', [0, 0.5, 1]);

    await openTab(page, 'print');
    await captureScrollableStates(page, outputDir, 'print', '#tab-print .print-area', [0, 0.2, 0.45, 0.75, 1]);
    if (await clickIfPresent(page, '[data-preview-mode="standard"]')) {
      await page.waitForTimeout(300);
      await screenshot(page, outputDir, 'print-standard-01.png');
      await clickIfPresent(page, '[data-preview-mode="compact"]');
      await page.waitForTimeout(200);
    }
  } finally {
    await electronApp.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
