const { app, BrowserWindow, ipcMain, screen } = require('electron');
const fs = require('node:fs/promises');
const path = require('node:path');

let mainWindow;

function createWindow() {
  const { workArea } = screen.getPrimaryDisplay();
  const windowWidth = Math.min(1920, Math.max(1280, workArea.width - 48));
  const windowHeight = Math.min(1080, Math.max(820, workArea.height - 48));

  mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    minWidth: 1280,
    minHeight: 800,
    backgroundColor: '#eef1ee',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.center();
  mainWindow.loadFile(path.join(__dirname, 'renderer', 'index.html'));
}

function getStorePath() {
  return path.join(app.getPath('userData'), 'label-maker-store.json');
}

async function loadStore() {
  const storePath = getStorePath();
  try {
    const content = await fs.readFile(storePath, 'utf8');
    return JSON.parse(content);
  } catch {
    return null;
  }
}

async function saveStore(store) {
  const storePath = getStorePath();
  await fs.mkdir(path.dirname(storePath), { recursive: true });
  await fs.writeFile(storePath, JSON.stringify(store, null, 2), 'utf8');
  return { ok: true, storePath };
}

app.whenReady().then(() => {
  createWindow();

  ipcMain.handle('store:load', async () => {
    return loadStore();
  });

  ipcMain.handle('store:save', async (_event, store) => {
    return saveStore(store);
  });

  ipcMain.handle('app:meta', () => ({
    version: app.getVersion(),
    storePath: getStorePath(),
    platform: process.platform,
  }));

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
