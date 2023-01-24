<template>
    <div>
      <div class="flex justify-center">
          <div v-for="i in 6" :key="i" class="relative mx-2">
              <input
                  :ref="'input' + i"
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
                  :ref="'input' + i"
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
      <input class="input-standard border border-gray-300" placeholder="เบอร์" type="text" name="" id="">
    </div>
    <div class="pt-4">
      <button  class="button-standard bg-green-500 boxshadow">test</button>
    </div>
    <div class="pt-4">
      <input value="7-Eleven" class="input-standard bg-gray-300 text-xs border border-gray-300" placeholder="เบอร์" type="text" name="" id="">
    </div>
</template>

<script>
    import { mapState } from 'pinia'
    import { useStore } from '../store/index.ts'

    export default {
        setup() {
            const store = useStore()
            return { store }
        },
        data() {
            return {
                otp: Array(6).fill(''),
                focusedIndex: -1,
            }
        },
        methods: {
            animateFocus(index) {
                this.focusedIndex = index
            },
            animateBlur(index) {
                this.focusedIndex = -1
            },
            autoFocusNext(currentIndex) {
                if (this.otp[currentIndex - 1].length === 1) {
                    this.$refs['input' + (currentIndex + 1)][0].focus()
                }
            },
            autoFocusPrevious(currentIndex) {
                if (this.otp[currentIndex - 1].length === 0) {
                    this.$refs['input' + (currentIndex - 1)][0].focus()
                }
            },
            incrementAndPrint() {
                this.store.increment()
                console.log('New Count:', this.store.count)
            },
        },
        computed: {
            // same as reading from store.count
            ...mapState(useStore, ['count']),
            // same as reading from store.doubleCount
            ...mapState(useStore, ['doubleCount']),
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
