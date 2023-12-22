class FooterAccordion extends HTMLElement {
  activeMenu = null;

  constructor() {
    super()
  }

  connectedCallback() {
    this.openButtons = this.querySelectorAll('.js-footer-menu__button')

    for (const openButton of this.openButtons) {
      openButton.addEventListener('click', (event) => this.toggleMenu(event))
    }
  }

  disconnectedCallback() {
    for (const openButton of this.openButtons) {
      openButton.removeEventListener('click', (event) => this.toggleMenu(event))
    }
  }

  toggleMenu(event) {
    if (this.activeMenu !== null && this.activeMenu !== event.currentTarget) {
      this.activeMenu.nextElementSibling.classList.remove('footer-menu__accordion-content--active')
      this.activeMenu.firstElementChild.classList.remove('footer-menu__icon--active');
    }

    this.activeMenu = event.currentTarget;

    this.activeMenu.nextElementSibling.classList.toggle('footer-menu__accordion-content--active');
    this.activeMenu.firstElementChild.classList.toggle('footer-menu__icon--active');
  }
}

customElements.define('footer-accordion', FooterAccordion)