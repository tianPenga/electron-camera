<script setup lang='ts'>
import { onMounted } from 'vue';
import { useConfigStore } from '../store/useConfigStore';
// import useConfig from '../composables/useConfig';
// const { config } = useConfig()

const {config}=useConfigStore()

onMounted(() => {


    const constraints = {
        audio: false,
        video: { deviceId:config.deviceId },
    } as MediaStreamConstraints
    const video = document.querySelector("video")!;

    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        video.srcObject = stream;
        video.play()
    })



})

</script>

<template>
    <main class="w-screen h-screen overflow-hidden"
    :class="{'rounded-full':config.rounded=='圆'}"
    :style="`border:solid ${config.borderWidth} ${config.borderColor}`">
        <video class="object-cover h-screen" :class="{'rounded-full':config.rounded=='圆'}"></video>
    </main>
</template>

<style scoped lang='scss'></style>