import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores/'

//事件总线
Vue.prototype.$bus = new Vue();

//vant组件库
import {
    Button,
    Swipe,
    SwipeItem,
    Lazyload,
    Dialog,
    Toast,
    Tab,
    Tabs,
    Switch,
    Uploader,
    DropdownMenu,
    DropdownItem,
    Checkbox,
    CheckboxGroup,
    TreeSelect,
    Divider,
    ActionSheet,
    Picker,
    Popup,
    Loading
} from 'vant';
Vue.use(Button).use(Swipe).use(SwipeItem).use(Lazyload, { preLoad: 1, }).use(Dialog).use(Toast)
    .use(Tab).use(Tabs).use(Switch).use(Uploader).use(DropdownMenu).use(DropdownItem).use(TreeSelect).use(Divider)
    .use(Checkbox).use(CheckboxGroup).use(ActionSheet).use(Picker).use(Popup).use(Loading)

// 全局引入iconfont字体图标
import '@fonts/css/iconfont.css'
import '@fonts/js/iconfont.js'

//引入动画库、全局scss样式
import '@fonts/css/animate.css'
import '@common/style.scss';

// 引入滑动组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
Vue.use(VueAwesomeSwiper)

//引入地图
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
    // 高德的key
    key: 'e22dc483de15177245f84cf6ec987ebe',
    // 插件集合
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
    v: '1.4.4'
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')