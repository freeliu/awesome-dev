import { createRouter, createWebHistory } from "vue-router"
import LayoutGlobal from "@/component/layout/LayoutGlobal.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      meta: {
        isMenu: true,
        title: "首页"
      },
      component: LayoutGlobal,
      children: [
        {
          path: "",
          component: () => import("../views/HomeView.vue")
        },

        {
          meta: {
            title: "library", // lodash 等
            isMenu: true
          },
          path: "library",
          component: () => import("../views/HomeView.vue")
        }
      ]
    },
    {
      meta: {
        title: "vue",
        isMenu: true
      },
      path: "/vue/",
      component: LayoutGlobal,
      children: [
        {
          path: "",
          component: () => import("../views/VueResource.vue")
        }
      ]
    }
  ]
})

export default router
