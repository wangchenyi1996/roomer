import Vue from 'vue'
const Login = () => import('@view/Login.vue')

let loginRoute = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          showTabBar: false
        }
    }
]

export default loginRoute