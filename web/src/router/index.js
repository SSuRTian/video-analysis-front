import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },

    { path: '/layout', component: () => import('@/views/layout') },
    { path: '/login', component: () => import('@/views/login/index') },
    { path: '/register', component: () => import('@/views/register/index') },
    
    { path: '/blackperson', component: () => import('@/views/admin/BlackpersonView.vue') },
    { path: '/emp', component: () => import('@/views/admin/EmpView.vue') }
  ]
})

export default router
