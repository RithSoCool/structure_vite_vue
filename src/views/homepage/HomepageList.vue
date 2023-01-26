<template>
    <div class="position:absolute w-full h-full">
        this is homepage pages

        <div class="w-full h-full homepage-background-container">
            <div class="">
                <img class="w-full bg-white" :src="mockBg" alt="" />
            </div>
            <div class="w-full h-full homepage-list-container">
                <button class="rounded-full text-white my-4 bg-red-800 w-[90px] h-[30px]">อันดับของคุณ</button>
                <div>test</div>
                <button class="rounded-full text-white my-4 bg-lime-600 w-[90px] h-[30px]">Top Spender</button>
                <homepage-item></homepage-item>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import mockBg from '../../assets/image/homepage/mock-bg.png'
    import HomepageItem from '../homepage/components/HomepageItem.vue'
    export default {
        components: { HomepageItem },
        component: {
            HomepageItem,
        },
        setup(props) {
            return {
                mockBg,
            }
        },
    }
</script>

<style>
    .homepage-list-container {
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
</style>
