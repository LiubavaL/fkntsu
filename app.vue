<script setup>
const router = useRouter()

router.beforeEach((to, from) => {
  Object.defineProperty(document, 'referrer', {
    configurable: true,
    get: () => from.name || '',
  })
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
