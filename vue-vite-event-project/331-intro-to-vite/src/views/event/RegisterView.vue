<!-- views/event/RegisterView.vue -->
<template>
  <div class="register-container">
    <h3>Register for {{ event.title }}</h3>
    <button @click="register">Register Me!</button> <!-- 注册按钮 -->
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'; // 用于路由跳转
import { useMessageStore } from '@/stores/message'; // 引入Pinia消息存储
import type { Event } from '@/types'; // 引入Event类型

// 接收父组件传递的event props
const props = defineProps<{
  event: Event; // 从活动详情页传递的活动信息
}>();

// 初始化路由与Pinia存储
const router = useRouter();
const store = useMessageStore(); // 实例化Pinia存储

// 注册按钮点击事件
const register = () => {
  // 1. 存储Flash消息（含活动标题）
  store.updateMessage(`You are successfully registered for ${props.event.title}`);

  // 2. 3秒后自动清除消息（配合CSS动画实现"消失"效果）
  setTimeout(() => {
    store.resetMessage();
  }, 3000);

  // 3. 跳转到活动详情页（携带活动ID参数）
  router.push({
    name: 'event-detail-view',
    params: { id: props.event.id } // 传递活动ID，确保详情页能加载对应数据
  });
};
</script>

<style scoped>
.register-container {
  padding: 20px;
}
button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>