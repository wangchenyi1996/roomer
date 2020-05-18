import Vue from 'vue'
const My = () => import('@view/My.vue')
const Attendtion = () => import('@view/Attention.vue')
const Money = () => import('@view/Money.vue')
const Coupon = () => import('@view/Coupon.vue')
const Telphone = () => import('@view/Telphone.vue')
const Predestine = () => import('@view/Predestine.vue')
const MyMap = () => import('@view/MyMap.vue')

let myRoute = [
  {
    path: '/my',
    name: 'my',
    component: My,
    meta: {
      showTabBar: true
    }
  },
  {
    path: '/gz/:id',
    name: 'gz',
    component: Attendtion,
    meta: {
      showTabBar: false,
      requiresAuth:true       //是否需要登录权限
    }
  },
  {
    path: '/money',
    name: 'money',
    component: Money,
    meta: {
      showTabBar: false,
      requiresAuth:true       //是否需要登录权限
    }
  },
  {
    path: '/coupon',
    name: 'coupon',
    component: Coupon,
    meta: {
      showTabBar: false,
      requiresAuth:true       //是否需要登录权限
    }
  },
  {
    path: '/telphone',
    name: 'telphone',
    component: Telphone,
    meta: {
      showTabBar: false,
      requiresAuth:true       //是否需要登录权限
    }
  },
  {
    path: '/predestine',
    name: 'predestine',
    component: Predestine,
    meta: {
      showTabBar: false,
      requiresAuth:true       //是否需要登录权限
    }
  },
  {
    path: '/myMap/:id',
    name: 'myMap',
    component: MyMap,
    meta: {
      showTabBar: false,
      requiresAuth:true       //是否需要登录权限
    }
  }
]

export default myRoute