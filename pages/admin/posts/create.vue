<script setup lang="ts">
const router = useRouter()

const cancel = async () => {
  if (document.referrer)
    router.back()
  else
    await navigateTo('/admin/posts')
}

const createPost = async (data) => {
  try {
    const responce = await useFetchApi('/api/posts', { method: 'POST', body: data })
    cancel()
  }
  catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <UiModal open :cancel="cancel">
    <template #content>
      <div>
        <h2>Create post</h2>
        <div>
          <AdminPostsForm :submit="createPost" />
        </div>
      </div>
    </template>
  </UiModal>
</template>
