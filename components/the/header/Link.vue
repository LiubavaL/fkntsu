<script setup lang="ts">
interface Props {
  to: string
  label?: string
}

const { to, label } = defineProps<Props>()
</script>

<template>
  <NuxtLink :to="to" class="btn btn-ghost">
    {{ label }}
  </NuxtLink>
</template>
