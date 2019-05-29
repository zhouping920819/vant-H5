import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/IdentityCertification/index.vue'
Vue.use(Router)

export default new Router({
    mode: 'hash', // history: {ngnix 配置需要 否则生产环境刷新页面无法找到当前路径 , hash: 开发环境}
    routes: [
        {path: '/', name: 'Index', redirect: '/Index'},
        {path: '/Index', name: 'Index', component: Index},

    ]
})
