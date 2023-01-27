import MainPage from '../../views/main/MainPage.vue'
import MainTab from '../../views/main/MainTab.vue'
import PointPage from '../../views/main/PointPage.vue'
import ProfilePage from '../../views/main/ProfilePage.vue'

export const main = [
    {
        path: '/main',
        component: MainTab,
        name: 'Main Tab',
        meta: {
            entry: 'center',
            exit: 'right',
        },
        children: [
            {
                path: '/main/profile',
                component: ProfilePage,
                name: 'profile',
                meta: {
                    title: 'โปรไฟล์',
                    show: true,
                },
            },
            {
                path: '/main/point',
                component: PointPage,
                name: 'point',
                meta: {
                    title: 'สะสมคะแนน',
                    show: true,
                },
            },
            {
                path: '',
                component: MainPage,
                name: 'main',
                meta: {
                    title: 'หน้าหลัก',
                    show: true,
                },
            },
        ],
    },
]
