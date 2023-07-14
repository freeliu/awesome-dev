<script lang="ts" setup>
import { computed, ref } from "vue"
const props = defineProps<{
  href: string
}>()
const title = computed(() => {
  return props.href.replace("https://", "").replace(/\/$/, "")
})
</script>
<template>
  <el-link class="dark:text-slate-400" :underline="false" target="_blank" :href="href" style="display: block">
    <span class="inline-block min-w-fit w-80">{{ title }}</span>
    <slot></slot>
  </el-link>
</template>
<style scoped lang="scss">
:deep(.el-link__inner) {
  display: block;
}
</style>
