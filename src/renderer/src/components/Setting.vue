<script setup lang='ts'>
import { useConfigStore } from '../store/useConfigStore';

// import useConfig from '../composables/useConfig';
// const {config,updateConfig}=useConfig()
const devices = await navigator.mediaDevices.enumerateDevices()
const cameras = devices.filter(item => item.kind.includes('video'))
const { config } = useConfigStore()

</script>

<template>
    <main class="bg-[#2c3e50] w-screen h-screen p-5 py-10">
        <h2 class="text-gray-100 text-center text-sm mb-5 opacity-70">参数设置</h2>
        <el-form ref="form" label-width="80px" :inline="false" size="large" label-position="top">
            <el-select v-model="config.deviceId" placeholder="请选择摄像头" clearable filterable>
                <el-option v-for="item of cameras" :key="item.deviceId" :label="item.label" :value="item.deviceId">
                </el-option>
            </el-select>
            <el-input v-model="config.borderWidth" placeholder="边框宽度" size="large" clearable class="py-5"></el-input>
            <el-input v-model="config.borderColor" placeholder="边框颜色" size="large" clearable></el-input>
            <!-- <el-button type="success" @click="updateConfig()" size="large" class="w-[100%]">保存</el-button> -->
        </el-form>
        <h2  class="mt-6 text-center text-sm text-gray-300 cursor-pointer">electron技术作品</h2>
    </main>
</template>

<style scoped lang='scss'></style>