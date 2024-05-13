<template>
  <article class="page single">
    <template v-if="songData">
      <h1 class="single-title animate__animated animate__flipInX">
        {{ songData.title }}
      </h1>
      <h2 class="single-subtitle">Create SVG diagrams using GoAT or Mermaid in DoIt</h2>
      <song-meta :song="songData"></song-meta>
    </template>
    <template v-else>
      <h1 class="single-title animate__animated animate__flipInX">Loading...</h1>
    </template>
    <div class="content" id="content" lg-uid="lg0">
      <!-- Player -->
      <div class="video-container">
        <div ref="playerRef"></div>
      </div>
      <template v-if="lyricsFinder">
        <!-- Lyrics -->
        <div id="lrc">
          <div
            class="lrc__line"
            v-for="(time, index) in lyricsFinder.startTimes"
            @click="handleLyricSelection(time)"
            :data-time="time"
            :key="index"
          >
            <div
              v-for="(language, langIndex) in lyricsFinder.supportedLangs"
              v-html="lyricsFinder.lyrics[langIndex][index]"
              :data-lang="language"
              :class="{ active: index === currentIndex }"
              :key="langIndex"
            ></div>
          </div>
        </div>
      </template>
      <div v-else>{{ lyricsStatus }}</div>
    </div>
  </article>
  <!-- Control button -->
  <div id="control-buttons">
    <a href="#" class="fixed-button" title="Previous Line" @click.prevent="navigateLyrics('prev')">
      <font-awesome-icon :icon="['fas', 'backward']" fixed-width />
    </a>
    <a href="#" class="fixed-button" title="Toggle Player State" @click.prevent="togglePlay">
      <font-awesome-icon :icon="['fas', isPlaying ? 'pause' : 'play']" fixed-width />
    </a>
    <a href="#" class="fixed-button" title="Next Line" @click.prevent="navigateLyrics('next')">
      <font-awesome-icon :icon="['fas', 'forward']" fixed-width />
    </a>
    <a
      href="#"
      :class="['fixed-button', isRepeat ? 'active' : '']"
      id="repeat"
      title="Repeat Current Line"
      @click.prevent="handleRepeat"
    >
      <font-awesome-icon :icon="['fas', 'undo-alt']" fixed-width />
    </a>
  </div>
</template>
<script setup>
import SongMeta from '@/components/SongMeta.vue'
import { getAllLyricsByYoutubeId } from '@/services/firebase/lyricsService'
import { getSongByYoutubeId } from '@/services/firebase/songService'
import { LyricsFinder } from '@/utils/lyrics'

import { usePlayer, PlayerState } from '@vue-youtube/core'

import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  youtubeId: {
    type: String,
    required: true
  }
})

const intervalId = ref(null)
// lyrics
const songData = ref(null)

const lyricsFinder = ref(null)
const lyricsStatus = ref('Loading...')
const isRepeat = ref(false)
const repeatIndex = ref(null)

// player
const playerRef = ref(null)
const isPlaying = ref(false)
const { instance, togglePlay, onReady, onStateChange } = usePlayer(props.youtubeId, playerRef, {})
const currentTime = ref(0)
const currentIndex = ref(null)

onMounted(async () => {
  songData.value = await getSongByYoutubeId(props.youtubeId)

  const songLyrics = await getAllLyricsByYoutubeId(props.youtubeId)
  console.log(songLyrics)
  lyricsFinder.value = new LyricsFinder(songLyrics)
})

onBeforeUnmount(() => {
  clearInterval(intervalId.value)
})

onReady((event) => {
  intervalId.value = setInterval(() => {
    if (lyricsFinder.value === null) {
      console.log('Lyrics not ready')
      return
    }
    currentTime.value = instance?.value.getCurrentTime()
    currentIndex.value = lyricsFinder.value.getCurrIndex(currentTime.value)

    if (isRepeat.value && currentIndex.value !== repeatIndex.value) {
      seekTo(lyricsFinder.value.getTimestamp(repeatIndex.value))
    }
  }, 50)
  console.log('Player is ready', event)
})

onStateChange((event) => {
  isPlaying.value = event.data !== PlayerState.PAUSED
})

const seekTo = (time) => {
  instance?.value.seekTo(time)
  instance?.value.playVideo()
}

// lyrics event
// watch(currentTime, (currentTime) => {
//   currentIndex.value = lyricsFinder.value.getCurrIndex(currentTime);
//   if (isRepeat.value && currentIndex.value !== repeatIndex.value) {
//     seekTo(lyricsFinder.value.getTimestamp(repeatIndex.value));
//   }
// });

const handleLyricSelection = (selectedLyricTime) => {
  seekTo(selectedLyricTime)
  if (isRepeat.value) {
    repeatIndex.value = lyricsFinder.value.getCurrIndex(selectedLyricTime)
  }
}

const handleRepeat = () => {
  isRepeat.value = !isRepeat.value
  repeatIndex.value = currentIndex.value
}

const navigateLyrics = (direction) => {
  const index = direction === 'prev' ? currentIndex.value - 1 : currentIndex.value + 1
  seekTo(lyricsFinder.value.getTimestamp(index))
  if (isRepeat.value) {
    repeatIndex.value = index
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  margin-top: 8px;
  margin-bottom: 16px;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#lrc {
  rt {
    font-size: 65%;
  }

  .lrc__line {
    border-bottom: 3px dashed $global-border-color;

    div {
      margin: 1rem 0;

      &[data-lang='jp_yomi'] {
        font-family: 'Noto Sans JP';
        font-size: 1.1em;
      }
    }

    .active {
      color: map-get($admonition-color-map, 'note');

      rt {
        color: map-get($admonition-color-map, 'note');
      }
    }
  }
}

#control-buttons {
  position: fixed;
  bottom: 1.5rem;
  left: 0;
  right: 0;
  opacity: 0.85;

  display: flex;
  justify-content: center;
  gap: 10px;

  a {
    display: inline;
    position: relative;
    right: unset;
    bottom: unset;

    &#repeat {
      &.active {
        color: map-get($admonition-color-map, 'note');
      }
    }
  }
}
</style>
