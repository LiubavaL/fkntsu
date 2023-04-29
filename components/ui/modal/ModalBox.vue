<script setup lang="ts">
interface Props {
  open?: boolean
  cancel: (data?: any) => void
  confirm?: (data?: any) => void
  title?: string
}

const { open, cancel, confirm, title } = withDefaults(defineProps<Props>(), {
  cancel: () => {},
  confirm: () => {},
})
</script>

<template>
  <div class="modal" :class="{ 'modal-open': open }">
    <div class="modal-box relative">
      <button class="btn btn-sm btn-circle absolute right-2 top-2" @click="cancel">
        ✕
      </button>
      <slot name="title">
        <UiModalTitle v-if="title" :title="title" />
      </slot>
      <!-- <p class="py-4">
              You've been selected for a chance to get one year of subscription to use Wikipedia for free!
            </p>
             -->
      <slot name="content" :cancel="cancel" :confirm="confirm" />
    </div>
  </div>
</template>
