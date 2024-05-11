class ThemeManager {
  constructor() {
    this.THEMES = {
      light: { colorScheme: 'light', nextTheme: 'dark', nextColorScheme: 'dark' },
      dark: { colorScheme: 'dark', nextTheme: 'black', nextColorScheme: 'dark' },
      black: { colorScheme: 'dark', nextTheme: 'light', nextColorScheme: 'light' }
    }

    this.currentTheme = localStorage.getItem('theme') || 'light'
    this.currentColorScheme = this.THEMES[this.currentTheme].colorScheme
    this._setTheme()
  }

  switchTheme() {
    this.currentTheme = this.THEMES[this.currentTheme].nextTheme
    this.currentColorScheme = this.THEMES[this.currentTheme].nextColorScheme

    this._setTheme()
    localStorage.setItem('theme', this.currentTheme)
  }

  _setTheme() {
    document.body.setAttribute('theme', this.currentTheme)
    document.body.style.colorScheme = this.currentColorScheme
  }
}

export { ThemeManager }
