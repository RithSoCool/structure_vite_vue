import ProfileCondition from '../../views/profile-history/ProfileCondition.vue'
import ProfilePolicy from '../../views/profile-history/ProfilePolicy.vue'


export const profile =[
    {
        path: '/profile-condition',
        component: ProfileCondition,
        name: 'Profile Condition',
        meta: {
            entry: 'center',
            exit: 'right',
            title: 'ข้อกำหนดและเงื่อนไข',
            show: true,
        },
    },
    {
        path: '/profile-policy',
        component: ProfilePolicy,
        name: 'Profile Policy',
        meta: {
            entry: 'center',
            exit: 'right',
            title: 'นโยบายความเป็นส่วนตัว',
            show: true,
        },
    },
]