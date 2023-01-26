<template>
    <div class="top-spender-container pt-4">
        <div class="bg-white rounded-full w-5/6 flex justify-between px-4 py-2 items-center">
            <div class="flex items-center">
                <div class="bg-red-800 text-white rounded-full w-[35px] h-[35px] mr-4 flex justify-center items-center">
                    101
                </div>
                <div class="flex flex-col items-start">
                    <div class="">
                        <div>ลิซ่า ลิใจ</div>
                    </div>
                    <div class="flex">
                        <div>icon</div>
                        <div>X94</div>
                    </div>
                </div>
            </div>
            <div>img</div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            userObj: { type: Object, default: {} },
        },
        setup(props) {},
    }
</script>

<style>
    .top-spender-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
