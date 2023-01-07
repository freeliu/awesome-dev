<script lang="ts" setup>
import { ref } from "vue"
import LayoutHeader from "@/component/layout/LayoutHeader.vue"
import LayoutTags from "@/component/layout/LayoutTags.vue"
import LayoutSidebar from "@/component/layout/LayoutSidebar.vue"
</script>
<template>
  <el-container class="min-h-screen">
    <el-header class="border-bottom">
      <LayoutHeader class="max-w-screen-xl mx-auto"></LayoutHeader>
    </el-header>
    <el-container class="w-full max-w-screen-xl mx-auto">
      <el-aside  width="200px">
        <LayoutSidebar></LayoutSidebar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
