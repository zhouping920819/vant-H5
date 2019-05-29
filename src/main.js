/*eslint spaced-comment:0*/
/*eslint no-multiple-empty-lines:0*/
import Vue from 'vue'
import router from './router.js'
import store from './store'
import http from './http.js'
import './assets/less/main.less'
import './assets/comcss.css'
import 'vant/lib/index.css'

Vue.prototype.http = http
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<router-view />'
})

