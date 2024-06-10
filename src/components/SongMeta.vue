<template>
  <div class="post-meta">
    <div class="post-meta-line">
      <span class="post-author">
        <span class="author">
          <font-awesome-icon :icon="['fas', 'music']" fixed-width />
          歌手：
          <a :href="'/artist/' + song.artist">{{ props.song?.artist }}</a>
          <!-- <router-link :to="`/artist/${song.artist}`">{{ song.artist }}</router-link> -->
        </span>
      </span>
      &nbsp;
      <span>專輯：{{ props.song?.album }}</span>
      &nbsp;
      <span>作詞：{{ props.song?.lyricist }}</span>
      &nbsp;
      <span>作曲：{{ props.song?.composer }}</span>
      <!-- <span class="post-publish">
      &nbsp;published on
      <time datetime="2022-02-28">2022-02-28</time>
    </span> -->
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  song: Object
})
</script>
