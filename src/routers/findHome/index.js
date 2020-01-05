import Vue from 'vue'
const FindHome = () => import('@view/FindHome.vue')
const Empty = () => import('@view/Empty.vue')

let findHomeRoute = [
    {
        path: '/findHome',
        name: 'findHome',
        component: FindHome,
        meta: {
          showTabBar: true,
          requiresAuth:false       //是否需要登录权限
        }
    },
    {
      path: '/empty',
      name: 'empty',
      component: Empty,
      meta: {
        showTabBar: true,
        requiresAuth:false       //是否需要登录权限
      }
  }
]

export default findHomeRoute