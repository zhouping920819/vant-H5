<template>
   <div>
       <van-swipe :autoplay="3000" indicator-color="white">
           <van-swipe-item v-for="(image, index) in images" :key="index" @click="bannerData(index)">
               <img v-lazy="image">
           </van-swipe-item>
       </van-swipe>
   </div>
</template>

<script>
    import {
        Swipe,
        SwipeItem,
        Lazyload
    } from 'vant';
    import Vue from "vue";
    Vue.use(Lazyload, {
        preLoad: 1,
        error: "https://img.yzcdn.cn/2.jpg",
        loading:  "https://img.yzcdn.cn/2.jpg",
        attempt: 3
    });
export default {
    data () {
        return {
            images: [
                "https://img.yzcdn.cn/2.jpg",
                "https://img.yzcdn.cn/2.jpg",
                "https://img.yzcdn.cn/2.jpg"
            ]
        }
    },
    computed: {},
    mounted () {

    },
    methods: {
        bannerData () {}
    },
    components: {
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Lazyload.name]: Lazyload,
    }
}
</script>

<style lang='less'>
    @import 'index.less';
    .index-banner {
        background: #0894ec;
        height: 200px;
        width: 100%;
    }
</style>
