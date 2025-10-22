<template>
+  <h1>Events For Good</h1>
+  <!-- 仅首页显示的标题 -->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
