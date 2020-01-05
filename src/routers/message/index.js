const Message = () => import('@view/Message.vue')

let msgRoute = [
  {
    path: '/msg',
    name: 'msg',
    component: Message,
    meta: {
      showTabBar: false,
      requiresAuth:true       //是否需要登录权限
    }
  }
]

export default msgRoute