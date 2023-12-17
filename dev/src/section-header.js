class MenuNavigation extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.menu = this.querySelector('.js-header__menu')
    this.openBtn = this.querySelector('.js-header__menu-button--open')
    this.closeBtn = this.querySelector('.js-header__menu-button--close')
    this.menuStatus = 'closed'
    this.openBtn.addEventListener('click', () => this.toggleMenu())
    this.closeBtn.addEventListener('click', () => this.toggleMenu())
  
  }

  disconnectedCallback() {
    this.openBtn.removeEventListener('click', this.toggleMenu)
    this.closeBtn.removeEventListener('click', this.toggleMenu)
  }

  toggleMenu() {
    if (this.menuStatus == 'closed') {
      this.menuOpen()
      console.log('open')
    } else {
      this.menuClose()
      console.log('close')
    }
  }

  menuOpen() {
    this.menu.style.left = '0'
    this.menuStatus = 'open'
  }

  menuClose() {
    this.menu.style.left = '-100%'
    this.menuStatus = 'closed'

  }

}

customElements.define('menu-navigation', MenuNavigation)