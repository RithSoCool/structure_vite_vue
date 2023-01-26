<template>
    <div class="flex flex-row justify-center navigated relative items-center" v-if="show">
        <!-- icon navigator -->
        <div class="absolute left-0" @click="goBack()">icon</div>
        <div class="">{{ title }}</div>
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
</template>
<script>
    import { useRouter, useRoute } from 'vue-router'
    import { toRefs, watch, ref } from 'vue'

    export default {
        setup() {
            const router = useRouter()
            const route = useRoute()
            const title = ref('')
            const show = ref(false)
            const goBack = () => router.go(-1)
            watch(route, () => {
                title.value = route.meta.title
                show.value = route.meta.show || false
            })
            return {
                goBack,
                title,
                show,
            }
        },
    }
</script>
<style scoped>
    .navigated {
        min-height: 45px !important;
    }
</style>
