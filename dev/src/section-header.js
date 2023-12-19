class MenuNavigationMobile extends HTMLElement {
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
    } else {
      this.menuClose()
    }
  }

  menuOpen() {
    this.menu.style.left = '0'
    this.menuStatus = 'open'
    console.log('menu open')
  }

  menuClose() {
    this.menu.style.left = '-100%'
    this.menuStatus = 'closed'
    console.log('menu closed')
  }

}

class MenuNavigation extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.menu = this.querySelector('.js-menu-desktop')
    this.menuBackground = this.querySelector('.js-menu-desktop--bgd')
    this.openBtn = this.querySelector('.js-menu-desktop--open')
    this.closeBtn = this.querySelector('.js-menu-desktop--close')
    this.menuStatus = 'closed'
    this.openBtn.addEventListener('click', () => this.toggleMenu())
    this.closeBtn.addEventListener('click', () => this.toggleMenu())
    this.menuBackground.addEventListener('click', () => this.menuClose())
  
  }

  disconnectedCallback() {
    this.openBtn.removeEventListener('click', this.toggleMenu)
    this.closeBtn.removeEventListener('click', this.toggleMenu)
  }

  toggleMenu() {
    if (this.menuStatus == 'closed') {
      this.menuOpen()
    } else {
      this.menuClose()
    }
  }

  menuOpen() {
    this.menu.style.left = '0'
    this.menuBackground.style.display = 'block'
    this.menuBackground.style.opacity = '26%'
    this.menuStatus = 'open'
  }

  menuClose() {
    this.menu.style.left = '-100%'
    this.menuStatus = 'closed'
    this.menuBackground.style.display = 'none'
    this.menuBackground.style.opacity = '0'
  }

}

class ExpandedMenuMobile extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.menu = this.querySelector('.js-header__menu')
    this.expandedMenu = this.querySelector('.js-expanded-menu')
    this.backBtn = this.querySelector('.js-expanded-menu__btn--back')
    this.closeBtn = this.querySelector('.js-expanded-menu__btn--close')
    this.openBtn = this.querySelector('.js-expanded-menu__btn--open')
    this.expandedMenuStatus = 'closed'
    this.backBtn.addEventListener('click', () => this.toggleMenu())
    this.closeBtn.addEventListener('click', () => this.toggleMenu())
    this.openBtn.addEventListener('click', () => this.toggleMenu())
  }

  disconnectedCallback() {
    this.backBtn.removeEventListener('click', this.toggleMenu)
    this.closeBtn.removeEventListener('click', this.toggleMenu)
    this.openBtn.removeEventListener('click', () => this.toggleMenu())
  }

  toggleMenu() {
    if (this.expandedMenuStatus == 'closed') {
      this.menuOpen()

    } else {
      this.menuClose()
    }
  }

  menuOpen() {
    this.expandedMenu.style.left = '0'
    this.expandedMenuStatus = 'open'
    
  }

  menuClose() {
    this.expandedMenu.style.left = '-100%'
    this.expandedMenu.style.boxShadow = 'none'
    this.expandedMenuStatus = 'closed'
  }
}

class ExpandedMenu extends HTMLElement {
  activeMenu = null;

  constructor() {
    super()
  }

  // event.target 
  connectedCallback() {
    this.menuBackground = this.querySelector('.js-menu-desktop--bgd')
    this.openBtns = this.querySelectorAll('.js-menu-desktop-expanded--open')
    this.closeBtn =  this.querySelector('.js-menu-desktop--close')

    for (const openBtn of this.openBtns) {
      openBtn.addEventListener('click', (event) => this.toggleMenu(event))
    }

    this.menuBackground.addEventListener('click', () => this.menuClose())
    this.closeBtn.addEventListener('click', () => this.menuClose())
  }

  disconnectedCallback() {
    for (const openBtn of this.openBtns) {
      openBtn.removeEventListener('click', () => this.toggleMenu())
    }
  }

  toggleMenu(event) {
    if (this.activeMenu !== null) {
      this.activeMenu.nextElementSibling.classList.remove('menu-desktop-expanded--active')
    }

    this.activeMenu = event.currentTarget
    this.activeMenu.nextElementSibling.classList.add('menu-desktop-expanded--active');
  }

  menuClose() {
    this.activeMenu.nextElementSibling.classList.remove('menu-desktop-expanded--active');
  }

}

customElements.define('menu-navigation-mobile', MenuNavigationMobile)
customElements.define('menu-navigation', MenuNavigation)
customElements.define('expanded-menu-mobile', ExpandedMenuMobile)
customElements.define('expanded-menu', ExpandedMenu)