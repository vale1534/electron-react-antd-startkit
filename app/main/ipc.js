import { ipcMain } from 'electron';

import {
  kMsgQueryMaximizeState,
  kMsgMaximizeStateUpdated,
  kMsgSetMaximizeState,
  kMsgSetMinimizeState,
  kMsgCloseWindow
} from '../common/defs';

function setupMainIpc(win) {
  const wc = win.webContents;
  win.setMinimumSize(600, 480);

  win.on('maximize', () => {
    wc.send(kMsgMaximizeStateUpdated, win.isMaximized());
  });

  win.on('unmaximize', () => {
    wc.send(kMsgMaximizeStateUpdated, win.isMaximized());
  });

  ipcMain.on(kMsgQueryMaximizeState, () => {
    wc.send(kMsgMaximizeStateUpdated, win.isMaximized());
  });

  ipcMain.on(kMsgSetMaximizeState, (evt, max) =>
    max ? win.maximize() : win.unmaximize()
  );

  ipcMain.on(kMsgSetMinimizeState, () => win.minimize());

  ipcMain.on(kMsgCloseWindow, () => win.close());
}

export default setupMainIpc;
