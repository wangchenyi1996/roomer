const Set = () => import('@view/Set.vue')

let setRoute = [
  {
    path: '/set',
    name: 'set',
    component: Set,
    meta: {
      showTabBar: false,
      requiresAuth:true       //是否需要登录权限
    }
  }
]

export default setRoute