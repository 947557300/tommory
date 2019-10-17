import Vue from 'vue'
import App from './App'
import Pub from './pjs/com'
Vue.config.productionTip = false

App.mpType = 'app'
Vue.filter('qw', function (count) {
       let pcount=Number(count);
       if(pcount){
       				 if(pcount/10000>1){
       					 return (pcount/10000).toFixed(1)+'Íò';
       				 }else{
       					return pcount 
       				 }
       }
         else{
       				   return 0
         }  
})

Vue.prototype.$pubFuc = Pub
const app = new Vue({
    ...App
})
app.$mount()
