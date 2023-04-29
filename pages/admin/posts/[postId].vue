<script setup lang="ts">
const router = useRouter()
const route = useRoute()

const onCancel = () => {
  if (document.referrer)
    router.back()
  else router.push('/admin/posts')
}

// const fetchPostById = async (postId) => {

// }
</script>

<template>
  <UiModal open :cancel="onCancel">
    <template #content>
      Edit item with id {{ route.params.postId }}
    </template>
  </UiModal>
</template>
