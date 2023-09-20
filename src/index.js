
import VueImageDropForm from './components/VueImageDropForm.vue'

export function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('VueImageDropForm', VueImageDropForm)
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

export default VueImageDropForm
