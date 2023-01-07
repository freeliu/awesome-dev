<script lang="ts" setup>
import { ref } from "vue"
import LayoutHeader from "@/component/layout/LayoutHeader.vue"
import LayoutTags from "@/component/layout/LayoutTags.vue"
import LayoutSidebar from "@/component/layout/LayoutSidebar.vue"
</script>
<template>
  <el-container class="layout-global max-w-screen-xl mx-auto">
    <el-header>
      <LayoutHeader></LayoutHeader>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <LayoutSidebar></LayoutSidebar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped lang="scss">
.layout-global {
  min-height: 100vh;
}
</style>
