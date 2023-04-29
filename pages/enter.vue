<script setup lang="ts">
const loading = ref(false)
const data = reactive({
  email: '',
  password: '',
})

const { login } = useAuth()
const router = useRouter()

definePageMeta({
  // middleware: 'guest',
  layout: false,
  auth: 'guest',
})

async function handleLogin() {
  loading.value = true

  try {
    await login(data)
    router.push({ path: '/admin' })
  }
  catch (error) {
    console.error('login error', error)
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="max-w-xs">
      <h1 class="mb-2">
        Welcome home, master
      </h1>
      <form class="space-y-2" @submit.prevent="handleLogin">
        <UiTextInput v-model="data.email" placeholder="Email" />
        <UiTextInput v-model="data.password" placeholder="Password" type="password" />
        <button class="btn btn-primary w-full">
          Login
        </button>
      </form>
    </div>
  </div>
</template>
