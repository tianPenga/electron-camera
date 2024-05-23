<script setup lang="ts">
import Camera from '@renderer/components/Camera.vue'
import Setting from '@renderer/components/Setting.vue';
import { Setting as  CameraOne } from '@icon-park/vue-next';
import { useConfigStore } from './store/useConfigStore';
// import useDrag  from './composables/useDarg'
// 拖拽窗口
// const {drag}=useDrag()
// drag.run()
// import useConfig from './composables/useConfig';
// const {config}= useConfig()

const { config } = useConfigStore()

const contextmenu = () => {
    window.api.contextmenu()
}

window.api.setting((value:any)=>{
    config.page=value
})


</script>
<template>
    <Suspense>
        <main id="main" class="relative group" @contextmenu="contextmenu()" >
            <section>
                <!-- <settingIcon theme="filled" size="24" fill="#dccde1"
                    class="absolute left-1/2 -translate-x-1/2 mt-3 cursor-pointer z-10 hidden group-hover:block"
                    v-if="config.page == 'camera'" @click="config.page = 'setting'" /> -->
                <CameraOne theme="filled" size="24" fill="#dccde1"
                    class="absolute left-1/2 -translate-x-1/2 mt-3 cursor-pointer z-10" v-if="config.page == 'setting'"
                    @click="config.page = 'camera'" />             
            </section>
            <section>
                <Camera v-if="config.page == 'camera'" />
                <Setting v-else />
            </section>
        </main>
    </Suspense>


</template>
