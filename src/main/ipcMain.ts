import { app,  ipcMain, Menu, MenuItemConstructorOptions } from "electron";

ipcMain.on('contextmenu', () => {
    const template = [
        {
            label: '退出  ', click: () => {
                app.quit()
            }
        }] as MenuItemConstructorOptions[]
    const menu = Menu.buildFromTemplate(template)
    menu.popup()
})