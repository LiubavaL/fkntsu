<script setup lang="ts">
interface Props {
  title?: string
  cover?: string
}

const { title, cover } = withDefaults(defineProps<Props>(), {
  title: 'Title',
  cover: '/img/default.jpeg',
})
</script>

<template>
  <div class="w-1/3 h-40 border border-gray-300 p-2 bg-cover" :style="{ backgroundImage: `url(${cover})` }">
    {{ title }}
  </div>
</template>
