if (!customElements.get('s-account-register')) {
  customElements.define('s-account-register', class SectionAccountRegister extends HTMLElement {
      constructor() {
          super();
      }

      connectedCallback() {
        this.form = this.querySelector(".s-account-register__form");
        this.firstName = this.querySelector(".js-account-register__first-name") || null;
        this.lastName = this.querySelector(".js-account-register__last-name") || null;
        this.email = this.querySelector(".js-account-register__email") || null;
        this.password = this.querySelector(".js-account-register__password") || null;
        this.passwordCheck = this.querySelector(".js-account-register__password-check") || null;
        this.passwordVisibilityBtns = Array.from(this.querySelectorAll(".js-account-register__toggle-password")) || null;

        this.submitButton = this.querySelector(".js-account-register__submit-button") || null;
        
        this.submitButton.addEventListener("click",() => {this.validateForm()});
        this.passwordVisibilityBtns.forEach((button) => {
          button.addEventListener("click", () => this.togglePasswordVisibility(button));
        });

        console.log(this.passwordVisibilityBtns)
      }

      disconnectedCallback() {
        this.submitButton.removeEventListener("click",() => {this.validateForm()});
        this.passwordVisibilityBtns.forEach((button) => {
          button.removeEventListener("click", () => this.togglePasswordVisibility(button));
        });
      }

      validateForm = () => {
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordLength = /^.{8,}$/;

        if(this.firstName) {
          if(this.firstName.value === "") {
              this.firstName.nextElementSibling.classList.add("s-account-register__form-field--error-active");
              isValid = false;
          } else {
              this.firstName.nextElementSibling.classList.remove("s-account-register__form-field--error-active");
          }
      }

      if(this.lastName) {
          if(this.lastName.value === "") {
              this.lastName.nextElementSibling.classList.add("s-account-register__form-field--error-active");
              isValid = false;
          } else {
              this.lastName.nextElementSibling.classList.remove("s-account-register__form-field--error-active");
          }
      }

      if(this.email) {
          if (!emailRegex.test(this.email.value)) {
              this.email.nextElementSibling.classList.add("s-account-register__form-field--error-active");
              isValid = false;
          } else {
              this.email.nextElementSibling.classList.remove("s-account-register__form-field--error-active");
          }
      }

      if(this.password) {
          if(!passwordLength.test(this.password.value)) {
              this.password.nextElementSibling.classList.add("s-account-register__form-field--error-active");
              isValid = false;
          } else {
              this.password.nextElementSibling.classList.remove("s-account-register__form-field--error-active");
          }

          if(this.passwordCheck) {
              if(this.password.value != this.passwordCheck.value) {
                  this.passwordCheck.nextElementSibling.classList.add("s-account-register__form-field--error-active");
                  isValid = false;
              } else {
                  this.passwordCheck.nextElementSibling.classList.remove("s-account-register__form-field--error-active");
              }
          }
      }

      if(isValid === true) {
        this.form.submit();
      }
      }

      togglePasswordVisibility(btn) {
        let input = this.querySelector(btn.getAttribute("data-input"));

        if (input.getAttribute("type") === "password") {
            input.type = "text";
            btn.classList.add("s-account-register__show-password--active");
        } else {
            input.type = "password";
            btn.classList.remove("s-account-register__show-password--active");
        }
      }
  });
}