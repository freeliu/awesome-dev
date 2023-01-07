<script setup lang="ts">
import ILink from "@/component/ILink.vue"
</script>

<template>
  <div class="vue-resource">
    <i-link href="https://vuejs.org" />
    <i-link href="https://router.vuejs.org" />
    <i-link href="https://pinia.vuejs.org" />
    <i-link href="https://vitejs.dev/">Next Generation Frontend Tooling</i-link>
    <i-link href="https://vueuse.org/">Collection of Vue Composition Utilities</i-link>
    <i-link href="https://fontawesome.com/">Icon集 （优势：图标多，支持vue、npm、按需引入 ，缺点：商业化、官网搜索慢）</i-link>
    <i-link href="https://element-plus.org">UI library</i-link>
    <i-link href="https://antdv.com/">UI library</i-link>
    <i-link href="https://arco.design/">UI library 字节跳动</i-link>
    <i-link href="https://pro.arco.design">中后台前端解决方案</i-link>
    <i-link href="https://github.com/lin-xin/vue-manage-system">基于Vue3 + Element Plus 的后台管理系统解决方案</i-link>
    <i-link href="https://github.com/jeecgboot/jeecgboot-vue3">「企业级低代码平台」采用 Vue3.0+TypeScript+Vite+Ant-Design-Vue</i-link>
    <i-link href="https://vant-contrib.gitee.io/">Mobile UI library ( Vant 官方提供了 Vue 2 版本、Vue 3 版本和微信小程序版本)</i-link>
    <i-link href="https://nutui.jd.com/">Mobile UI library （在H5，小程序平台上的应用）</i-link>
    <i-link href="https://taro-docs.jd.com/">Taro 跨端跨框架解决方案</i-link>
  </div>
</template>
<style scoped lang="scss">
.vue-resource {
  :deep(.el-link) {
    font-size: 16px;
  }
}
</style>
