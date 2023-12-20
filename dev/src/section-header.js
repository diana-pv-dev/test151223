class MenuNavigationMobile extends HTMLElement {
  activeMenuMobile = null;

  constructor() {
    super()
  }

  connectedCallback() {
    // mobile menu
    this.menu = this.querySelector('.js-header__menu')

    // burger menu button
    this.openBtn = this.querySelector('.js-header__menu-button--open')

    //menu close button
    this.closeBtn = this.querySelector('.js-header__menu-button--close')

    //Bags >, Clothes >, etc
    this.openExpBtns = this.querySelectorAll('.js-expanded-menu__btn--open')

    //expanded menu

    // X   ALL BAGS  [<] -- [this] button to go back to menu from expanded menu
    this.backExpBtns = this.querySelectorAll('.js-expanded-menu__btn--back')

    // [X]   ALL BAGS  < -- [this] button to go close expanded&main menu 
    this.closeExpBtns = this.querySelectorAll('.js-expanded-menu__btn--close')



    for (const openExpBtn of this.openExpBtns) {
      openExpBtn.addEventListener('click', (event) => this.toggleMenuExp(event))
    }
    for (const backExpBtn of this.backExpBtns) {
      backExpBtn.addEventListener('click', (event) => this.toggleMenuExp(event))
    }
    for (const closeExpBtn of this.closeExpBtns) {
      closeExpBtn.addEventListener('click', (event) => this.menuClose(event))
    }
    this.openBtn.addEventListener('click', () => this.toggleMenu())
    this.closeBtn.addEventListener('click', () => this.toggleMenu())

    this.menuStatus = 'closed'
  }

  disconnectedCallback() {
    for (const openBtn of this.openBtns) {
      openBtn.removeEventListener('click', (event) => this.toggleMenuExp(event))
    }
    for (const backExpBtn of this.backExpBtns) {
      backExpBtn.removeEventListener('click', (event) => this.toggleMenuExp(event))
    }
    for (const closeExpBtn of this.closeExpBtns) {
      closeExpBtn.removeEventListener('click', (event) => this.menuClose(event))
    }
    this.openBtn.removeEventListener('click', this.toggleMenu)
    this.closeBtn.removeEventListener('click', this.toggleMenu)
  }

  toggleMenuExp(event) {
    if (this.activeMenuMobile !== null) {
        this.activeMenuMobile.nextElementSibling.classList.remove('expanded-menu--active')
    }

    //<span class="s-header__menu-link">
    this.activeMenuMobile = event.currentTarget;
    this.activeMenuMobile.nextElementSibling.classList.add('expanded-menu--active');
    
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
  }

  menuClose() {
    this.menu.style.left = '-100%'
    this.menuStatus = 'closed'
    this.activeMenuMobile.nextElementSibling.classList.remove('expanded-menu--active');
   }
}

class MenuNavigation extends HTMLElement {
  activeMenu = null;

  constructor() {
    super()
  }

  connectedCallback() {
    this.menu = this.querySelector('.js-menu-desktop')
    this.menuBackground = this.querySelector('.js-menu-desktop--bgd')
    this.openBtn = this.querySelector('.js-menu-desktop--open')
    this.openExpBtns = this.querySelectorAll('.js-menu-desktop-expanded--open')
    this.closeBtn = this.querySelector('.js-menu-desktop--close')
    this.menuStatus = 'closed'

    for (const openExpBtn of this.openExpBtns) {
      openExpBtn.addEventListener('click', (event) => this.toggleMenuExp(event))
    }

    this.openBtn.addEventListener('click', () => this.toggleMenu())
    this.closeBtn.addEventListener('click', () => this.toggleMenu())
    this.menuBackground.addEventListener('click', () => this.menuClose())
  
  }

  disconnectedCallback() {
    for (const openBtn of this.openBtns) {
      openBtn.removeEventListener('click', (event) => this.toggleMenuExp(event))
    }
    this.openBtn.removeEventListener('click', this.toggleMenu)
    this.closeBtn.removeEventListener('click', this.toggleMenu)
    this.menuBackground.removeEventListener('click', () => this.menuClose())
  }

  toggleMenuExp(event) {
    if (this.activeMenu !== null) {
      if ([...this.activeMenu.nextElementSibling.classList].includes("menu-desktop-expanded--direction--rtl")) {
        this.activeMenu.nextElementSibling.classList.remove('menu-desktop-expanded--direction--rtl--active')
      } else {
        this.activeMenu.nextElementSibling.classList.remove('menu-desktop-expanded--active')
      }
    }

    this.activeMenu = event.currentTarget;

    if ([...this.activeMenu.nextElementSibling.classList].includes("menu-desktop-expanded--direction--rtl")) {
      this.activeMenu.nextElementSibling.classList.add('menu-desktop-expanded--direction--rtl--active');
    } else {
      this.activeMenu.nextElementSibling.classList.add('menu-desktop-expanded--active');
    }
  }

  toggleMenu() {    
    if (this.menuStatus == 'closed') {
      this.menuOpen()
    } else {
      this.menuClose()
    }
  }

  menuOpen() {
    if ([...this.menu.classList].includes("menu-desktop--direction--rtl")) {
      this.menu.style.left = 'auto'
      this.menu.style.right = '0'
    } else {
      this.menu.style.left = '0'
    }
    this.menuBackground.style.display = 'block'
    this.menuBackground.style.opacity = '26%'
    this.menuStatus = 'open'
  }

  menuClose() {
    if ([...this.menu.classList].includes("menu-desktop--direction--rtl")) {
      this.menu.style.left = '100%'
      this.menu.style.right = 'auto'
    } else {
      this.menu.style.left = '-100%'
    }

    this.menuStatus = 'closed'
    this.menuBackground.style.display = 'none'
    this.menuBackground.style.opacity = '0'
    this.activeMenu.nextElementSibling.classList.remove('menu-desktop-expanded--active');
    this.activeMenu.nextElementSibling.classList.remove('menu-desktop-expanded--direction--rtl--active')
  }

}



customElements.define('menu-navigation-mobile', MenuNavigationMobile)
customElements.define('menu-navigation', MenuNavigation)