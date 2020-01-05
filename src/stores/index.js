import Vue from 'vue'
import Vuex from 'vuex'
import ziroom from './ziroom'
Vue.use(Vuex)

import createPersistedState from "vuex-persistedstate"


export default new Vuex.Store({
  modules: {
    ziroom
  },
  plugins: [createPersistedState()] //默认是 localstorage --缓存state的所有数据

  // plugins: [createPersistedState({
  //   storage: window.localStorage,
  //   reducer(val) {
  //     // console.log(val)
  //     return {
  //       // 可以指定储存state中的数据
  //       city:val.ziroom.city,
  //       userInfo: val.ziroom.userInfo,
  //       swiperList: val.ziroom.swiperList
  //     }
  //   }
  // })]

})