<script setup lang="ts">
const router = useRouter()

onMounted(() => {
  // we don't await this async function, to avoid blocking rendering
// this component's setup function
// TODO check if it's nedeed
  if (!document.referrer)
    preloadRouteComponents('/admin/posts')
})

const onCancel = () => {
  if (document.referrer)
    router.back()
  else
    router.push('/admin/posts')
}
</script>

<template>
  <UiModal open :cancel="onCancel">
    <template #content>
      <div>
        Create modal
        <!-- <button class="btn btn-primary" @click="modal1?.confirm">
            confirm
          </button>
          <button class="btn btn-secondary" @click="modal1?.cancel">
            cancel
          </button> -->
      </div>
    </template>
  </UiModal>
</template>
