<template>
  <!-- 步骤3.2保留的Tailwind基础类：text-center font-sans text-gray-700 antialias -->
  <div class="text-center font-sans text-gray-700 antialias">
    <header>
      <!-- 步骤10.2：为flashMessage添加animate-fade类（应用步骤10.1定义的动画） -->
      <div id="flashMessage" class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <!-- 步骤12.8：新增“Deploy with Vercel”标题（文档要求添加） -->
      <h1>Deploy with Vercel</h1>
      <div class="wrapper">
        <!-- 步骤9.1：为nav添加py-6类，为RouterLink添加基础样式与exact-active-class -->
        <nav class="py-6">
          <RouterLink
              class="font-bold text-gray-700"
              exact-active-class="text-green-500"
              :to="{ name: 'event-list-view' }"
          >
            Event
          </RouterLink> |
          <RouterLink
              class="font-bold text-gray-700"
              exact-active-class="text-green-500"
              :to="{ name: 'about' }"
          >
            About
          </RouterLink>
        </nav>
      </div>
    </header>
    <!-- 项目原有路由出口（文档未修改，保留） -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
// 前期步骤保留逻辑：引入路由组件、定义message响应式变量
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// 步骤3.2保留的flashMessage逻辑（临时提示信息）
const message = ref<string | null>(null)

// （可选）前期项目触发message的逻辑（如事件添加成功提示），按原有代码保留
// const showSuccessMessage = (text: string) => {
//   message.value = text
//   setTimeout(() => message.value = null, 3000)
// }
</script>

<style scoped>
/* 步骤3.2已删除#layout样式，步骤10.3已删除flashMessage旧样式 */
/* 步骤9.1保留的nav原有样式（补充文档中缺失的单位） */
nav {
  padding: 30px; /* 文档3.2步骤提及的原有padding，补充px单位 */
  /* （可选）前期项目中nav的额外样式（如底部边框），按原有代码保留 */
  /* border-bottom: 1px solid #e5e7eb; */
}
</style>