# vue

> vue h5


主要 UI 框架 https://youzan.github.io/vant/#/zh-CN/area
页面UI 按需引入的 没有一次性引入 需要用到的自行引入组件

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8001
npm run start

# build for production with minification
npm run build



页面兼容
 static/js/flexible.js
 
 ###### index.html 引入 flexible.js  
            计算html body font-size  
 
 #####  index.html 包含：
             分享 微信  QQ QQ空间 微博 
             根据需要 自行引入 微信js 
              
 #####  定位服务  H5 获取当前定位 
        src/page/positon-web.html 根据经纬度 获取当前定位 根据需要自行查找qq.js中需要获取的key值
        
        媒体查询 以及公共样式存放于
        src/assets下
        
        config.js 配置测试 生成 开发环境URL
        http.js 设置请求
        
        webpack4.0+ vue+ vuex +axios
        
        
        
        如需外部引入其他组件  可直接在mian.js中操作   
        根据页面需要 合理的做好兼容处理工作 
                         


