<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import type { Event } from '@/types'
import { ref, onMounted } from 'vue'

const events = ref<Event[]>([])

// 替换为你的 GitHub 用户名和仓库名（例如：https://my-json-server.typicode.com/username/repo-name）
const MOCK_SERVER_URL = 'https://my-json-server.typicode.com/[你的GitHub用户名]/[你的仓库名]'

onMounted(async () => {
  try {
    const response = await fetch(`${MOCK_SERVER_URL}/events`)
    const data = await response.json()
    events.value = data // 从 Mock Server 获取数据
  } catch (error) {
    console.error('Failed to fetch events:', error)
    // 本地备选数据（请求失败时使用）
    events.value = [
      {
        id: 5928101,
        category: 'animal welfare',
        title: 'Cat Adoption Day',
        description: 'Find your new feline friend at this event.',
        location: 'Meow Town',
        date: 'January 28, 2022',
        time: '12:00',
        petsAllowed: true,
        organizer: 'Kat Laydee'
      },
      {
        id: 4582797,
        category: 'food',
        title: 'Community Gardening',
        description: 'Join us as we tend to the community edible plants.',
        location: 'Flora City',
        date: 'March 14, 2022',
        time: '10:00',
        petsAllowed: true,
        organizer: 'Fern Pollin'
      },
      {
        id: 8419988,
        category: 'sustainability',
        title: 'Beach Cleanup',
        description: 'Help pick up trash along the shore.',
        location: 'Playa Del Carmen',
        date: 'July 22, 2022',
        time: '11:00',
        petsAllowed: false,
        organizer: 'Carey Wales'
      }
    ]
  }
})
</script>

<template>
  <h1>Events For Good</h1> <!-- 仅首页显示的标题 -->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}
</style>