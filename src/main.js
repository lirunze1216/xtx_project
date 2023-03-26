import { createApp } from 'vue'
import { initRouter } from './router/index'
import './style.css'
import App from './App.vue'
// import VueLazyload from 'vue-lazyload'

const app = createApp(App)

// app.use(router)  初始化路由
initRouter(app)
// app.use(VueLazyload, {
//   //   loading: require('../../assets/images/default.gif'), //加载中显示的图片
//   attempt: 3,
//   preload: 700, //预加载高度
// })

app.mount('#app')
