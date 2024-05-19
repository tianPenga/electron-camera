import { app, BrowserWindow, Menu, shell, Tray } from "electron"
import path from "path"
const createTray = (win: BrowserWindow) => {
    app.whenReady().then(() => {
        const tray = new Tray(path.resolve(__dirname,process.platform=='darwin'?'../../resources/apple.png':'../../resources/window.png'))
        const contextMenu = Menu.buildFromTemplate([
            {label:'设置',click:()=>{
                win.webContents.send('setting','setting')
            }},
            {label:'鹏佬文档  ',click:()=>shell.openExternal('https://penglao.top/')},
            { label: '退出  ', role: 'quit' }
        ])

        tray.setToolTip('摄像头')
        tray.setContextMenu(contextMenu)
    })
}
export default createTray