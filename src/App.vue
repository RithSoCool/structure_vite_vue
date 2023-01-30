<template>
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
</script>
<style scoped>
</style>
