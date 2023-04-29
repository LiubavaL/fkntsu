<script setup lang="ts">
const menu = [
  {
    title: 'Users',
    path: '/admin/users',
  },
  {
    title: 'Posts',
    path: '/admin/posts',
  },
  {
    title: 'Works',
    path: '/admin/works',
  },
]
</script>

<template>
  <div class="bg-base-300 h-full w-full">
    <ul class="menu p-2 rounded-box">
      <li v-for="({ title, path }, index) in menu" :key="index">
        <NuxtLink :to="path">
          {{ title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
