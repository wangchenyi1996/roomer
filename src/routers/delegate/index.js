import Vue from 'vue'
const Delegate = () => import('@view/Delegate.vue')

let delegateRoute = [
  {
    path: '/delegate',
    name: 'delegate',
    component: Delegate,
    meta: {
      showTabBar: true,
      requiresAuth:false       //是否需要登录权限
    }
  }
]

export default delegateRoute