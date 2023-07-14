<script lang="ts" setup>
import type { Directive } from "vue"
import LayoutHeader from "@/component/layout/LayoutHeader.vue"
import LayoutSidebar from "@/component/layout/LayoutSidebar.vue"

const vOverflowCursor: Directive = (() => {
  return {
    mounted(el) {
      toggleCursor(el)
    },
    updated(el: HTMLElement) {
      toggleCursor(el)
    }
  }
  function toggleCursor(el: HTMLElement) {
    const elMain = el.querySelector(".el-main") as HTMLElement
    if (elMain) {
      if (elMain.scrollHeight > elMain.clientHeight) {
        elMain.style.cursor = "all-scroll"
      } else {
        elMain.style.cursor &&= ""
      }
    }
  }
})()
</script>
<template>
  <!--不推荐在组件中使用自定义指令-->
  <div v-overflow-cursor>
    <el-container class="min-h-screen">
      <el-header class="border-bottom">
        <LayoutHeader class="max-w-screen-xl mx-auto"></LayoutHeader>
      </el-header>
      <el-container class="w-full max-w-screen-xl mx-auto">
        <el-aside width="200px">
          <LayoutSidebar></LayoutSidebar>
        </el-aside>
        <el-main>
          <router-view> </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
