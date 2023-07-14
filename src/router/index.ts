import { createRouter, createWebHashHistory } from "vue-router"
import LayoutGlobal from "@/component/layout/LayoutGlobal.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: "/note/",
      meta: {
        title: "note",
        isMenu: "true"
      },
      component: LayoutGlobal,
      children: [
        {
          path: "git",
          meta: {
            title: "git",
            isMenu: "true"
          },
          component: () => import("@/views/note/GitView.vue")
        },
        {
          path: "regex",
          meta: {
            title: "regex",
            isMenu: "true"
          },
          component: () => import("@/views/note/RegexView.vue")
        },
        {
          path: "http",
          meta: {
            title: "http",
            isMenu: "true"
          },
          component: () => import("@/views/note/HttpView.vue")
        },
        {
          path: "md",
          meta: {
            title: "md",
            isMenu: "true"
          },
          component: () => import("@/views/note/MDView.vue")
        }
      ]
    },{
      path: "/npm/",
      meta: {
        title: "npm",
        isMenu: "true"
      },
      component: LayoutGlobal,
      children: [
        {
          path: "useful",
          meta: {
            title: "useful",
            isMenu: "true"
          },
          component: () => import("@/views/npm/UsefulView.vue")
        },
        {
          path: "my",
          meta: {
            title: "my",
            isMenu: "true"
          },
          component: () => import("@/views/npm/MyView.vue")
        }
      ]
    }
  ]
})

export default router
