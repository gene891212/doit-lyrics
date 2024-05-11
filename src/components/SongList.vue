<template>
  <div class="page home" posts>
    <div class="home-profile">
      <h1 class="home-title">所有歌曲</h1>
      <h2 class="home-subtitle">
        <div id="id-1" class="typeit">沉浸在Aimer音樂的世界</div>
      </h2>
    </div>
    <article class="single summary" v-for="song in songs" :key="song.id">
      <router-link :to="{ name: 'SongDetail', params: { youtubeId: song.youtubeId } }">
        <div class="featured-image-preview">
          <img
            :src="`https://i.ytimg.com/vi_webp/${song.youtubeId}/sddefault.webp`"
            loading="lazy"
          />
          <!-- <img
            srcset="
              https://img.youtube.com/vi/69w7p05W8HA/default.jpg 320w,
              https://img.youtube.com/vi/69w7p05W8HA/mqdefault.jpg 480w,
              https://img.youtube.com/vi/69w7p05W8HA/hqdefault.jpg 800w
            "
            sizes="
              (max-width: 320px) 280px,
              (max-width: 480px) 440px,
              800px
            "
            src="https://img.youtube.com/vi/69w7p05W8HA/default.jpg"
            alt="YouTube Thumbnail"
          /> -->
        </div>
        <h2 class="single-title">
          <!-- <router-link :to="`/song/${song.id}`">{{ song.title }}</router-link> -->
          {{ song.title }}
        </h2>
      </router-link>
      <song-meta :song="song"></song-meta>
      <div class="content">
        This post explains how you can create custom SVG diagrams in DoIt using GoAT or Mermaid.
      </div>
      <div class="post-footer">
        <router-link :to="{ name: 'SongDetail', params: { youtubeId: song.youtubeId } }">
          Read more...
        </router-link>
        <div class="post-tags">
          <font-awesome-icon :icon="['fas', 'tags']" fixed-width />&nbsp;<a href="/tags/diagram/"
            >diagram</a
          >,&nbsp;<a href="/tags/markdown/">Markdown</a>
        </div>
      </div>
    </article>
  </div>
</template>
<script setup>
import SongMeta from '@/components/SongMeta.vue'
import db from '@/services/firebase/index'
import { getAllSongs } from '@/services/firebase/songService'

import { collection, getDocs, query, limit } from 'firebase/firestore'
import { onMounted, reactive } from 'vue'

const songs = reactive([])
const songsPerPage = 10

const fetchSongs = async () => {
  const songsRef = collection(db, 'songs')
  const songsQuery = query(songsRef, limit(songsPerPage))

  try {
    const snapshot = await getDocs(songsQuery)
    snapshot.forEach((doc) => {
      songs.push({
        id: doc.id,
        ...doc.data()
      })
    })
  } catch (error) {
    console.error('Error fetching songs:', error)
  }
}

onMounted(async () => {
  // await fetchSongs();
  const allSongs = await getAllSongs()
  songs.push(...allSongs)
  console.log(songs.value)
})
</script>
