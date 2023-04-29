<script setup lang="ts">
definePageMeta({
  layout: 'admin',
})

// TODO fetch posts list
</script>

<template>
  <h1>
    Posts
  </h1>

  <NuxtLink class="btn btn-secondary" to="/admin/posts/create">
    Add post
  </NuxtLink>

  <!-- <UiModal>
    <template #default="{ reveal }">
      <button class="btn btn-secondary" @click="reveal">
        Create 2
      </button>
    </template>

    <template #content="{ confirm, cancel }">
      <div>
        Here is the Create 2 content
        <button class="btn btn-primary" @click="confirm">
          confirm
        </button>
        <button class="btn btn-secondary" @click="cancel">
          cancel
        </button>
      </div>
    </template>
  </UiModal> -->

  <table class="table table-zebra w-full">
    <!-- head -->
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
      <tr>
        <th>1</th>
        <td>Hello world</td>
        <td>Liuba V</td>
        <td>12/12/2020</td>
        <td>
          <button class="mr-3" @click="$router.push('/admin/posts/123')">
            <Icon name="grommet-icons:edit" />
          </button>
          <button class="text-red-500">
            <Icon name="grommet-icons:trash" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <NuxtPage />
</template>
