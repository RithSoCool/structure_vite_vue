import RegisterMobile from '../../views/register/RegisterMobile.vue'
import RegisterOTP from '../../views/register/RegisterOTP.vue'
import RegisterProfile from '../../views/register/RegisterProfile.vue'

export const register = [
    {
        path: '/register',
        component: RegisterMobile,
        name: 'Register Mobile',
        meta: {
            entry: 'center',
            exit: 'right',
        },
    },
    {
        path: '/register/verify-otp',
        component: RegisterOTP,
        name: 'Register OTP',
    },
    {
        path: '/register/profile',
        component: RegisterProfile,
        name: 'Register Profile',
        meta: {
            entry: 'center',
            exit: 'center',
        },
    },
]
