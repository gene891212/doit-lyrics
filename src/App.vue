<template>
  <div id="back-to-top"></div>
  <div class="wrapper" header-desktop>
    <Header v-model="showHeader" />
    <main class="main">
      <div class="container">
        <RouterView />
      </div>
    </main>
    <Footer />
    <!-- back to top button -->
    <div
      id="fixed-buttons"
      style="display: block"
      class="animate__animated animate__faster"
      :class="showBackToTop ? 'animate__fadeIn' : 'animate__fadeOut'"
      v-show="showBackToTop"
    >
      <a href="#back-to-top" id="back-to-top-button" class="fixed-button" title="Back to Top">
        <font-awesome-icon :icon="['fas', 'arrow-up']" fixed-width />
      </a>
    </div>
  </div>
</template>
<script setup>
import Footer from '@/components/common/Footer.vue'
import Header from '@/components/common/Header.vue'

import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'

const showHeader = ref(true)
const showBackToTop = ref(false)
let lastPosition = 0

const handleScroll = () => {
  const currentPosition = window.scrollY
  const isTopOfPage = currentPosition === 0
  const isScrollingUp = lastPosition - currentPosition > 0

  // show header when top of the page or scrolling up
  showHeader.value = isTopOfPage || isScrollingUp
  // show back to top button when scrolling up
  showBackToTop.value = !isTopOfPage && isScrollingUp

  lastPosition = currentPosition
}

onMounted(() => {
  // document.body.setAttribute('theme', currentTheme)
  // document.body.style.colorScheme = currentColorScheme

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style lang="scss">
@import './styles/style.scss';
</style>
