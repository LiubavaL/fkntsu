<script setup lang="ts">
const posts = ref([
  {
    id: 1,
    createdAt: '23/02/2022',
    cover: '/img/default.jpeg',
    title: 'Build and Deploy a Full Stack Social Media App with Nuxt 3, TailwindCSS and Prisma',
    description: 'We are going to be making a Social Media App (a Twitter clone) and you will learn how to build the best and most modern one using Nuxt 3, Tailwind CSS and Prisma simply by watching this course.',
  },
  {
    id: 2,
    createdAt: '01/02/2022',
    cover: '/img/default.jpeg',
    title: 'Build and Deploy a Full Stack Social Media App with Nuxt 3, TailwindCSS and Prisma',
    description: 'We are going to be making a Social Media App (a Twitter clone) and you will learn how to build the best and most modern one using Nuxt 3, Tailwind CSS and Prisma simply by watching this course.',
  },
  {
    id: 3,
    createdAt: '01/02/2022',
    cover: '/img/default.jpeg',
    title: 'Build and Deploy a Full Stack Social Media App with Nuxt 3, TailwindCSS and Prisma',
    description: 'We are going to be making a Social Media App (a Twitter clone) and you will learn how to build the best and most modern one using Nuxt 3, Tailwind CSS and Prisma simply by watching this course.',
  },
  {
    id: 4,
    createdAt: '01/02/2022',
    cover: '/img/default.jpeg',
    title: 'Build and Deploy a Full Stack Social Media App with Nuxt 3, TailwindCSS and Prisma',
    description: 'We are going to be making a Social Media App (a Twitter clone) and you will learn how to build the best and most modern one using Nuxt 3, Tailwind CSS and Prisma simply by watching this course.',
  },
  {
    id: 5,
    createdAt: '01/02/2022',
    cover: '/img/default.jpeg',
    title: 'Build and Deploy a Full Stack Social Media App with Nuxt 3, TailwindCSS and Prisma',
    description: 'We are going to be making a Social Media App (a Twitter clone) and you will learn how to build the best and most modern one using Nuxt 3, Tailwind CSS and Prisma simply by watching this course.',
  },
])
const desc = ref('My description here')

useHead({
  meta: [
    { name: 'description', content: desc },
  ],
})
definePageMeta({
  auth: false,
})
</script>

<template>
  <div class="space-x-2 space-y-1">
    <PostPreview v-for="post in posts" :key="post.id" v-bind="post" />
  </div>
</template>
