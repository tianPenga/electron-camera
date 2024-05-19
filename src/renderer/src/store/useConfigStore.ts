import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfigStore = defineStore('config', () => {
    const config = ref({
        page: 'camera',
        deviceId: '',
        borderWidth:'3px',
        borderColor:'#616161',
        rounded:'圆'
    })
    
    return { config}
}, {
    persist: true,
},)