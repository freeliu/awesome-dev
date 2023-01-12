import { createApp } from "vue"
import { createPinia } from "pinia"
import fontAwesome from "@/plugin/font-awesome-icon"

import App from "./App.vue"
import router from "./router"

import "./asset/main.scss"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(fontAwesome)
app.mount("#app")
