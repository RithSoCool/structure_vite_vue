<template>
    <div>this is Upload Recipt Page</div>
    <receiptItem @click="$router.push('/upload-detail')" />
</template>

<script lang="ts">
    import receiptItem from './components/UploadReceiptItem.vue'
    import router from 'vue-router'
    export default {
        components: { receiptItem },
        setup(props) {},
    }
</script>

<style></style>
