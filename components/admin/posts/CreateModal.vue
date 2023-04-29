<script setup lang="ts">
// import { ref } from 'vue'
// import type Modal from '@/components/ui/modal/Modal.vue'
// const modal1 = ref<InstanceType<typeof Modal> | null>(null)

onMounted(() => {
  // we don't await this async function, to avoid blocking rendering
// this component's setup function
//   preloadRouteComponents('/admin/posts')
})
</script>

<template>
  <div>
    <UiModal open>
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
  </div>
</template>
