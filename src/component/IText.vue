<script lang="ts" setup>
import { computed, ref } from "vue"
const props = defineProps<{
  title: string
}>()
</script>
<template>
  <div class="flex">
    <span class="inline-block min-w-fit w-80 shrink-0">{{ title }}</span>
    <span style="color: var(--el-text-color-secondary)"> <slot></slot></span>
  </div>
</template>
<style scoped lang="scss">
:deep(.el-link__inner) {
  display: block;
}
</style>
