<script setup lang="ts">
import { useConfirmDialog } from '@vueuse/core'
interface Props {
  open?: boolean
  cancel?: () => void
}
const { open, cancel: customCancel } = withDefaults(defineProps<Props>(), {
  open: false,
})

const revealed = ref<boolean>(open)

const {
  reveal,
  confirm,
  cancel,
} = useConfirmDialog(revealed)

defineExpose({
  revealed,
  reveal,
  confirm,
  cancel,
})
</script>

<template>
  <!-- <slot :reveal="reveal" /> -->

  <!-- <Teleport to="body">
    <div v-if="isRevealed" class="modal modal-open">
      <div class="modal-box relative">
        <button class="btn btn-sm btn-circle absolute right-2 top-2" @click="cancel">
          ✕
        </button>
        <slot name="content" :cancel="cancel" :confirm="confirm" />
      </div>
    </div>
  </Teleport> -->

  <Teleport to="body">
    <UiModalBox v-if="revealed" :cancel="customCancel || cancel" :confirm="confirm" open>
      <template #content="{ cancel: propCancel, confirm: propConfirm }">
        <slot name="content" :cancel="propCancel" :confirm="propConfirm" />
      </template>
    </UiModalBox>
  </Teleport>
</template>
