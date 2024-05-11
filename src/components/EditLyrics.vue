<template>
  <div class="page home" posts>
    <h2>歌曲資訊</h2>
    <textarea rows="10" style="width: 100%; resize: vertical" v-model="songInfoRaw"></textarea>
    <div v-for="(value, key) in songInfo">{{ key }}: {{ value }}</div>
    <input v-model="youtubeId" />
    <button @click="uploadSong">Upload Song</button>

    <h2 for="">LRC or SRT</h2>
    <textarea rows="10" style="width: 100%; resize: vertical" v-model="lyrics"></textarea>

    <h2 for="">翻譯</h2>
    <textarea rows="10" style="width: 100%; resize: vertical" v-model="otherLyrics"></textarea>
    <div v-for="(line, index) in lyricsArray">
      <span v-html="line"></span> <br />{{ otherLyricsArray[index] }}
    </div>

    <button @click="uploadLyrics">Upload Lyrics</button>
  </div>
</template>
<script setup>
import db from '@/services/firebase'
import { createLyrics } from '@/services/firebase/lyricsService'
import { createSong } from '@/services/firebase/songService'

import { doc } from 'firebase/firestore'
import { computed, ref, watch } from 'vue'

const songInfoRaw = ref(`\
[ti:グレースノート]
[al:グレースノート]
[ar:Aimer]
[length: 04:59.87]
`)
const youtubeId = ref('quTQs77qN38')
const FEILD = {
  ti: 'title',
  al: 'album',
  ar: 'artist',
  length: 'length'
}

const songInfo = computed(() => {
  const array = songInfoRaw.value.split('\n')
  const newSongInfo = {}
  array.forEach((line) => {
    const parts = line.match(`\\[(\\w+):(.*)\\]`)
    if (parts) {
      const field = FEILD[parts[1]]
      newSongInfo[field] = parts[2]
    }
  })
  newSongInfo['youtubeId'] = youtubeId.value

  return newSongInfo
})

const lyrics =
  ref(`[00:17.90] <ruby>開<rt>ひら</rt></ruby>いた<ruby>ノート<rt>のーと</rt></ruby>に<ruby>綴<rt>つづ</rt></ruby>った<ruby>青<rt>あお</rt></ruby>さは
[00:30.76] <ruby>終<rt>お</rt></ruby>わりの<ruby>チャイム<rt>ちゃいむ</rt></ruby>に<ruby>君<rt>きみ</rt></ruby>の<ruby>背中<rt>せなか</rt></ruby>を<ruby>探<rt>さが</rt></ruby>してた
[00:43.57] <ruby>不器用<rt>ぶきよう</rt></ruby>で<ruby>曖昧<rt>あいまい</rt></ruby>な　<ruby>譜面<rt>ふめん</rt></ruby>にできない<ruby>音色<rt>ねいろ</rt></ruby>
[00:56.43] <ruby>胸<rt>むね</rt></ruby>に<ruby>閉<rt>と</rt></ruby>じ<ruby>込<rt>こ</rt></ruby>めた
[01:02.70] <ruby>触<rt>ふ</rt></ruby>れた<ruby>指<rt>ゆび</rt></ruby>でなぞった<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>で</rt></ruby>は
[01:09.63] どの<ruby>言葉<rt>ことば</rt></ruby>で<ruby>歌<rt>うた</rt></ruby>にできるかな？
[01:15.84] ただ<ruby>夢<rt>ゆめ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>絆<rt>ほだ</rt></ruby>されたまま
[01:23.24] <ruby>生<rt>う</rt></ruby>まれたときは　ひとりぼっちだったこと　<ruby>忘<rt>わす</rt></ruby>れがちになるのかな？
[01:47.58] <ruby>見慣<rt>みな</rt></ruby>れた<ruby>景色<rt>けしき</rt></ruby>に<ruby>何<rt>なに</rt></ruby>かが<ruby>足<rt>た</rt></ruby>りない
[02:00.49] <ruby>見上<rt>みあ</rt></ruby>げた<ruby>夜空<rt>よぞら</rt></ruby>に<ruby>頼<rt>たよ</rt></ruby>りない<ruby>月明<rt>つきあか</rt></ruby>りだけ
[02:13.25] <ruby>泣<rt>な</rt></ruby>きそうで<ruby>投<rt>な</rt></ruby>げ<ruby>出<rt>だ</rt></ruby>した　<ruby>書<rt>か</rt></ruby>きかけのままの<ruby>日記<rt>にっき</rt></ruby>
[02:25.83] <ruby>明日<rt>あした</rt></ruby>は<ruby>言<rt>い</rt></ruby>えるかな？
[02:32.32] ふわり<ruby>指<rt>ゆび</rt></ruby>に<ruby>止<rt>と</rt></ruby>まった<ruby>アワイ<rt>あわい</rt></ruby><ruby>蝶<rt>ちょう</rt></ruby>
[02:39.28] この<ruby>夜更<rt>よふ</rt></ruby>けにどこへ<ruby>飛<rt>と</rt></ruby>ぶのかな？
[02:45.44] この<ruby>深<rt>ふか</rt></ruby>い<ruby>闇<rt>やみ</rt></ruby>に<ruby>灯<rt>とも</rt></ruby>されたまま
[02:52.85] <ruby>生<rt>う</rt></ruby>まれたときは　ひとりぼっちだったよと　みんな<ruby>同<rt>おな</rt></ruby>じなんだよね
[03:33.20] <ruby>君<rt>きみ</rt></ruby>の<ruby>音<rt>おと</rt></ruby>で<ruby>飾<rt>かざ</rt></ruby>った<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>で</rt></ruby>は
[03:39.86] どの<ruby>言葉<rt>ことば</rt></ruby>で<ruby>歌<rt>うた</rt></ruby>にできるかな？
[03:46.21] この<ruby>指<rt>ゆび</rt></ruby>でなぞった<ruby>優<rt>やさ</rt></ruby>しさが
[03:52.77] いつ<ruby>誰<rt>だれ</rt></ruby>かの<ruby>愛<rt>あい</rt></ruby>に<ruby>変<rt>か</rt></ruby>わるかな？
[03:59.33] ただ<ruby>夢<rt>ゆめ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>絆<rt>ほだ</rt></ruby>されたまま
[04:06.28] <ruby>生<rt>う</rt></ruby>まれたときは　ひとりぼっちだったこと　<ruby>忘<rt>わす</rt></ruby>れがちになるんだね
[04:28.84] <ruby>同<rt>おな</rt></ruby>じなんだよね
[04:41.62] <ruby>同<rt>おな</rt></ruby>じなんだよね`)

let startTimes = []
// let endTimes = [];
const lyricsArray = computed(() => {
  const array = lyrics.value.split('\n')
  startTimes = []
  // endTimes = [];
  const newLyricsArray = array.map((line) => {
    const time = line.match(/\[(\d{2}:\d{2}\.\d{2})\]/)
    // string to number
    if (!time) {
      return null
    }
    const timeParts = time[1].split(':')
    let totalSeconds = 0

    for (let index = 0; index < timeParts.length; index++) {
      totalSeconds += parseFloat(timeParts[index]) * Math.pow(60, 1 - index)
    }
    startTimes.push(totalSeconds)
    // endTimes.push(totalSeconds);
    return line.replace(`${time[0]} `, '')
  })
  // startTimes.pop();
  // endTimes.shift();
  console.log(startTimes)

  return newLyricsArray
})

const otherLyrics = ref(`翻閱開的筆記本，所譜寫的青澀
伴隨一日完結的鐘聲，在字裡行間探尋你的身影
看來如此笨拙、又如此曖昧的，無法書寫於譜面的音色
將其深深埋藏於此心
彼此觸及的指尖、描繪的種種回憶
又能以何種話語，將其譜寫成歌呢？
僅是陷溺於束縛自身的美夢之中
我是否應試圖淡忘，自己降生於世之時，孑然一身的孤獨呢？
早已見慣的景色缺少了什麼
仰望這寂寥的夜空，僅有無所依靠的月色高掛
泫然欲泣，而扔出尚未完成的日記
「到了明天，就能夠說出口了嗎？」
輕柔地停歇在指尖的、稍縱即逝的回憶之蝶
又將在這深夜時分，飛往何處呢？
種種往昔被暉暗的夜晚再度綻亮
「但不論是誰，都是孤伶伶地來到這世上吧？」每個人都是這樣的吧
綴飾上你的聲音的，種種往昔
我又能以何種話語，將其譜寫成歌呢？
這指尖所描繪出的，種種溫柔
是否又能化作，擁抱孤單的人的愛呢？
這曾幾度禁錮自身的甜美幻夢
令我得以淡忘，自己降生於世之時，曾孑然一身的孤獨
我們都是這樣的吧
就這麼忘卻降生的孤獨吧`)
const otherLyricsArray = computed(() => otherLyrics.value.split('\n'))

const uploadSong = async () => {
  const song_id = await createSong(songInfo.value)

  console.log(song_id)
}
const uploadLyrics = async () => {
  const lyrics_yomi = await createLyrics({
    lines: lyricsArray.value,
    language: 'jp_yomi',
    songRef: doc(db, 'songs', 'gpp8WoMAMuDMlfObD0rC'),
    startTimes,
    // endTimes,
    youtubeId: youtubeId.value
  })
  console.log(lyrics_yomi)
  const lyrics_tw = await createLyrics({
    lines: otherLyricsArray.value,
    language: 'zh_tw',
    songRef: doc(db, 'songs', 'gpp8WoMAMuDMlfObD0rC'),
    startTimes,
    // endTimes,
    youtubeId: youtubeId.value
  })
  console.log(lyrics_tw)
}
</script>
<style scoped>
div {
  border-bottom: 1px solid #ccc;
}
</style>
