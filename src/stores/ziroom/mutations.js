import {
    SWIPER_LIST,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    ROOM_LIST
} from './mutations_types'

// import { setStore ,getStore} from '../../config/mUtils'

export default {
    // 首页轮播图
    [SWIPER_LIST](state, {swiperList}) {
        state.swiperList = swiperList
    },

    //获取用户信息
    [RECEIVE_USER_INFO](state, userInfo) {
        state.userInfo = userInfo
        // 设置缓存
        // setStore('userinfo',userInfo)
    },

    //退出登录
    [RESET_USER_INFO](state) {
        // console.log(getStore('vuex'))
        state.userInfo = {}
    },

    // 首页房屋列表
    [ROOM_LIST](state, {roomList}) {
        // console.log(state,roomList)
        state.roomList = roomList
    }
    
};