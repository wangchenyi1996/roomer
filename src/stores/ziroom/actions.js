import {
    SWIPER_LIST,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    ROOM_LIST,
    CITY_LIST
} from './mutations_types'

import {
    getSwipers,
    getRooms
} from 'api'

export default {
    // 异步获取轮播图
    async getSwiperList({commit}) {
        // 发送异步ajax请求
        let result = await getSwipers()
        // console.log(result)
        // 提交一个mutation
        if (result.code === 200) {
            let swiperList = result.swiperList
            commit(SWIPER_LIST, {
                swiperList
            })
        }
    },

    // 同步记录用户信息
    saveUser({commit}, userInfo) {
        commit(RECEIVE_USER_INFO,
            userInfo
        )
    },

    // 同步记录城市信息
    recordCity ({commit}, city) {
        commit(CITY_LIST, city)
    },

    // 异步获取用户信息
    async getUserInfo({commit}) {
        // const result = await reqUserInfo()
        // if (result.code == 0) {
        // const userInfo = result.data
        commit(RECEIVE_USER_INFO, {
            userInfo
        })
        // }
    },

    // 异步登出
     async logout({commit}) {
        // const result = await reqLogout()
        // if (result.code == 0) {
            commit(RESET_USER_INFO)
        // }
    },

    //房屋列表
    async getRoomList({commit}) {
        // 发送异步ajax请求
        let result = await getRooms()
        // 提交一个mutation
        if (result.code === 200) {
            let roomList = result.data
            commit(ROOM_LIST, {
                roomList
            })
        }
    }

}