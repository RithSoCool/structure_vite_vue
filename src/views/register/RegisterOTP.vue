<template lang="">
    <div class="flex h-full flex-col justify-center items-center">
        <div>กรอกรหัส OTP</div>
        <div id="otp-referral-code" class="flex justify-center">
            <span class="flex items-center"
                >รหัส OTP (Ref code: A12D) (<van-count-down
                    ref="countDown"
                    class="flex items-center"
                    :time="time"
                    :auto-start="true"
                    format="ss"
                />s)</span
            >
        </div>
        <div class="flex justify-center">
            <div v-for="i in 6" :key="i" class="relative mx-2">
                <input
                    :id="'input' + i"
                    v-model="otp[i - 1]"
                    :class="`focus:bg-blue-500 block w-10 h-10 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-center text-xl rounded-full ${
                        isValid ? 'form-input-otp' : 'form-error-otp'
                    }`"
                    type="text"
                    maxlength="1"
                    @focus="animateFocus(i - 1)"
                    @blur="animateBlur(i - 1)"
                    @keyup="autoFocusNext(i)"
                    @keydown.backspace="autoFocusPrevious(i)"
                />
            </div>
        </div>
        <button :disabled="!isValid" @click="handleClickSendAgain()">ขอรหัสใหม่</button>
        <button @click="isValid = !isValid">Switch isValid</button>
    </div>
</template>
<script lang="ts">
    import { onMounted, ref, watch } from 'vue'
    import { useRouter } from 'vue-router'

    export default {
        setup(props) {
            const otp = ref<string[]>(Array(6).fill(''))
            const isValid = ref<boolean>(false)
            const time = ref<number>(61000)
            const focusedIndex = ref<number>(-1)
            const router = useRouter()

            const animateFocus = (index: number) => {
                focusedIndex.value = index
            }

            onMounted(() => {
                console.log('test')
            })

            const animateBlur = (index: number) => {
                focusedIndex.value = -1
            }
            const autoFocusNext = (currentIndex: number) => {
                if (otp.value[currentIndex - 1].length === 1) {
                    document.getElementById('input' + (currentIndex + 1))?.focus()
                    // this.$refs['input' + (currentIndex + 1)][0].focus()
                }
            }
            const autoFocusPrevious = (currentIndex: number) => {
                if (otp.value[currentIndex - 1].length === 0) {
                    document.getElementById('input' + (currentIndex - 1))?.focus()
                    // this.$refs['input' + (currentIndex - 1)][0].focus()
                }
            }

            const handleClickSendAgain = () => {
                alert('test send OTP again')
            }

            watch(otp.value, () => {
                console.log('🚀 ~ file: RegisterOTP.vue:77 ~ watch ~ newOTP', otp)

                if (otp.value.filter((n) => n == '').length == 0) {
                    router.push({ path: 'register/profile' })
                }

                return null
            })

            return {
                otp,
                time,
                isValid,
                animateFocus,
                animateBlur,
                autoFocusNext,
                autoFocusPrevious,
                handleClickSendAgain,
            }
        },
    }
</script>
<style>
    .form-input-otp {
        @apply bg-white border border-gray-300;
    }
    .form-error-otp {
        @apply bg-red-100 border border-pink-500;
    }
</style>
