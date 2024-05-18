import { ref } from "vue"

interface configType {
    deviceId: string,
    page: string
}

const initConfig = ref<configType>({
    deviceId: '',
    page: 'camera'
})

export default () => {
    const cache = localStorage.getItem('config')
    const data = cache ? (JSON.parse(cache) as configType) : initConfig
    let config = ref(data)
    config = config.value.deviceId ? config : ref(initConfig)
    const updateConfig = () => {
        localStorage.setItem('config', JSON.stringify(config.value))
    }
    return { config, updateConfig }
}