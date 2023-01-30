<template lang="">
   
    <p>สมัครสมาชิกร่วมกิจกรรม</p>
    <div>
        <label for="fname"> ชื่อ </label>
        <input type="text" id="fname" v-model="firstName" />

        <label for="lname"> นามสกุล </label>
        <input type="text" id="lname" v-model="lastName" />
    </div>
    <div>
        <label for="phone"> เบอร์มือถือ </label>
        <input type="text" id="phone" v-model="phoneNumber" />
    </div>
    <div>
        <label for="birthDate"> วัน/เดือน/ปีเกิด </label>
        <input type="text" id="birthDate" v-model="birthDate" />
    </div>
    <div>
        <label for="gender"> เพศ </label>
        <input type="text" id="gender" v-model="gender" />
    </div>
    <div>
        <label for="province"> จังหวัด </label>
        <input type="text" id="province" v-model="province" />

        <label for="district"> เขต/อำเภอ </label>
        <input type="text" id="district" v-model="district" />
    </div>
    <div>
        <label for="postcode"> รหัสไปรษณีย์ </label>
        <input type="text" id="postcode" v-model="postcode" />
    </div>
</template>
<script lang="ts">
    import { ref } from 'vue'

    export default {
        setup(props) {
            const firstName = ref<string>('')
            const lastName = ref<string>('')
            const phoneNumber = ref<string>('')
            const birthDate = ref<string>('')
            const gender = ref<string>('')
            const province = ref<string>('')
            const district = ref<string>('')
            const postcode = ref<string>('')
            return {
                firstName,
                lastName,
                phoneNumber,
                birthDate,
                gender,
                province,
                district,
                postcode,
            }
        },
    }
</script>
<style lang=""></style>
