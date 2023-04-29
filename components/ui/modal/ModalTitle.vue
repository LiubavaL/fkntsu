<script setup lang="ts">
interface Props {
  title: string
}
const { title } = defineProps<Props>()
</script>

<template>
  <h3 class="text-lg font-bold">
    {{ title }}
  </h3>
</template>
