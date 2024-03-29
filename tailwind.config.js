/** @type {import('tailwindcss').Config} */
// const defaultConfig = require("tailwindcss/stubs/defaultConfig.stub.ts") tailwindcss 升级后不兼容
// import { cloneDeep } from "lodash-es"

/*const { theme } = defaultConfig
// rem to px
Object.entries(theme).forEach(([key1, value1]) => {
  if (typeof value1 === "object") {
    Object.entries(value1).forEach(([key2, value2]) => {
      if (typeof value2 === "string" && value2.indexOf("rem") > -1) {
        theme[key1][key2] = parseFloat(value2) * 16 + "px"
      }
    })
  }
})*/

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {},
  plugins: []
}
