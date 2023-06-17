<script lang="ts" setup>
import type { Post, Prisma } from '@prisma/client'

interface IProps {
  post?: Prisma.PostUpdateInput
  submit?: (_data: any, _node?: FormKitNode) => any
  cancel?: () => {}
  mode?: string
}
const { post, submit, cancel: propsCancel, mode } = withDefaults(defineProps<IProps>(), {
  mode: 'create',
  post: () => ({}),
  submit: () => {},
})
const router = useRouter()
const submitLabel = computed(() => mode === 'create' ? 'Create' : 'Update')
const cancel = () => {
  if (typeof propsCancel === 'function')
    propsCancel()

  if (document.referrer)
    router.back()
  else
    router.push('/admin/posts')
}
</script>

<template>
  <FormKit v-slot="{ disabled }" :value="post" type="form" :actions="false" @submit="submit">
    <FormKit name="title" wrapper-class="mb-2" input-class="input input-primary w-full" placeholder="title" validation="length:0,255" />
    <FormKit name="content" type="textarea" input-class="textarea textarea-primary textarea-xs w-full" placeholder="content" validation="required" />
    <div class="flex">
      <FormKit wrapper-class="mr-2" type="submit" input-class="btn btn-secondary" :disabled="disabled">
        {{ submitLabel }}
      </FormKit>
      <FormKit input-class="btn btn-primary btn-outline" type="button" @click="cancel">
        Cancel
      </FormKit>
    </div>
  </FormKit>
</template>
