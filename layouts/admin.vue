<script setup lang="ts">
const { useAuthLoading, useAuthUser } = useAuth()
const loading = useAuthLoading()
const user = useAuthUser()
</script>

<template>
  <UiLoader v-if="loading" />
  <div v-else-if="user" class="flex flex-col min-h-screen">
    <main class="flex-grow flex">
      <div class="w-56">
        <AdminMenu />
      </div>
      <div class="flex-grow">
        <div class="m-2">
          <AdminTheHeader />
        </div>
        <slot />
      </div>
    </main>
  </div>
</template>
