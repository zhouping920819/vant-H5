import axios from 'axios'
import config from './config.js'
import store from './store/index'

const http = axios.create({
    baseURL: config.baseUrl,
    timeout: 1000 * 1000, // 1 秒
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    }
})

http.interceptors.request.use((conf) => {
    let token = store.getters.getToken// window.localStorage.getItem('token')
    if (token) {
        conf.headers['token'] = token
    }

    return conf
}, err => {
    return Promise.reject(err)
})

http.interceptors.response.use(
    response => {
        // if (response.data.code !== 200) {
        //     //弹窗...
        //     return
        // }
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default http
