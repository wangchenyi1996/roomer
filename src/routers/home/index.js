/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 王强
 * @Date: 2020-05-13 12:05:47
 * @LastEditors: 王强
 * @LastEditTime: 2020-05-18 09:10:12
 */
import Vue from 'vue'
const Home = () =>
    import ('@view/Home.vue')
const Welcome = () =>
    import ('@view/Welcome.vue')
const Detail = () =>
    import ('@view/Detail.vue')
const City = () =>
    import ('@view/City.vue')

const Test = () =>
    import ('@view/Test.vue')

const NotFound = () =>
    import ('@view/NotFound.vue')

let homeRoute = [{
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            showTabBar: true,
            requiresAuth: false //是否需要登录权限
        }
    },
    {
        path: '*',
        component: NotFound
    },
    // {
    //     path: '*',
    //     redirect: '/home'
    // },
    {
        path: '/',
        redirect: '/welcome'
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: Welcome,
        meta: {
            requiresAuth: false //是否需要登录权限
        }
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail,
        meta: {
            requiresAuth: true //是否需要登录权限
        }
    },
    {
        path: '/city',
        name: 'city',
        component: City,
        meta: {
            requiresAuth: false //是否需要登录权限
        }
    },
    // 测试 使用 ::v-deep  /deep/  >>>  修改第三方组件样式
    {
        path: '/test',
        name: 'test',
        component: Test,
        meta: {
            requiresAuth: false //是否需要登录权限
        }
    }

]

export default homeRoute