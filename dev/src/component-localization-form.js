class LocalizationForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.openButton = this.querySelector('.js-localization__button')
    this.input = this.querySelector('.js-localization__input')
    this.languageLinks = this.querySelectorAll('.js-localization__link')
    

    this.openButton.addEventListener('click', () => this.toggleMenu())
    this.openButton.addEventListener('focusout', () => this.closeMenu());
    for (const language of this.languageLinks) {
      language.addEventListener('click', this.onItemClick.bind(this))
    }
  }

  disconnectedCallback() {
    this.openButton.removeEventListener('click', () => this.toggleMenu())
    this.openButton.removeEventListener('focusout', () => this.closeMenu());
    for (const language of this.languageLinks) {
      language.removeEventListener('click', this.onItemClick.bind(this))
    }
  }

  toggleMenu() {
    this.openButton.nextElementSibling.classList.toggle('c-localization__list--active');
  }

  closeMenu() {
    this.openButton.nextElementSibling.classList.remove('c-localization__list--active');
  }

  onItemClick(event) {
    event.preventDefault();
    const form = this.querySelector('form');
    this.input.value = event.currentTarget.dataset.value;
    if (form) form.submit();
  }

}

customElements.define('localization-form', LocalizationForm);
