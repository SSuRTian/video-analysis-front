import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Register from '@/views/register'
// import Layout from '@/views/layout'

// import Monitor from '@/layout/monitor'
// import Record from '@/layout/record'
// import User from '@/layout/user'

// import UserManage from '@/layout/admin/userManage'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {path:'/blackperson',component:()=>import('@/views/layout/BlackpersonView.vue')},
    {path:'/emp',component:()=>import('@/views/layout/EmpView.vue')}
    // {
    //   path: '/layout',
    //   component: Layout,
    //   children: [
    //     { path: '/monitor', component: Monitor },
    //     { path: '/record', component: Record },
    //     { path: '/user', component: User }
    //   ]
    // },
    // {
    //   path: '/admin',
    //   redirect: '/userManage',
    //   children: [
    //     { path: '/userManage', component: UserManage }
    //   ]
    // }
  ]
})

export default router
