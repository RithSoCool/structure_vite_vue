<template>
    <div class="flex flex-row justify-center navigated relative items-center" v-if="show">
        <!-- icon navigator -->
        <div class="absolute left-0" @click="goBack()">icon</div>
        <div class="">{{ title }}</div>
    </div>
</template>

<script>
import { toRefs } from 'vue';
import { useRouter } from 'vue-router'
export default {
    props: ['show','title'],
    setup () {
        const router = useRouter()
        const goBack = () => router.go(-1)
        return {goBack}
    }
}
</script>

<style lang="scss" scoped>
.navigated {
        min-height: 45px !important;
}
</style>