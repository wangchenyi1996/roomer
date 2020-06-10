import Vue from 'vue'
import Vuex from 'vuex'
import ziroom from './ziroom'
Vue.use(Vuex)

import Cookies from "js-cookie";
import {
  getLanguage
} from "@/i18n/index";

import createPersistedState from "vuex-persistedstate"

export default new Vuex.Store({
  // 语言模块
  state: {
    language: getLanguage()    // 语言
  },
  actions: {
    setLanguage({ commit }, language) {
      commit("SET_LANGUAGE", language);
    }
  },

  mutations: {
    // 切换语言
    SET_LANGUAGE: (state, language) => {
      // console.log(language,state)
      state.language = language;
      Cookies.set("language", language);
    }
  },

  modules: {
    ziroom
  },

  //默认是 localstorage --缓存state的所有数据
  // plugins: [createPersistedState()] 

  //下面这种可以指定缓存的对象属性
  plugins: [createPersistedState({
    storage: window.localStorage,
    reducer(val) {
      // console.log('vuex数据持久化：',val)
      return {
        // 可以指定储存state中的数据
        ziroom: {
          city: val.ziroom.city,
          userInfo: val.ziroom.userInfo,
          swiperList: val.ziroom.swiperList
        }
      }
    }
  })]

})