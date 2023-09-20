import { mount } from '@vue/test-utils'
import VueImageDropForm from '../src/components/VueImageDropForm.vue'

function customCreateObjectURL(blob) {
  const content = blob.size + blob.type + blob.name
  return `blob:${content}`
}

describe('VueImageDropForm.vue', () => {
  beforeEach(() => {
    window.URL.createObjectURL = vi.fn(customCreateObjectURL)
  })

  it('renders the correct label', () => {
    const wrapper = mount(VueImageDropForm, {
      props: { label: 'Test Label' }
    })
    expect(wrapper.text()).toContain('Test Label')
  })

  it('emits a change event when a file is selected', async () => {
    const wrapper = mount(VueImageDropForm)
    const file = new File([''], 'image.jpg')
    await wrapper.vm.selectFile([file])
    expect(wrapper.emitted().change).toBeTruthy()
  })

  it('generates the correct image URL', async () => {
    const wrapper = mount(VueImageDropForm)
    const file = new File([''], 'image.jpg')
    wrapper.vm.imageFile = file
    expect(wrapper.vm.imageUrl).toBe(URL.createObjectURL(file))
  })
})
