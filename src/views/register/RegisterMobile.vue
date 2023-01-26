<template>
    <p>กรอกเบอร์มือถือ เพื่อรับรหัส OTP</p>
    <label for="phone"> เบอร์มือถือ </label>
    <input type="tel" id="phone" v-model="phoneNumber" @input="onNumberInput($event)" />
    <button :disabled="phoneNumber.length != 10" @click="handleClickSendOTP">รับรหัส OTP</button>
</template>
<script lang="ts">
    import { ref } from 'vue'
    export default {
        setup(props) {
            const phoneNumber = ref<string>('')
            const phoneNumberLength = ref<number>(10)

            const onNumberInput = (inputData) => {
                inputData.target.value = inputData.target.value.replaceAll(/\D/g, '') //only input number
                inputData.target.value = inputData.target.value.substr(0, phoneNumberLength.value) //only input range of phone number
                inputData.target.value = inputData.target.value.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3') //format to xx-xxxx-xxxx
                return inputData.target.value
            }

            const handleClickSendOTP = () => {
                console.log('🚀 ~ file: RegisterMobile.vue:27 ~ handleClickSendOTP ~ handleClickSendOTP')
                alert('test sending OTP')
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
