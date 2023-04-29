<script setup lang="ts">
interface Props {
  datetime?: string
  cover?: string
  title?: string
  description?: string
}
const { datetime, cover, title, description } = defineProps<Props>()
</script>

<template>
  <div class="flex px-2 py-1 bg-gray-200">
    <div v-if="cover" class="w-12 h-12 mr-2 " :style="{ backgroundImage: `url(${cover})` }" />
    <div>
      <span>{{ datetime }}</span>
      <h3 class="text-red-300 dark:text-indigo-600">
        {{ title }}
      </h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
