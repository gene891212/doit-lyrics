class LyricsFinder {
  constructor(lyricsData) {
    // sort by language in lyricsData
    lyricsData.sort((a, b) => a.language.localeCompare(b.language))

    this.lyrics = []
    this.supportedLangs = []
    lyricsData.forEach((data) => {
      this.lyrics.push(data.lines)
      this.supportedLangs.push(data.language)
    })

    if (this.supportedLangs.includes('jp_yomi')) {
      // Remove language "jp" if "jp_yomi" exists
      const removeIndex = this.supportedLangs.indexOf('jp')
      if (removeIndex >= 0) {
        this.lyrics.splice(removeIndex, 1)
        this.supportedLangs.splice(removeIndex, 1)
      }
    }

    const mainLyrics = lyricsData.find(
      (data) => data.language === 'jp_yomi' || data.language === 'jp'
    )

    this.linesCount = mainLyrics.lines.length
    // delete mainLyrics.lines
    delete mainLyrics.lines
    Object.assign(this, mainLyrics)
  }

  _findIndex = (currentTime) => {
    const index = this.startTimes.findIndex((time) => time > currentTime)
    return index >= 0 ? index - 1 : this.linesCount - 1
  }

  getPrevIndex = (currentTime) => {
    const index = this._findIndex(currentTime)
    return index >= 0 ? index - 1 : null
  }

  getCurrIndex = (currentTime) => {
    const index = this._findIndex(currentTime)
    return index >= 0 ? index : null
  }

  getNextIndex = (currentTime) => {
    const index = this._findIndex(currentTime)
    return index < this.linesCount - 1 ? index + 1 : null
  }

  getTimestamp = (index) => {
    return this.startTimes[index]
  }
}

class RepeatManager {
  constructor(repeatElement) {
    this.repeatIndex = null
    this.repeatFlag = false

    this.repeatElement = repeatElement
  }

  toggleRepeat = () => {
    if (this.repeatIndex === null) {
      return
    }

    this.repeatFlag = !this.repeatFlag
    if (this.repeatFlag) {
      this.repeatElement.classList.add('active')
    } else {
      this.repeatElement.classList.remove('active')
    }
  }
}

export { LyricsFinder, RepeatManager }
