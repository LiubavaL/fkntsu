<script setup lang="ts">
interface Props {
  label?: string
  name?: string
  placeholder?: string
  modelValue?: string
  type?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="form-control w-full">
    <label v-if="label" class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      :type="type"
      :placeholder="placeholder"
      class="input input-bordered"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>
