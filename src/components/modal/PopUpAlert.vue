<template>
    <div>
        <van-popup 
            class="flex justify-center"
            v-model:show="isShowing" closeable round :style="{ padding: '12px' , minHeight: '200px' , minWidth : '300px' ,overflowY: 'visible'}">
            <!-- icon success -->
            <div class="absolute -top-10 h-20 w-20 rounded-full bg-white">

            </div>
            <!-- icon left -->
            <div class="absolute -bottom-3 left-0 h-20 w-20 rounded-full bg-white">

            </div>
            <!-- icon right -->
            <div class="absolute -bottom-3 right-0 h-20 w-20 rounded-full bg-white">

            </div>
            <!-- content -->
            <div class="pt-7 w-full">
                <content>
                    <slot name="content"></slot>
                </content>
            </div>
        </van-popup>
    </div>
</template>

<script lang="ts">
    import { ref , watch , toRefs } from 'vue'

    export default {
        props: ['show'],
        setup(props) {
            const { show } = toRefs(props)
            const isShowing = ref(false)
            watch(show, () => {
                isShowing.value = true
            })
            return {
                show,
                isShowing
            }
        },
    }
</script>

<style scoped></style>
