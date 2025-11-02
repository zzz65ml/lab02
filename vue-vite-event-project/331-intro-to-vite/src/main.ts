// 步骤1.4：引入Tailwind配置的style.css（替换原main.css）
import './assets/style.css'

// 前期步骤保留的依赖引入：Vue核心、Pinia状态管理、根组件、路由
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 创建Vue应用实例并挂载插件
const app = createApp(App)
app.use(createPinia())
app.use(router)

// 挂载根组件到DOM
app.mount('#app')