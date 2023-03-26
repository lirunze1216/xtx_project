import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/homepage' },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue'),
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('../views/homepage/homepage.vue'),
  },
]
// 直接调用creteRouter方法来注册
const router = createRouter({
  // 路由工作方式
  history: createWebHashHistory(),
  // 路由配置
  routes,
})

// // 前置导航守卫
// router.beforeEach((to, from, next) => {
//   // 1.token && vuex里面的menus（权限列表）为空
//   const token = Cookies.get('token')
//   if (token && store.state.menus.length === 0) {
//     // 这里是异步的
//     store.dispatch('getAdminInfo').then(() => {
//       genRoutes()
//       next(to)
//     })
//   } else if (token && to.path === '/homepage' && from.path === '/login' && store.state.menus.length !== 0) {
//     // 动态添加路由规则
//     genRoutes()
//     next('index')
//   } else if (!token && to.path !== '/login') {
//     next('login')
//   } else if (token && to.path === '/login') {
//     next(from)
//   } else {
//     next()
//   }
// })

// 这样导出方法的写法倒是可以导出多个,要用的地方直接调用这个方法
export const initRouter = app => {
  app.use(router)
}

// export default router 默认导出只能导出一个
