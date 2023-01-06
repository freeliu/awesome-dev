import type { App } from "vue"
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

/* import specific icons */
import {
  faMoon,
  faSearch,
  faSun,
  faUserSecret
} from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

/* add icons to the library */
library.add(faUserSecret)
library.add(faSearch)
library.add(faGithub)
library.add(faSun)
library.add(faMoon)

export default {
  install: (app: App) => {
    // Plugin code goes here
    app.component("FontAwesomeIcon", FontAwesomeIcon)
  }
}
