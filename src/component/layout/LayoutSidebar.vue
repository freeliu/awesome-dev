<script setup lang="ts">
import { computed } from "vue"
import { useSidebarStore } from "@/store/sidebar"
import { useRoute, useRouter } from "vue-router"

const router = useRouter()
const routes = router.options.routes
console.log("router", router.getRoutes())
const menus = routes.filter((item) => item.meta?.isMenu)
menus.forEach((l1) => {
  l1.children = l1.children?.filter((item) => item.meta?.isMenu)
  l1.children?.forEach((l2) => {
    l2.meta = l2.meta || {}
    l2.meta.absolutePath = l2.path.startsWith("/") ? l2.path : l1.path + l2.path
    l2.children = l2.children?.filter((item) => item.meta?.isMenu)
    l2.children?.forEach((l3) => {
      l3.meta = l3.meta ?? {}
      l3.meta.absolutePath = l3.path.startsWith("/")
        ? l3.path
        : l2.meta.absolutePath + l3.path

      // l3.children = l3.children?.filter((item) => item.meta?.isMenu)
    })
  })
})

const route = useRoute()
const onRoutes = computed(() => {
  return route.path
})
const sidebar = useSidebarStore()
</script>
<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" :collapse="sidebar.collapse" router>
      <template v-for="l1 in menus" :key="l1.path">
        <el-sub-menu
          v-if="Array.isArray(l1.children) && l1.children.length > 0"
          :index="l1.path"
        >
          <template #title>
            <span>{{ l1.meta?.title }}</span>
          </template>
          <el-menu-item
            v-for="l2 in l1.children"
            :index="l2.meta.absolutePath"
            :key="l2.path"
          >
            {{ l2.meta?.title }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="l1.path">
          <!--          <el-icon><icon-menu /></el-icon>-->
          <span>{{ l1.meta?.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<style scoped></style>
