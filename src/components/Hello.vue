<template>
    <p>{{ msg }}</p>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'HelloTest',
        props: {
            message: {
                type: String,
                default: 'World',
            },
        },
        setup(props) {
            return {
                msg: props.message,
            }
        },
    })
</script>
