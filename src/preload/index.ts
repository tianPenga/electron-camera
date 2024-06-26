import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  contextmenu:()=>{
    ipcRenderer.send('contextmenu')
  },
  setting:(callback)=>{
    //@ts-ignore
    ipcRenderer.on('setting',(event:IpcRendererEvent,value:any)=>{
      callback(value)
    })
  }
  // drag:(opt:{x:number,y:number})=>{
  //   ipcRenderer.invoke('drag',opt)
  // },

}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
