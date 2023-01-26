
import ImageForm from './components/ImageForm.vue'

export function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('ImageForm', ImageForm)
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default ImageForm
