import Vue from 'vue'
const Home = () => import('@view/Home.vue')
const Welcome = () => import('@view/Welcome.vue')
const Detail = () => import('@view/Detail.vue')

let homeRoute = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            showTabBar: true,
            requiresAuth:false       //是否需要登录权限
        }
    },
    {
        path: '*',
        redirect: '/home'
    },
    {
        path: '/',
        redirect: '/welcome'
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: Welcome,
        meta: {
            requiresAuth:false       //是否需要登录权限
        }
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail,
        meta: {
            requiresAuth:true       //是否需要登录权限
        }
    }
]

export default homeRoute