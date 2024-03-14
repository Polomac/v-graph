import { mount } from '@vue/test-utils'
import Button from '../Button.vue'
import { expect, test, describe } from 'vitest'

describe('Button', () => {
  test('It exist', () => {
    const wrapper = mount(Button)
    expect(wrapper.find('.default-button').exists()).toBeTruthy()
  })

  test('Is the right color', () => {
    const primary = true
    const wrapper: any = mount(Button, {
      props: { primary, label: 'butt' }
    })

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['primary']))
  })

  test('Is rounded', () => {
    const rounded = true
    const wrapper: any = mount(Button, {
      props: { rounded, label: 'butt' }
    })

    expect(wrapper.classes()).toEqual(expect.arrayContaining(['rounded']))
  })

  test('Label is correct', () => {
    const label = 'Button'
    const wrapper: any = mount(Button, {
      props: { label }
    })

    expect(wrapper.text()).toContain('Button')
  })

  test('Emits action', async () => {
    const wrapper: any = mount(Button)
    let butt = wrapper.find('.default-button')
    await butt.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('action')
  })
})