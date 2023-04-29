<script setup lang="ts">
const works = ref([
  {
    id: 1,
    title: 'RABBIT CARROT SHOTGUN',
  },
  {
    id: 2,
    title: 'Necromancer',
  },
  {
    id: 3,
    title: 'Angel of Darkness',
  },
  {
    id: 4,
    title: 'GRANSAGA',
  },
  {
    id: 5,
    title: 'Apprentice Magic Girl',
  },
  {
    id: 6,
    title: 'Necromancer',
  },
  {
    id: 7,
    title: 'Pirate Demi',
  },
  {
    id: 8,
    title: 'Character Design',
  },
])

// definePageMeta({
//   middleware: 'auth',
// })
</script>

<template>
  <div class="portfolio">
    <UiCard v-for="work in works" :key="work.id" v-bind="work" />
  </div>
</template>

<style scoped>
.portfolio {
    @apply flex flex-wrap;
}
</style>
