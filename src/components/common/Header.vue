<template>
  <div id="mask" :class="{ blur: isMobileMenuOpen }" @click="toggleMobileMenu"></div>
  <!-- Desktop header -->
  <header class="desktop" id="header-desktop">
    <div class="header-wrapper">
      <div class="header-title">
        <router-link to="/">AimerVerse</router-link>
      </div>
      <div class="menu">
        <div class="menu-inner">
          <router-link v-for="item in headerItems" :key="item" class="menu-item" to="/">
            {{ item }}
          </router-link>
          <span class="menu-item delimiter"></span>
          <button
            @click.prevent="themeManager.switchTheme"
            class="menu-item theme-select"
            aria-label="Switch Theme"
          >
            <font-awesome-icon :icon="['fas', 'adjust']" fixed-width />
          </button>
        </div>
      </div>
    </div>
  </header>
  <div class="search-dropdown desktop">
    <div id="search-dropdown-desktop"></div>
  </div>
  <div class="search-dropdown mobile">
    <div id="search-dropdown-mobile"></div>
  </div>
  <!-- Mobile header -->
  <header
    class="mobile animate__animated animate__faster"
    id="header-mobile"
    :class="showHeader ? 'animate__fadeInDown' : 'animate__fadeOutUp'"
    v-show="showHeader"
  >
    <div class="header-container">
      <div class="header-wrapper">
        <div class="header-title">
          <router-link to="/">AimerVerse</router-link>
        </div>
        <div
          class="menu-toggle"
          :class="{ active: isMobileMenuOpen }"
          @click="toggleMobileMenu"
          id="menu-toggle-mobile"
        >
          <span></span><span></span><span></span>
        </div>
      </div>
      <div class="menu" :class="{ active: isMobileMenuOpen }" id="menu-mobile">
        <router-link v-for="item in headerItems" :key="item" class="menu-item" to="/">
          {{ item }}
        </router-link>
        <a
          href="javascript:void(0);"
          class="menu-item theme-select"
          title="Switch Theme"
          @click.prevent="themeManager.switchTheme"
        >
          <font-awesome-icon :icon="['fas', 'adjust']" fixed-width />
        </a>
      </div>
    </div>
  </header>
  <div class="search-dropdown desktop">
    <div id="search-dropdown-desktop"></div>
  </div>
  <div class="search-dropdown mobile">
    <div id="search-dropdown-mobile"></div>
  </div>
</template>
<script setup>
import { ThemeManager } from '@/utils/themes'

import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// import { ThemeManager } from '@/composables/themes'

const route = useRoute()
const headerItems = ['Albums', 'Tags']

const isMobileMenuOpen = ref(false)
const showHeader = defineModel({ required: true })
const themeManager = new ThemeManager()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close the mobile menu when the route changes
watch(route, () => {
  isMobileMenuOpen.value = false
})
</script>
