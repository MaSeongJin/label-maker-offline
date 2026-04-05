const fs = require('node:fs/promises');
const path = require('node:path');
const { _electron: electron } = require('playwright');

async function capture(page, fileName) {
  const outputDir = path.join(__dirname, '..', 'playwright-artifacts');
  await fs.mkdir(outputDir, { recursive: true });
  await page.screenshot({
    path: path.join(outputDir, fileName),
    fullPage: false,
  });
}

async function selectTab(page, tabName) {
  await page.click(`[data-tab="${tabName}"]`);
  await page.waitForTimeout(350);
}

async function main() {
  const appPath = path.join(__dirname, '..');
  const electronApp = await electron.launch({
    args: [appPath],
  });

  try {
    const page = await electronApp.firstWindow();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(1000);

    await electronApp.evaluate(({ BrowserWindow }) => {
      const win = BrowserWindow.getAllWindows()[0];
      if (win) {
        win.setSize(1920, 1080);
        win.center();
      }
    });

    await page.waitForTimeout(1200);

    await capture(page, '01-upload.png');

    await selectTab(page, 'masters');
    await capture(page, '02-masters.png');

    await selectTab(page, 'labels');
    await capture(page, '03-labels.png');

    await selectTab(page, 'print');
    await capture(page, '04-print.png');
  } finally {
    await electronApp.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
