"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"===_typeof(e)?e:String(e)}function _toPrimitive(e,t){if("object"!==_typeof(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);r=r.call(e,t||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var e,t=_getPrototypeOf(r);return _possibleConstructorReturn(this,n?(e=_getPrototypeOf(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))}}function _possibleConstructorReturn(e,t){if(t&&("object"===_typeof(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _wrapNativeSuper(e){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(e){if(null===e||!_isNativeFunction(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return _construct(e,arguments,_getPrototypeOf(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(t,e)})(e)}function _construct(e,t,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);t=new(Function.bind.apply(e,n));return r&&_setPrototypeOf(t,r.prototype),t}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function _isNativeFunction(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}!function n(o,i,u){function c(t,e){if(!i[t]){if(!o[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(a)return a(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}r=i[t]={exports:{}},o[t][0].call(r.exports,function(e){return c(o[t][1][e]||e)},r,r.exports,n,o,i,u)}return i[t].exports}for(var a="function"==typeof require&&require,e=0;e<u.length;e++)c(u[e]);return c}({1:[function(e,t,r){var n=function(){_inherits(r,_wrapNativeSuper(HTMLElement));var e=_createSuper(r);function r(){var t;return _classCallCheck(this,r),(t=e.call(this)).elements={input:t.querySelector('input[name="language_code"], input[name="country_code"]'),button:t.querySelector("button"),panel:t.querySelector("ul")},t.elements.button.addEventListener("click",t.openSelector.bind(_assertThisInitialized(t))),t.elements.button.addEventListener("focusout",t.closeSelector.bind(_assertThisInitialized(t))),t.addEventListener("keyup",t.onContainerKeyUp.bind(_assertThisInitialized(t))),t.querySelectorAll("a").forEach(function(e){return e.addEventListener("click",t.onItemClick.bind(_assertThisInitialized(t)))}),t}return _createClass(r,[{key:"hidePanel",value:function(){this.elements.button.setAttribute("aria-expanded","false"),this.elements.panel.setAttribute("hidden",!0)}},{key:"onContainerKeyUp",value:function(e){"ESCAPE"===e.code.toUpperCase()&&(this.hidePanel(),this.elements.button.focus())}},{key:"onItemClick",value:function(e){e.preventDefault();var t=this.querySelector("form");this.elements.input.value=e.currentTarget.dataset.value,t&&t.submit()}},{key:"openSelector",value:function(){this.elements.button.focus(),this.elements.panel.toggleAttribute("hidden"),this.elements.button.setAttribute("aria-expanded",("false"===this.elements.button.getAttribute("aria-expanded")).toString())}},{key:"closeSelector",value:function(e){var t=e.relatedTarget&&"BUTTON"===e.relatedTarget.nodeName;null!==e.relatedTarget&&!t||this.hidePanel()}}]),r}();customElements.define("localization-form",n)},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50LWxvY2FsaXphdGlvbi1mb3JtLmpzIiwiY29tcG9uZW50LWxvY2FsaXphdGlvbi1mb3JtLmpzIl0sIm5hbWVzIjpbInIiLCJlIiwibiIsInQiLCJvIiwiaSIsImYiLCJjIiwicmVxdWlyZSIsInUiLCJhIiwiRXJyb3IiLCJjb2RlIiwicCIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiMSIsIm1vZHVsZSIsIkxvY2FsaXphdGlvbkZvcm0iLCJfaW5oZXJpdHMiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiSFRNTEVsZW1lbnQiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJlbGVtZW50cyIsImlucHV0IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbiIsInBhbmVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5TZWxlY3RvciIsImJpbmQiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiY2xvc2VTZWxlY3RvciIsIm9uQ29udGFpbmVyS2V5VXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJvbkl0ZW1DbGljayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwic2V0QXR0cmlidXRlIiwiZXZlbnQiLCJ0b1VwcGVyQ2FzZSIsImhpZGVQYW5lbCIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzdWJtaXQiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJ0b1N0cmluZyIsInNob3VsZENsb3NlIiwicmVsYXRlZFRhcmdldCIsIm5vZGVOYW1lIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiXSwibWFwcGluZ3MiOiI4NUdBQUEsQ0FBQSxTQUFBQSxFQUFBQyxFQUFBQyxFQUFBQyxHQUFBLFNBQUFDLEVBQUFDLEVB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LGlCQUFBLFVBQUFuQixLQUFBQyxTQUFBRyxPQUFBMEIsYUFBQSxlQUFBLEdBQUFDLFNBQUEsQ0FBQSxDQUNBLENBQUEsRUFBQSxDQUFBZCxJQUFBLGdCQUFBQyxNQUVBLFNBQUFFLEdBQ0EsSUFBQVksRUFBQVosRUFBQWEsZUFBQSxXQUFBYixFQUFBYSxjQUFBQyxTQUNBLE9BQUFkLEVBQUFhLGVBQUFELENBQUFBLEdBQ0FoQyxLQUFBc0IsVUFBQSxDQUVBLENBQUEsRUFBQSxFQUFBOUIsQ0FBQSxFQTdDQSxFQWdEQTJDLGVBQUFDLE9BQUEsb0JBQUE1QyxDQUFBLENDR0EsRUFBRSxHQUFHLEVBQUUsR0RqRFBNLENBQUFBLEVBQUEiLCJmaWxlIjoiY29tcG9uZW50LWxvY2FsaXphdGlvbi1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNsYXNzIExvY2FsaXphdGlvbkZvcm0gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5lbGVtZW50cyA9IHtcclxuICAgICAgaW5wdXQ6IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImxhbmd1YWdlX2NvZGVcIl0sIGlucHV0W25hbWU9XCJjb3VudHJ5X2NvZGVcIl0nKSxcclxuICAgICAgYnV0dG9uOiB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLFxyXG4gICAgICBwYW5lbDogdGhpcy5xdWVyeVNlbGVjdG9yKCd1bCcpLFxyXG4gICAgfTtcclxuICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuU2VsZWN0b3IuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMuY2xvc2VTZWxlY3Rvci5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uQ29udGFpbmVyS2V5VXAuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcykpKTtcclxuICB9XHJcblxyXG4gIGhpZGVQYW5lbCgpIHtcclxuICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgdGhpcy5lbGVtZW50cy5wYW5lbC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgb25Db250YWluZXJLZXlVcChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmNvZGUudG9VcHBlckNhc2UoKSAhPT0gJ0VTQ0FQRScpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmhpZGVQYW5lbCgpO1xyXG4gICAgdGhpcy5lbGVtZW50cy5idXR0b24uZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIG9uSXRlbUNsaWNrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybSA9IHRoaXMucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgdGhpcy5lbGVtZW50cy5pbnB1dC52YWx1ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC52YWx1ZTtcclxuICAgIGlmIChmb3JtKSBmb3JtLnN1Ym1pdCgpO1xyXG4gIH1cclxuXHJcbiAgb3BlblNlbGVjdG9yKCkge1xyXG4gICAgdGhpcy5lbGVtZW50cy5idXR0b24uZm9jdXMoKTtcclxuICAgIHRoaXMuZWxlbWVudHMucGFuZWwudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nKTtcclxuICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICh0aGlzLmVsZW1lbnRzLmJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJykudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZVNlbGVjdG9yKGV2ZW50KSB7XHJcbiAgICBjb25zdCBzaG91bGRDbG9zZSA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQgJiYgZXZlbnQucmVsYXRlZFRhcmdldC5ub2RlTmFtZSA9PT0gJ0JVVFRPTic7XHJcbiAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCA9PT0gbnVsbCB8fCBzaG91bGRDbG9zZSkge1xyXG4gICAgICB0aGlzLmhpZGVQYW5lbCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsb2NhbGl6YXRpb24tZm9ybScsIExvY2FsaXphdGlvbkZvcm0pO1xyXG4iLCIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmNsYXNzIExvY2FsaXphdGlvbkZvcm0gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5lbGVtZW50cyA9IHtcclxuICAgICAgaW5wdXQ6IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImxhbmd1YWdlX2NvZGVcIl0sIGlucHV0W25hbWU9XCJjb3VudHJ5X2NvZGVcIl0nKSxcclxuICAgICAgYnV0dG9uOiB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpLFxyXG4gICAgICBwYW5lbDogdGhpcy5xdWVyeVNlbGVjdG9yKCd1bCcpLFxyXG4gICAgfTtcclxuICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuU2VsZWN0b3IuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLmVsZW1lbnRzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHRoaXMuY2xvc2VTZWxlY3Rvci5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLm9uQ29udGFpbmVyS2V5VXAuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdhJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcykpKTtcclxuICB9XHJcblxyXG4gIGhpZGVQYW5lbCgpIHtcclxuICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG4gICAgdGhpcy5lbGVtZW50cy5wYW5lbC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgb25Db250YWluZXJLZXlVcChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmNvZGUudG9VcHBlckNhc2UoKSAhPT0gJ0VTQ0FQRScpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmhpZGVQYW5lbCgpO1xyXG4gICAgdGhpcy5lbGVtZW50cy5idXR0b24uZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIG9uSXRlbUNsaWNrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybSA9IHRoaXMucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgdGhpcy5lbGVtZW50cy5pbnB1dC52YWx1ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC52YWx1ZTtcclxuICAgIGlmIChmb3JtKSBmb3JtLnN1Ym1pdCgpO1xyXG4gIH1cclxuXHJcbiAgb3BlblNlbGVjdG9yKCkge1xyXG4gICAgdGhpcy5lbGVtZW50cy5idXR0b24uZm9jdXMoKTtcclxuICAgIHRoaXMuZWxlbWVudHMucGFuZWwudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nKTtcclxuICAgIHRoaXMuZWxlbWVudHMuYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICh0aGlzLmVsZW1lbnRzLmJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJykudG9TdHJpbmcoKSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZVNlbGVjdG9yKGV2ZW50KSB7XHJcbiAgICBjb25zdCBzaG91bGRDbG9zZSA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQgJiYgZXZlbnQucmVsYXRlZFRhcmdldC5ub2RlTmFtZSA9PT0gJ0JVVFRPTic7XHJcbiAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCA9PT0gbnVsbCB8fCBzaG91bGRDbG9zZSkge1xyXG4gICAgICB0aGlzLmhpZGVQYW5lbCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsb2NhbGl6YXRpb24tZm9ybScsIExvY2FsaXphdGlvbkZvcm0pO1xyXG5cbn0se31dfSx7fSxbMV0pXG5cbiJdfQ==
