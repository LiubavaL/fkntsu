<script setup lang="ts">
interface Props {
  src?: string
}

const { src } = withDefaults(defineProps<Props>(), {
  src: '#',
})
</script>

<template>
  <div class="avatar">
    <div class="w-12 rounded-xl">
      <img :src="src">
    </div>
  </div>
</template>
