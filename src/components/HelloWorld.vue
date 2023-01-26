<template>
    <div>
        <div>
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
            <div class="flex justify-center pt-3">
                <div v-for="i in 6" :key="i" class="relative mx-2">
                    <input
                        :id="'input' + i"
                        v-model="otp[i - 1]"
                        class="focus:bg-blue-500 block w-10 h-10 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-center text-xl form-input"
                        type="text"
                        maxlength="1"
                        @focus="animateFocus(i - 1)"
                        @blur="animateBlur(i - 1)"
                        @keyup="autoFocusNext(i)"
                        @keydown.backspace="autoFocusPrevious(i)"
                    />
                </div>
            </div>
        </div>
        <div class="justify-center pt-3">
            <p>Count : {{ count }}</p>
            <p>Count : {{ store.doubleCount }}</p>
        </div>
        <div class="justify-center">
            <van-button type="primary" @click="incrementAndPrint()">Primary</van-button>
        </div>
        <div class="pt-4">
            <input class="input-standard border border-gray-300" placeholder="เบอร์" type="text" name="" id="" />
        </div>
        <div class="pt-4">
            <button class="button-standard bg-green-500 boxshadow">test</button>
        </div>
        <div class="pt-4">
            <input
                value="7-Eleven"
                class="input-standard bg-gray-300 text-xs border border-gray-300"
                placeholder="เบอร์"
                type="text"
                name=""
                id=""
            />
        </div>
        <div class="pt-4">
            <button class="button-standard bg-green-500 boxshadow" @click="showPopup()">Pop Alert</button>
        </div>
        <PopUpAlert :show="show">
            <template v-slot:content>
                <h1>This is content {{ show }}</h1>
                <router-link to="/register-moblie">go to Register</router-link>
            </template>
        </PopUpAlert>
    </div>
</template>

<script lang="ts">
    import { mapState } from 'pinia'
    import { useStore } from '../store/index'
    import { ref, computed } from 'vue'
    import PopUpAlert from '../components/modal/PopUpAlert.vue'
    export default {
        components: {
            PopUpAlert,
        },
        setup() {
            const store = useStore()
            const otp = ref<string[]>(Array(6).fill(''))
            const focusedIndex = ref<number>(-1)
            const show = ref(false)
            const showPopup = () => {
                show.value = !show.value
            }
            const animateFocus = (index: number) => {
                focusedIndex.value = index
            }
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
            const incrementAndPrint = () => {
                store.increment()
                console.log('New Count:', store.count)
            }

            const count = computed(() => store.count)
            const doubleCount = computed(() => store.doubleCount)

            return {
                store,
                otp,
                focusedIndex,
                animateFocus,
                animateBlur,
                autoFocusNext,
                autoFocusPrevious,
                incrementAndPrint,
                count,
                doubleCount,
                show,
                showPopup,
            }
        },
    }
</script>

<style>
    .form-input {
        @apply text-gray-700 bg-white border border-gray-300 rounded-full py-0 px-0 block w-full leading-5;
    }
    .animate-focus {
        @apply border-blue-500;
    }
    .relative {
        position: relative;
    }
</style>
