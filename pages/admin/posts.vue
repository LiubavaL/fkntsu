<script setup lang="ts">
import type { Post } from '@prisma/client'

const { loading, data: posts, fetchData } = useFetchWithStatuses<Post[]>('/api/posts', { loading: true })

definePageMeta({
  layout: 'admin',
})

onBeforeMount(() => {
  fetchData()
})
</script>

<template>
  <div>
    <h1>
      Posts
    </h1>

    <NuxtLink class="btn btn-secondary" to="/admin/posts/create">
      Add post
    </NuxtLink>

    <UiLoader v-if="loading" />

    <table v-else class="table table-zebra w-full">
      <thead>
        <tr>
          <th />
          <th>Title</th>
          <th>Author</th>
          <th>Created</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <div v-if="!posts || !posts.length">
          No posts yet.
        </div>
        <template v-else>
          <tr v-for="(post, index) in posts" :key="post.id">
            <th>{{ index + 1 }}</th>
            <td>{{ post.title }}</td>
            <td>{{ post.authorId }}</td>
            <td>{{ post.createdAt }}</td>
            <td>
              <button class="mr-3" @click="$router.push(`/admin/posts/${post.id}`)">
                <Icon name="grommet-icons:edit" />
              </button>
              <button class="text-red-500">
                <Icon name="grommet-icons:trash" />
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div>
      <ClientOnly>
        <NuxtPage />
      </ClientOnly>
    </div>
  </div>
</template>
