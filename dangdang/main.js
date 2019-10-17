import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
import uniIcon from "@/components/uni-icons/uni-icons"
Vue.component("uniIcon",uniIcon)
const app = new Vue({
    ...App
})
app.$mount()
