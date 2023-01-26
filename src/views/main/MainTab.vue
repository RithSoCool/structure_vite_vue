<template>
    <div class="">
        <div class="bg-gray-200 flex justify-between min-w-full absolute bottom-0 left-0">
            <div class="tabbar w-full bg-green-400">
                <div class="tabbar-item" @click="pageMain()">
                    <p class="text-gray-800">หน้่าหลัก</p>
                    <p v-if="tabIndex === 1">{{ tabIndex }}</p>
                </div>
                <div class="tabbar-item" @click="pagePoint()">
                    <p class="text-gray-800">สะสมคะแนน</p>
                    <p v-if="tabIndex === 2">{{ tabIndex }}</p>
                </div>
                <div class="tabbar-item" @click="pageProfile()">
                    <p class="text-gray-800">โปรไฟล์</p>
                    <p v-if="tabIndex === 3">{{ tabIndex }}</p>
                </div>
            </div>
        </div>
        <router-view v-slot="{ Component, route }">
            <FadeInOut
                :entry="route.meta.entry || 'center'"
                :exit="route.meta.entry || 'center'"
                :duration="route.meta.duration || 500"
                mode="out-in"
            >
                <component :is="Component" />
            </FadeInOut>
        </router-view>
    </div>
</template>

<script>
    import { useRouter } from 'vue-router'
    import { ref } from 'vue'
    export default {
        setup() {
            const router = useRouter()
            const tabIndex = ref(1)
            const pageMain = () => {
                router.push({ path: '/main' })
                tabIndex.value = 1
            }
            const pagePoint = () => {
                router.push({ path: '/main/point' })
                tabIndex.value = 2
            }
            const pageProfile = () => {
                router.push({ path: '/main/profile' })
                tabIndex.value = 3
            }

            return { pageMain, pagePoint, pageProfile, tabIndex }
        },
    }
</script>

<style lang="scss" scoped>
    .tabbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 0;
        box-shadow: 0 -1px 0 #edf2f7 inset;
    }

    .tabbar-item {
        flex: 1;
        text-align: center;
    }

    .tabbar-item p {
        display: inline-block;
        padding: 0.5rem;
        font-weight: 600;
        text-decoration: none;
        color: #4a5568;
    }
</style>
