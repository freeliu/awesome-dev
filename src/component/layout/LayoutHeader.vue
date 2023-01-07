<script setup lang="ts">
import { onMounted } from "vue";
import { useSidebarStore } from "@/store/sidebar";
import { useRouter } from "vue-router";
import VTSwitchAppearance from "@/component/VTSwitchAppearance.vue"


const username: string | null = localStorage.getItem("ms_username");
const message: number = 2;





// 用户名下拉菜单选择事件
const router = useRouter();
const handleCommand = (command: string) => {
  if (command == "loginout") {
    localStorage.removeItem("ms_username");
    router.push("/login");
  } else if (command == "user") {
    router.push("/user");
  }
};
</script>

<template>
  <div class="flex items-center h-full">
    <div class="text-2xl">Awesome Dev</div>
<!--    <el-input class="w-64 ml-5 hidden sm:block">-->
<!--      <template #prefix>-->
<!--        <font-awesome-icon icon="fa-solid fa-search" />-->
<!--      </template>-->
<!--    </el-input>-->
    <font-awesome-icon class="text-2xl ml-auto" icon="fa-brands fa-github" />

    <v-t-switch-appearance class="ml-5" />
  </div>
</template>
