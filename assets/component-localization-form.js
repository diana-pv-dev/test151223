"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _createForOfIteratorHelper(t,e){var n,r,o,i,u="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(u)return r=!(n=!0),{s:function(){u=u.call(t)},n:function(){var t=u.next();return n=t.done,t},e:function(t){r=!0,o=t},f:function(){try{n||null==u.return||u.return()}finally{if(r)throw o}}};if(Array.isArray(t)||(u=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length)return u&&(t=u),i=0,{s:e=function(){},n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var n;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(n="Object"===(n=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);n=n.call(t,e||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(n){var r=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(n);return _possibleConstructorReturn(this,r?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var n="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,n){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);e=new(Function.bind.apply(t,r));return n&&_setPrototypeOf(e,n.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function r(o,i,u){function c(e,t){if(!i[e]){if(!o[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(a)return a(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}n=i[e]={exports:{}},o[e][0].call(n.exports,function(t){return c(o[e][1][t]||t)},n,n.exports,r,o,i,u)}return i[e].exports}for(var a="function"==typeof require&&require,t=0;t<u.length;t++)c(u[t]);return c}({1:[function(t,e,n){var r=function(){_inherits(e,_wrapNativeSuper(HTMLElement));var t=_createSuper(e);function e(){return _classCallCheck(this,e),t.call(this)}return _createClass(e,[{key:"connectedCallback",value:function(){var t,e=this,n=(this.openButton=this.querySelector(".js-localization__button"),this.input=this.querySelector(".js-localization__input"),this.languageLinks=this.querySelectorAll(".js-localization__link"),this.openButton.addEventListener("click",function(){return e.toggleMenu()}),this.openButton.addEventListener("focusout",function(){return e.closeMenu()}),_createForOfIteratorHelper(this.languageLinks));try{for(n.s();!(t=n.n()).done;)t.value.addEventListener("click",this.onItemClick.bind(this))}catch(t){n.e(t)}finally{n.f()}}},{key:"disconnectedCallback",value:function(){var t,e=this,n=(this.openButton.removeEventListener("click",function(){return e.toggleMenu()}),this.openButton.removeEventListener("focusout",function(){return e.closeMenu()}),_createForOfIteratorHelper(this.languageLinks));try{for(n.s();!(t=n.n()).done;)t.value.removeEventListener("click",this.onItemClick.bind(this))}catch(t){n.e(t)}finally{n.f()}}},{key:"toggleMenu",value:function(){this.openButton.nextElementSibling.classList.toggle("c-localization__list--active")}},{key:"closeMenu",value:function(){this.openButton.nextElementSibling.classList.remove("c-localization__list--active")}},{key:"onItemClick",value:function(t){t.preventDefault();var e=this.querySelector("form");this.input.value=t.currentTarget.dataset.value,e&&e.submit()}}]),e}(),o=function(){_inherits(e,_wrapNativeSuper(HTMLElement));var t=_createSuper(e);function e(){return _classCallCheck(this,e),t.call(this)}return _createClass(e,[{key:"connectedCallback",value:function(){this.input=this.querySelector(".js-localization__input"),this.selectLang=this.querySelector(".js-localization__select"),this.selectLang.addEventListener("change",this.onSelectChange.bind(this))}},{key:"disconnectedCallback",value:function(){this.selectLang.removeEventListener("change",this.onSelectChange.bind(this))}},{key:"onSelectChange",value:function(t){var e=this.querySelector("form");console.log(e),this.input.value=t.currentTarget.value,e&&e.submit()}}]),e}();customElements.define("localization-form",r),customElements.define("localization-select",o)},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50LWxvY2FsaXphdGlvbi1mb3JtLmpzIiwiY29tcG9uZW50LWxvY2FsaXphdGlvbi1mb3JtLmpzIl0sIm5hbWVzIjpbInIiLCJlIiwibiIsInQiLCJvIiwiaSIsImYiLCJjIiwicmVxdWlyZSIsInUiLCJhIiwiRXJyb3IiLCJjb2RlIiwicCIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiMSIsIm1vZHVsZSIsIkxvY2FsaXphdGlvbkZvcm0iLCJfaW5oZXJpdHMiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiSFRNTEVsZW1lbnQiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJ0aGlzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfc3RlcCIsIl90aGlzIiwiX2l0ZXJhdG9yIiwib3BlbkJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dCIsImxhbmd1YWdlTGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU1lbnUiLCJjbG9zZU1lbnUiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsInMiLCJkb25lIiwib25JdGVtQ2xpY2siLCJiaW5kIiwiZXJyIiwiX3N0ZXAyIiwiX3RoaXMyIiwiX2l0ZXJhdG9yMiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic3VibWl0IiwiTG9jYWxpemF0aW9uU2VsZWN0IiwiX3N1cGVyMiIsInNlbGVjdExhbmciLCJvblNlbGVjdENoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSJdLCJtYXBwaW5ncyI6InFoSkFBQSxD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TUFBQTBCLEVBQUFHLGNBQUE3QixNQUNBNEIsR0FBQUEsRUFBQUcsT0FBQSxDQUNBLENBQUEsRUFBQSxFQUFBQyxDQUFBLEVBckJBLEVBeUJBTSxlQUFBQyxPQUFBLG9CQUFBakQsQ0FBQSxFQUNBZ0QsZUFBQUMsT0FBQSxzQkFBQVAsQ0FBQSxDQ0dBLEVBQUUsR0FBRyxFQUFFLEdEaEVQLENBQUEsRUFBQSIsImZpbGUiOiJjb21wb25lbnQtbG9jYWxpemF0aW9uLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY2xhc3MgTG9jYWxpemF0aW9uRm9ybSBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMub3BlbkJ1dHRvbiA9IHRoaXMucXVlcnlTZWxlY3RvcignLmpzLWxvY2FsaXphdGlvbl9fYnV0dG9uJylcclxuICAgIHRoaXMuaW5wdXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5qcy1sb2NhbGl6YXRpb25fX2lucHV0JylcclxuICAgIHRoaXMubGFuZ3VhZ2VMaW5rcyA9IHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLmpzLWxvY2FsaXphdGlvbl9fbGluaycpXHJcblxyXG4gICAgLy8gdGhpcy5zZWxlY3RMYW5nID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuanMtbG9jYWxpemF0aW9uX19zZWxlY3QnKVxyXG5cclxuICAgIHRoaXMub3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlTWVudSgpKVxyXG4gICAgdGhpcy5vcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4gdGhpcy5jbG9zZU1lbnUoKSk7XHJcbiAgICBmb3IgKGNvbnN0IGxhbmd1YWdlIG9mIHRoaXMubGFuZ3VhZ2VMaW5rcykge1xyXG4gICAgICBsYW5ndWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25JdGVtQ2xpY2suYmluZCh0aGlzKSlcclxuICAgIH1cclxuICAgIC8vIHRoaXMuc2VsZWN0TGFuZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uU2VsZWN0Q2hhbmdlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLm9wZW5CdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZU1lbnUoKSlcclxuICAgIHRoaXMub3BlbkJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHRoaXMuY2xvc2VNZW51KCkpO1xyXG4gICAgZm9yIChjb25zdCBsYW5ndWFnZSBvZiB0aGlzLmxhbmd1YWdlTGlua3MpIHtcclxuICAgICAgbGFuZ3VhZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLnNlbGVjdExhbmcucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vblNlbGVjdENoYW5nZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZU1lbnUoKSB7XHJcbiAgICB0aGlzLm9wZW5CdXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2MtbG9jYWxpemF0aW9uX19saXN0LS1hY3RpdmUnKTtcclxuICB9XHJcblxyXG4gIGNsb3NlTWVudSgpIHtcclxuICAgIHRoaXMub3BlbkJ1dHRvbi5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnYy1sb2NhbGl6YXRpb25fX2xpc3QtLWFjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgb25JdGVtQ2xpY2soZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBmb3JtID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnZhbHVlO1xyXG4gICAgaWYgKGZvcm0pIGZvcm0uc3VibWl0KCk7XHJcbiAgfVxyXG5cclxuICAvLyBvblNlbGVjdENoYW5nZShldmVudCkge1xyXG4gIC8vICAgdGhpcy5pbnB1dC52YWx1ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XHJcbiAgLy8gICBjb25zdCBmb3JtID0gdGhpcy5jbG9zZXN0KCdmb3JtJyk7XHJcbiAgLy8gICBpZiAoZm9ybSkgZm9ybS5zdWJtaXQoKTtcclxuICAvLyB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBMb2NhbGl6YXRpb25TZWxlY3QgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuanMtbG9jYWxpemF0aW9uX19pbnB1dCcpXHJcbiAgICB0aGlzLnNlbGVjdExhbmcgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5qcy1sb2NhbGl6YXRpb25fX3NlbGVjdCcpXHJcblxyXG4gICAgdGhpcy5zZWxlY3RMYW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25TZWxlY3RDaGFuZ2UuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHRoaXMuc2VsZWN0TGFuZy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uU2VsZWN0Q2hhbmdlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuICBcclxuICBvblNlbGVjdENoYW5nZShldmVudCkge1xyXG4gICAgY29uc3QgZm9ybSA9IHRoaXMucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgY29uc29sZS5sb2coZm9ybSlcclxuICAgIHRoaXMuaW5wdXQudmFsdWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKGZvcm0pIGZvcm0uc3VibWl0KCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsb2NhbGl6YXRpb24tZm9ybScsIExvY2FsaXphdGlvbkZvcm0pO1xyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2xvY2FsaXphdGlvbi1zZWxlY3QnLCBMb2NhbGl6YXRpb25TZWxlY3QpO1xyXG4iLCIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmNsYXNzIExvY2FsaXphdGlvbkZvcm0gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLm9wZW5CdXR0b24gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5qcy1sb2NhbGl6YXRpb25fX2J1dHRvbicpXHJcbiAgICB0aGlzLmlucHV0ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuanMtbG9jYWxpemF0aW9uX19pbnB1dCcpXHJcbiAgICB0aGlzLmxhbmd1YWdlTGlua3MgPSB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1sb2NhbGl6YXRpb25fX2xpbmsnKVxyXG5cclxuICAgIC8vIHRoaXMuc2VsZWN0TGFuZyA9IHRoaXMucXVlcnlTZWxlY3RvcignLmpzLWxvY2FsaXphdGlvbl9fc2VsZWN0JylcclxuXHJcbiAgICB0aGlzLm9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZU1lbnUoKSlcclxuICAgIHRoaXMub3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHRoaXMuY2xvc2VNZW51KCkpO1xyXG4gICAgZm9yIChjb25zdCBsYW5ndWFnZSBvZiB0aGlzLmxhbmd1YWdlTGlua3MpIHtcclxuICAgICAgbGFuZ3VhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uSXRlbUNsaWNrLmJpbmQodGhpcykpXHJcbiAgICB9XHJcbiAgICAvLyB0aGlzLnNlbGVjdExhbmcuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vblNlbGVjdENoYW5nZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5vcGVuQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy50b2dnbGVNZW51KCkpXHJcbiAgICB0aGlzLm9wZW5CdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB0aGlzLmNsb3NlTWVudSgpKTtcclxuICAgIGZvciAoY29uc3QgbGFuZ3VhZ2Ugb2YgdGhpcy5sYW5ndWFnZUxpbmtzKSB7XHJcbiAgICAgIGxhbmd1YWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkl0ZW1DbGljay5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gICAgLy8gdGhpcy5zZWxlY3RMYW5nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMub25TZWxlY3RDaGFuZ2UuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVNZW51KCkge1xyXG4gICAgdGhpcy5vcGVuQnV0dG9uLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdjLWxvY2FsaXphdGlvbl9fbGlzdC0tYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICBjbG9zZU1lbnUoKSB7XHJcbiAgICB0aGlzLm9wZW5CdXR0b24ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2MtbG9jYWxpemF0aW9uX19saXN0LS1hY3RpdmUnKTtcclxuICB9XHJcblxyXG4gIG9uSXRlbUNsaWNrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybSA9IHRoaXMucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgdGhpcy5pbnB1dC52YWx1ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC52YWx1ZTtcclxuICAgIGlmIChmb3JtKSBmb3JtLnN1Ym1pdCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gb25TZWxlY3RDaGFuZ2UoZXZlbnQpIHtcclxuICAvLyAgIHRoaXMuaW5wdXQudmFsdWUgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gIC8vICAgY29uc3QgZm9ybSA9IHRoaXMuY2xvc2VzdCgnZm9ybScpO1xyXG4gIC8vICAgaWYgKGZvcm0pIGZvcm0uc3VibWl0KCk7XHJcbiAgLy8gfVxyXG5cclxufVxyXG5cclxuY2xhc3MgTG9jYWxpemF0aW9uU2VsZWN0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5pbnB1dCA9IHRoaXMucXVlcnlTZWxlY3RvcignLmpzLWxvY2FsaXphdGlvbl9faW5wdXQnKVxyXG4gICAgdGhpcy5zZWxlY3RMYW5nID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuanMtbG9jYWxpemF0aW9uX19zZWxlY3QnKVxyXG5cclxuICAgIHRoaXMuc2VsZWN0TGFuZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uU2VsZWN0Q2hhbmdlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLnNlbGVjdExhbmcucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vblNlbGVjdENoYW5nZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcbiAgXHJcbiAgb25TZWxlY3RDaGFuZ2UoZXZlbnQpIHtcclxuICAgIGNvbnN0IGZvcm0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuICAgIGNvbnNvbGUubG9nKGZvcm0pXHJcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgIGlmIChmb3JtKSBmb3JtLnN1Ym1pdCgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbG9jYWxpemF0aW9uLWZvcm0nLCBMb2NhbGl6YXRpb25Gb3JtKTtcclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsb2NhbGl6YXRpb24tc2VsZWN0JywgTG9jYWxpemF0aW9uU2VsZWN0KTtcclxuXG59LHt9XX0se30sWzFdKVxuXG4iXX0=
