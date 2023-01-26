<template>
    <div class="">
        <div class="bg-gray-200 flex justify-between min-w-full absolute bottom-0 left-0">
            <div class="tabbar w-full bg-green-400">
                <div class="tabbar-item" @click="pageMain()">
                    <p class="text-gray-800">หน้่าหลัก</p>
                </div>
                <div class="tabbar-item" @click="pagePoint()">
                    <p class="text-gray-800">สะสมคะแนน</p>
                </div>
                <div class="tabbar-item" @click="pageProfile()">
                    <p class="text-gray-800">โปรไฟล์</p>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import { useRouter } from 'vue-router'
    export default {
        setup () {
            const router = useRouter();
            const pageMain = () => {
                router.push({path : '/main/mainpage'})
            }
            const pageProfile = () => {
                router.push({path : '/main/point'})
            } 
            const pagePoint = () => {
                router.push({path : '/main/profile'})
            }
            return { pageMain , pagePoint , pageProfile }
        }
    }
</script>

<style lang="scss" scoped>
 .tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  /* background-color: #fff; */
  box-shadow: 0 -1px 0 #edf2f7 inset;
}

.tabbar-item {
  flex: 1;
  text-align: center;
}

.tabbar-item p {
  display: inline-block;
  padding: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  color: #4a5568;
}
</style>