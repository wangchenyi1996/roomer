import Vue from 'vue'
import Router from 'vue-router'

import homeRoute from '@/routers/home'
import findHomeRoute from '@/routers/findHome'
import myRoute from '@/routers/my'
import delegate from '@/routers/delegate'
import login from '@/routers/login'
import msgRoute from '@/routers/message'
import setRoute from '@/routers/set'

import store from '../../src/stores'
// import {getStore} from '../config/mUtils'

Vue.use(Router)

const router = new Router({
    linkActiveClass: 'active',
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...homeRoute,
        ...findHomeRoute,
        ...myRoute,
        ...delegate,
        ...login,
        ...msgRoute,
        ...setRoute
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

//路由守卫
// router.beforeEach((to, from, next) => {
//   // console.log(to,from)
//   let flag = store.state.ziroom.userInfo
//   // console.log(flag)
//   if (to.matched.some(record => record.meta.requiresAuth)) { // 判断该路由是否需要登录权限
//     // if (getStore('userinfo')) {   //利用缓存来判断,也可以用vuex来判断
//     if (flag && flag.isLogin) {   //也可以用vuex来判断
//       next();
//     } else {
//       next('/login')
//     }
//   } else {
//     next();
//   }
// })

router.beforeEach((to, from, next) => {
    // console.log(to,from)
    let flag = store.state.ziroom.userInfo
        // console.log(flag)
    if (to.matched.some(record => record.meta.requiresAuth)) { // 判断该路由是否需要登录权限
        // if (getStore('userinfo')) {   //利用缓存来判断,也可以用vuex来判断
        if (flag && flag.isLogin) { //也可以用vuex来判断
            next()
        } else {
            next('/login')
        }
    } else {
        if (flag && flag.isLogin) { //也可以用vuex来判断
            if (to.path == '/login') {
                next('/home')
            } else {
                next()
            }
        } else {
            next()
        }
    }
})

export default router;