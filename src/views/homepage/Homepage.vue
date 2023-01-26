<template>
    <div class="position:absolute w-full h-full">
        this is homepage pages
        <div class="w-full h-full homepage-background-container">
            <div class="maintainance-img">
                <img class="w-full bg-white" :src="mockBg" alt="" />
            </div>
            <div class="w-full h-full homepage-list-container">
                <van-button round class="test">อันดับของคุณ</van-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import mockBg from '../../assets/image/homepage/mock-bg.png'
    export default {
        setup(props) {
            return {
                mockBg,
            }
        },
    }
</script>

<style>
    .homepage-list-container {
        background-color: var(--bg-gray);
        overflow-y: scroll;
        position: relative;
        scroll-behavior: smooth;
    }
    .homepage-background-container {
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .test {
        /* @apply bg-red-800 boxshadow; */
        @apply bg-red-800 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)];
    }
</style>
