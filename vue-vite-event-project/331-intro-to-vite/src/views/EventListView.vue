<template>
  <div>
    <h1>Events For Good</h1>
    <!-- 步骤2.2保留的Tailwind Flex类：flex flex-col items-center（替换原.events类） -->
    <div class="flex flex-col items-center">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
      <div class="pagination">
        <!-- 前期项目分页组件内容（如页码按钮、翻页逻辑），按原有代码保留 -->
        <button :disabled="currentPage === 1">上一页</button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages">下一页</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 前期步骤保留逻辑：引入EventCard、定义数据、模拟接口请求
import EventCard from '@/components/EventCard.vue'
import { ref, onMounted } from 'vue'

interface Event {
  id: number
  title: string
  time: string
  date: string
}

const events = ref<Event[]>([])
const currentPage = ref(1)
const totalPages = ref(1)

// 模拟获取事件数据（前期项目原有逻辑）
onMounted(() => {
  events.value = [
    { id: 1, title: "Charity Run", time: "08:00 AM", date: "2025-11-10" },
    { id: 2, title: "Book Donation", time: "02:00 PM", date: "2025-11-15" }
  ]
  totalPages.value = Math.ceil(events.value.length / 10) // 按每页10条数据计算总页数
})
</script>

<style scoped>

.pagination {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  justify-content: center;
  padding: 10px 0;
}
</style>