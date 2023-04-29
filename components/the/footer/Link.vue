<script setup lang="ts">
interface Props {
  name: string
  link?: string
  size?: string
}

const { size, name, link } = withDefaults(defineProps<Props>(), {
  size: '1.5',
  link: '#',
})
</script>

<template>
  <a :href="link" target="_blank" class="btn btn-quare"><Icon :name="name" :size="`${size}rem`" /></a>
</template>
