import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores/'
Vue.config.productionTip = false

import FastClick from 'fastclick'
// 引入fastclick并绑定到body 解决移动端点击响应延迟0.3s的问题
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}

//事件总线
Vue.prototype.$bus = new Vue();

// 全局引入UI库 vant
import '@/plugins/vant'

// 全局引入iconfont字体图标
import '@fonts/css/iconfont.css'
import '@fonts/js/iconfont.js'

//引用字体图标组件
import "./icons/index.js"

//引入动画库、全局scss样式
import '@fonts/css/animate.css'
import '@common/style.scss'

// 引入滑动组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
Vue.use(VueAwesomeSwiper)

//引入地图
import VueAMap from 'vue-amap'
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 高德的key
    key: 'e22dc483de15177245f84cf6ec987ebe',
    // 插件集合
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
    v: '1.4.4'
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')