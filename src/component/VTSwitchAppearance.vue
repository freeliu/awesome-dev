<script lang="ts" setup>
import VTSwitch from "./VTSwitch.vue"
import VTIconSun from "./icons/VTIconSun.vue"
import VTIconMoon from "./icons/VTIconMoon.vue"

const storageKey = "theme-appearance"
const toggle = typeof localStorage !== "undefined" ? useAppearance() : () => {}

function useAppearance() {
  let userPreference = localStorage.getItem(storageKey) || "auto"
  const query = window.matchMedia(`(prefers-color-scheme: dark)`)
  const classList = document.documentElement.classList
  let isDark = userPreference === "auto" ? query.matches : userPreference === "dark"
  const setClass = (dark: boolean) => classList[dark ? "add" : "remove"]("dark")

  query.onchange = (e) => {
    if (userPreference === "auto") {
      setClass((isDark = e.matches))
    }
  }

  const toggle = () => {
    setClass((isDark = !isDark))
    localStorage.setItem(
      storageKey,
      (userPreference = isDark
        ? query.matches
          ? "auto"
          : "dark"
        : query.matches
        ? "light"
        : "auto")
    )
  }

  return toggle
}
</script>

<template>
  <VTSwitch class="vt-switch-appearance" @click="toggle">
    <VTIconSun class="vt-switch-appearance-sun" />
    <VTIconMoon class="vt-switch-appearance-moon" />
  </VTSwitch>
</template>
<style lang="scss">
:root {
  --vt-c-black: #1a1a1a;
  --vt-c-gray: #8e8e8e;
  --vt-c-white: #ffffff;
  --vt-c-text-2: var(--vt-c-text-light-2);
  --vt-c-text-dark-2: rgba(235, 235, 235, 0.6);
  --vt-shadow-1: 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  --vt-c-white-mute: #f1f1f1;
  --vt-c-bg-mute: var(--vt-c-white-mute);
  --vt-c-black-mute: #2f2f2f;
  --vt-c-text-1: #213547;
}
.vt-switch {
  position: relative;
  border-radius: 11px;
  display: block;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid var(--vt-c-divider);
  background-color: var(--vt-c-bg-mute)!important;
  transition: border-color 0.25s, background-color 0.25s;
  &:hover {
    border-color: var(--vt-c-gray);
  }
}
.vt-switch-appearance-sun {
  opacity: 1;
}
.vt-switch-appearance-moon {
  opacity: 0;
}
.dark {
  --vt-c-text-2: var(--vt-c-text-dark-2);
  --vt-c-bg-mute: var(--vt-c-black-mute);
  --vt-c-text-1: rgba(255, 255, 255, 0.87);
  .vt-switch-appearance-sun {
    opacity: 0;
  }
  .vt-switch-appearance-moon {
    opacity: 1;
  }
  .vt-switch-appearance {
    .vt-switch-check {
      transform: translateX(18px);
    }
  }
  .vt-switch-check {
    background-color: var(--vt-c-black);
  }
  .vt-switch-icon {
    svg {
      fill: var(--vt-c-text-1);
      transition: opacity 0.25s;
    }
  }
}

.vt-switch-check {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--vt-c-white);
  box-shadow: var(--vt-shadow-1);
  transition: background-color 0.25s, transform 0.25s;
}
.vt-switch-icon {
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  overflow: hidden;
  svg {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 12px;
    height: 12px;
    fill: var(--vt-c-text-2);
  }
}
</style>
