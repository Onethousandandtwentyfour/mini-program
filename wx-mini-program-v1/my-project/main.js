import Vue from 'vue'
import App from './App'
import PageTabbar from './components/page-tabbar'
import PageNavidateBar from './components/page-navigate-bar'

Vue.component('page-tabbar',PageTabbar);
Vue.component('page-navidate-bar',PageNavidateBar);

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()

