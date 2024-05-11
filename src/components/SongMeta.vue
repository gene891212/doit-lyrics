<template>
  <div class="post-meta">
    <span class="post-author">
      <span class="author">
        <font-awesome-icon :icon="['fas', 'music']" fixed-width /> 歌手：<a
          :href="'/artist/' + song.artist"
          >{{ song.artist }}</a
        >
        <!-- <router-link :to="`/artist/${song.artist}`">{{ song.artist }}</router-link> -->
      </span>
    </span>
    <span class="post-">專輯：</span>
    <span>作詞：</span>
    <span>作曲：</span>
    <!-- <span class="post-publish">
      &nbsp;published on
      <time datetime="2022-02-28">2022-02-28</time>
    </span> -->
  </div>
</template>
<script setup>
const props = defineProps({
  song: Object
})
</script>
