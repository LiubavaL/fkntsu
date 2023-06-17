<script setup lang="ts">
import type { Post, Prisma } from '@prisma/client'
// import { FormMode } from '~~/types'

const router = useRouter()
const route = useRoute()
const { postId } = route.params
const { loading, data: post, fetchData: fetchPost } = useFetchWithStatuses<Post>(`/api/posts/${postId}`)

const cancel = () => {
  if (document.referrer)
    router.back()
  else router.push('/admin/posts')
}

onBeforeMount(() => {
  fetchPost()
})

const updatePost = async (data) => {
  try {
    await useFetchApi(`/api/posts/${postId}`, { method: 'PATCH', body: data })
    cancel()
  }
  catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <UiModal open :cancel="cancel">
    <template #content>
      <h2>Edit post</h2>
      <UiLoader v-if="loading" />
      <div v-else-if="post">
        <AdminPostsForm mode="edit" :submit="updatePost" :post="post" />
      </div>
      <div v-else>
        Error fetching post
      </div>
    </template>
  </UiModal>
</template>
