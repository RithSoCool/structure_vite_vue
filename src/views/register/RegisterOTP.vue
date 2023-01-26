<template lang="">
    <div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae natus deserunt qui est repellat dolor aut
            eligendi, corrupti ipsa illum velit at harum minus tenetur optio cum recusandae ipsum in!
        </p>
        <div class="flex justify-center">
            <div v-for="i in 6" :key="i" class="relative mx-2">
                <input
                    :id="'input' + i"
                    v-model="otp[i - 1]"
                    class="focus:bg-blue-500 block w-10 h-10 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-center text-xl input-error"
                    type="text"
                    maxlength="1"
                    @focus="animateFocus(i - 1)"
                    @blur="animateBlur(i - 1)"
                    @keyup="autoFocusNext(i)"
                    @keydown.backspace="autoFocusPrevious(i)"
                />
            </div>
        </div>
        <button :disable="isValid">ขอรหัสใหม่</button>
    </div>
</template>
<script lang="ts">
    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router'

    export default {
        setup(props) {
            const otp = ref<string[]>(Array(6).fill(''))
            const isValid = ref<boolean>(false)
            const focusedIndex = ref<number>(-1)

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
            return {
                otp,
                isValid,
                animateFocus,
                animateBlur,
                autoFocusNext,
                autoFocusPrevious,
            }
        },
    }
</script>
<style lang=""></style>
