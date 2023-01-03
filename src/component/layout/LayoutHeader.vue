<template>
  <div class="flex items-center h-full xl:container xl:mx-auto">
    <div class="text-2xl">Awesome Dev</div>
    <el-input class="w-72">
      <template #prefix>
        <font-awesome-icon icon="fa-solid fa-search" />
      </template>
    </el-input>
    <font-awesome-icon class="text-2xl" icon="fa-brands fa-github" />

    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link"> Dropdown List </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="light">
            <font-awesome-icon class="text-xl" icon="fa-brands fa-github" />
            light
          </el-dropdown-item>
          <el-dropdown-item command="dark">Action 4</el-dropdown-item>
          <el-dropdown-item command="system">Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue"
import { useSidebarStore } from "@/store/sidebar"
import { useRouter } from "vue-router"

const username: string | null = localStorage.getItem("ms_username")
const message: number = 2

const sidebar = useSidebarStore()
// 侧边栏折叠
const collapseChage = () => {
  sidebar.handleCollapse()
}

onMounted(() => {
  if (document.body.clientWidth < 1500) {
    collapseChage()
  }
})

// 用户名下拉菜单选择事件
const router = useRouter()
const handleCommand = (command: string) => {
  if (command == "loginout") {
    localStorage.removeItem("ms_username")
    router.push("/login")
  } else if (command == "user") {
    router.push("/user")
  }
}
</script>
