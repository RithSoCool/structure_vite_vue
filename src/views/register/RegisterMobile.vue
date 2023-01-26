<template>
    <p>กรอกเบอร์มือถือ เพื่อรับรหัส OTP</p>
    <label for="phone"> เบอร์มือถือ </label>
    <input type="tel" id="phone" v-model="phoneNumber" @input="onNumberInput($event)" />
    <button :disabled="phoneNumber.length < 10" @click="handleClickSendOTP()">รับรหัส OTP</button>
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
<script lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    export default {
        setup(props) {
            const phoneNumber = ref<string>('')
            const phoneNumberLength = ref<number>(10)
            const router = useRouter()

            const onNumberInput = (inputData) => {
                inputData.target.value = inputData.target.value.replaceAll(/\D/g, '') //only input number
                inputData.target.value = inputData.target.value.substr(0, phoneNumberLength.value) //only input range of phone number
                inputData.target.value = inputData.target.value.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3') //format to xx-xxxx-xxxx
                return inputData.target.value
            }

            const handleClickSendOTP = () => {
                // alert('test sending OTP')
                router.push({ path: '/register-verify-otp' })
            }

            return { phoneNumber, onNumberInput, handleClickSendOTP }
        },
    }
</script>
<style>
    /* .contrainer {
        background-color: #fbeec2;
    } */
    #app {
        background-color: #fbeec2;
    }
</style>
