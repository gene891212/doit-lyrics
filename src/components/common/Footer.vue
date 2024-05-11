<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-line">
        Powered by
        <a href="https://gohugo.io/" target="_blank" rel="noopener noreferrer" title="Hugo 0.113.0"
          >Hugo</a
        >&nbsp;|&nbsp;Theme -
        <a
          href="https://github.com/HEIGE-PCloud/DoIt"
          target="_blank"
          rel="noopener noreferrer"
          title="DoIt 0.4.0"
        >
          <i class="far fa-edit fa-fw"></i> DoIt
        </a>
      </div>
      <div class="footer-line">
        <i class="far fa-copyright fa-fw"></i>
        <span itemprop="copyrightYear"
          >{{ author.copyrightYear[0] }} - {{ author.copyrightYear[1] }}</span
        >
        <span class="author" itemprop="copyrightHolder"
          >&nbsp;
          <a :href="author.url" target="_blank" rel="noopener noreferrer">{{
            author.name
          }}</a> </span
        >&nbsp;|&nbsp;
        <span class="license">
          <a
            rel="license external nofollow noopener noreffer"
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            target="_blank"
            >CC BY-NC 4.0</a
          >
        </span>
      </div>
      <div class="footer-line"></div>
      <div class="footer-line"></div>
    </div>
  </footer>
</template>
<script setup>
import { reactive } from 'vue'

const author = reactive({
  name: 'PCloud',
  url: 'https://github.com/HEIGE-PCloud',
  copyrightYear: [2019, 2023]
})
</script>
