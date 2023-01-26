<template>
    <div>
        <router-link to="/">Home</router-link> | <router-link to="/register-moblie">register</router-link> |
        <router-link to="/home-page">homepage</router-link>
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
<script></script>
