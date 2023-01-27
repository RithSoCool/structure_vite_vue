<template>
    <div class="relative w-full h-full main-layout-content pt-2">
        <div class="w-full h-full homepage-background-container">
            <!-- <div class="">
                <img class="w-full bg-white" :src="mockBg" alt="" />
            </div> -->
            <div class="w-full h-full homepage-list-container">
                <div class="">
                    <img class="w-full bg-white" :src="mockBg" alt="" />
                </div>
                <button class="rounded-full text-white my-4 bg-red-800 w-[90px] h-[30px]">อันดับของคุณ</button>
                <MyUserItem />
                <button class="rounded-full text-white my-4 bg-lime-600 w-[90px] h-[30px]">Top Spender</button>
                <homepage-item v-for="item in userList" :key="item.rank" :userObj="item" />
                <div class="homepage-footer py-4">
                    <div class="homepage-footer-text">
                        ติดตามรายละเอียดเพิ่มเติมได้ `${img}` <br />
                        #D7 #D7Thailand #D7คอมบูชะ
                    </div>
                    <div class="homepage-footer-text-link underline text-lime-700">รายละเอียดกิจกรรม</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import mockBg from '../../assets/image/homepage/mock-bg.png'
    import HomepageItem from '../homepage/components/HomepageItem.vue'
    import MyUserItem from './components/MyUserItem.vue'
    import { ref } from 'vue'
    export default {
        components: { HomepageItem, MyUserItem },
        setup(props) {
            interface Customer {
                rank: number
                name: string
                points: number
                icon?: string
                img?: string
            }
            const userList = ref<Customer[]>([
                { rank: 1, name: 'มารีย์ สุขสวัสดิ์', points: 1250 },
                { rank: 2, name: 'อัญชลี กุลชัย', points: 1100 },
                { rank: 3, name: 'ภัทรา พันธ์กาญจน์', points: 900 },
                { rank: 4, name: 'นิธิพงษ์ สุขเกษม', points: 800 },
                { rank: 5, name: 'กาญจนา จันทร์โอชา', points: 700 },
                { rank: 6, name: 'นิภาภรณ์ กาญจนาภา', points: 650 },
                { rank: 7, name: 'พิชัย พันธุ์ศิริ', points: 600 },
                { rank: 8, name: 'สุชาติ ศรีสุข', points: 550 },
                { rank: 9, name: 'วรรณภูมิ กิตติพงษ์', points: 500 },
                { rank: 10, name: 'อนุชา สุขสุข', points: 450 },
            ])
            return {
                mockBg,
                userList,
            }
        },
    }
</script>

<style>
    .homepage-list-container {
        overflow-y: scroll;
        position: relative;
        scroll-behavior: smooth;
    }
    .homepage-background-container {
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
