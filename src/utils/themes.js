class ThemeManager {
  constructor() {
    this.THEMES = {
      light: { theme: 'light', colorScheme: 'light', nextTheme: 'dark', nextColorScheme: 'dark' },
      dark: { theme: 'tw-dark', colorScheme: 'dark', nextTheme: 'light', nextColorScheme: 'light' }
      // TODO: System theme
    }

    this.currentTheme = localStorage.getItem('theme') || 'light'
    this.currentColorScheme = this.THEMES[this.currentTheme].colorScheme
    this._setTheme()
  }

  switchTheme() {
    // store last theme
    let lastTheme = this.currentTheme
    this.currentTheme = this.THEMES[lastTheme].nextTheme
    this.currentColorScheme = this.THEMES[lastTheme].nextColorScheme

    this._setTheme()
    localStorage.setItem('theme', this.currentTheme)
  }

  _setTheme() {
    document.body.setAttribute('theme', this.currentTheme)
    console.log(this.currentTheme, this.currentColorScheme)

    document.documentElement.classList.remove(...Object.keys(this.THEMES))
    document.documentElement.classList.add(this.currentTheme)
    document.documentElement.style.colorScheme = this.currentColorScheme
  }
}

export { ThemeManager }
