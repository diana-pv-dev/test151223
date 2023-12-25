
// localization form is used in the menu (menu-list.liquid)
// its a custom selector (button + ul li)
class LocalizationForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.openButton = this.querySelector('.js-localization__button')
    this.input = this.querySelector('.js-localization__input')
    this.languageLinks = this.querySelectorAll('.js-localization__link')

    // this.selectLang = this.querySelector('.js-localization__select')

    this.openButton.addEventListener('click', () => this.toggleMenu())
    this.openButton.addEventListener('focusout', () => this.closeMenu());
    for (const language of this.languageLinks) {
      language.addEventListener('click', this.onItemClick.bind(this))
    }
    // this.selectLang.addEventListener('change', this.onSelectChange.bind(this));
  }

  disconnectedCallback() {
    this.openButton.removeEventListener('click', () => this.toggleMenu())
    this.openButton.removeEventListener('focusout', () => this.closeMenu());
    for (const language of this.languageLinks) {
      language.removeEventListener('click', this.onItemClick.bind(this))
    }
    // this.selectLang.removeEventListener('change', this.onSelectChange.bind(this));
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

  // onSelectChange(event) {
  //   this.input.value = event.currentTarget.value;
  //   const form = this.closest('form');
  //   if (form) form.submit();
  // }
}

// localization form is used in the header
// its a regular selector (select + options)
class LocalizationSelectForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.inputLang = this.querySelector('.js-localization__input--lang')
    this.selectLang = this.querySelector('.js-localization__select')
    this.inputCurrency = this.querySelector('.js-localization__input--currency')
    this.selectCurrency = this.querySelector('.js-currency__select')

    this.selectLang.addEventListener('change', this.onLangChange.bind(this));
    this.selectCurrency.addEventListener('change', this.onCurrencyChange.bind(this));
  }

  disconnectedCallback() {
    this.selectLang.removeEventListener('change', this.onLangChange.bind(this));
    this.selectCurrency.removeEventListener('change', this.onCurrencyChange.bind(this));
  }
  
  onLangChange(event) {
    const form = this.querySelector('form');

    this.inputLang.value = event.currentTarget.value;
    if (form) form.submit();
  }

  onCurrencyChange(event) {
    const form = this.querySelector('form');

    this.inputCurrency.value = event.currentTarget.value;
    if (form) form.submit();
  }

}

customElements.define('localization-form', LocalizationForm);
customElements.define('localization-select-form', LocalizationSelectForm);
