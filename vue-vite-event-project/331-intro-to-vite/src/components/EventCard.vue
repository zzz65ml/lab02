<template>
  <RouterLink class="event-link" :to="{ name: 'event-detail-view', params: { id: event.id } }">
    <!-- 步骤6：将预设单位（p-4/w-64/mb-6）替换为自定义像素单位（p-[20px]/w-[250px]/mb-[18px]） -->
    <div class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
// 前期步骤保留逻辑：引入路由组件、定义Event类型、接收props
import { RouterLink } from 'vue-router'

interface Event {
  id: number
  title: string
  time: string
  date: string
}

defineProps<{
  event: Event
}>()
</script>

<style scoped>

.event-link {
  text-decoration: none; /* 移除链接默认下划线，前期项目原有逻辑 */
}
</style>