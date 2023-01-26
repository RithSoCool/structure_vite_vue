import { mount } from '@vue/test-utils'
import HelloTest from '../components/Hello.vue'
import { describe, it, expect } from 'vitest'

describe('Hello.vue', () => {
    it('should renders is page content is correct', () => {
        const message = 'Happy People'
        const testMessage = 'Happy People'
        const wrapper = mount(HelloTest, {
            props: { message },
        })

        expect(wrapper.text()).toBe(testMessage)
    })

    it('should render if props value is correct', () => {
        const message = 'Happy People'
        const testMessage = 'Happy People'
        const wrapper = mount(HelloTest, {
            props: { message },
        })

        expect(wrapper.vm.message).toBe(testMessage)
    })
})
