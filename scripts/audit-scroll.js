const path = require('node:path');
const { _electron: electron } = require('playwright');

async function main() {
  const electronApp = await electron.launch({
    args: [path.join(__dirname, '..')],
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

    await page.waitForTimeout(800);

    const scenarios = [
      { key: 'upload', tab: 'upload', selector: '#tab-upload .import-table-wrap' },
      { key: 'masters-defaults', tab: 'masters', selector: '#tab-masters .workspace-stack' },
      { key: 'masters-productReports', tab: 'masters', masterTab: 'productReports', selector: '#tab-masters .master-table-wrap' },
      { key: 'print', tab: 'print', selector: '#tab-print .print-area' },
    ];

    for (const scenario of scenarios) {
      await page.click(`[data-tab="${scenario.tab}"]`);
      await page.waitForTimeout(300);
      if (scenario.masterTab) {
        await page.click(`[data-master-tab="${scenario.masterTab}"]`);
        await page.waitForTimeout(300);
      }

      const result = await page.evaluate((scenarioData) => {
        const panel = document.getElementById(`tab-${scenarioData.tab}`);
        const stack = document.querySelector(scenarioData.selector);
        const appShell = document.querySelector('.app-shell');
        const workspaceShell = document.querySelector('.workspace-shell');
        const appMain = document.querySelector('.app-main');
        if (!stack) {
          return { tab: scenarioData.key, ok: false, reason: 'no-workspace-stack' };
        }

        const before = stack.scrollTop;
        const maxScroll = Math.max(0, stack.scrollHeight - stack.clientHeight);
        stack.scrollTop = Math.min(320, maxScroll);
        const after = stack.scrollTop;
        const beforeX = stack.scrollLeft;
        const maxScrollX = Math.max(0, stack.scrollWidth - stack.clientWidth);
        stack.scrollLeft = Math.min(240, maxScrollX);
        const afterX = stack.scrollLeft;

        return {
          tab: scenarioData.key,
          ok: true,
          clientHeight: stack.clientHeight,
          scrollHeight: stack.scrollHeight,
          overflow: getComputedStyle(stack).overflow,
          before,
          after,
          maxScroll,
          beforeX,
          afterX,
          maxScrollX,
          windowHeight: window.innerHeight,
          appShellHeight: appShell?.clientHeight || null,
          workspaceShellHeight: workspaceShell?.clientHeight || null,
          appMainHeight: appMain?.clientHeight || null,
        };
      }, scenario);

      console.log(JSON.stringify(result));
    }
  } finally {
    await electronApp.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
