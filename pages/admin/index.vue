<script setup lang="ts">
const { useAuthUser, getUser } = useAuth()
const user = useAuthUser()
definePageMeta({
  layout: 'admin',
})

async function fetchUser() {
  await getUser()
}
</script>

<template>
  <div>
    Dashboard
    Content: {{ user.username }}
    <div>
      <button @click="fetchUser">
        Fetch user
      </button>
    </div>
  </div>
</template>
