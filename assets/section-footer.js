"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _createForOfIteratorHelper(t,e){var r,n,o,i,u="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(u)return n=!(r=!0),{s:function(){u=u.call(t)},n:function(){var t=u.next();return r=t.done,t},e:function(t){n=!0,o=t},f:function(){try{r||null==u.return||u.return()}finally{if(n)throw o}}};if(Array.isArray(t)||(u=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length)return u&&(t=u),i=0,{s:e=function(){},n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var r;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(r="Object"===(r=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(r){var n=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(r);return _possibleConstructorReturn(this,n?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var r="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);e=new(Function.bind.apply(t,n));return r&&_setPrototypeOf(e,r.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _defineProperty(t,e,r){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);r=r.call(t,e||"default");if("object"!==_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}!function n(o,i,u){function c(e,t){if(!i[e]){if(!o[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(a)return a(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}r=i[e]={exports:{}},o[e][0].call(r.exports,function(t){return c(o[e][1][t]||t)},r,r.exports,n,o,i,u)}return i[e].exports}for(var a="function"==typeof require&&require,t=0;t<u.length;t++)c(u[t]);return c}({1:[function(t,e,r){var n=function(){_inherits(r,_wrapNativeSuper(HTMLElement));var e=_createSuper(r);function r(){var t;return _classCallCheck(this,r),_defineProperty(_assertThisInitialized(t=e.call(this)),"activeMenu",null),t}return _createClass(r,[{key:"connectedCallback",value:function(){var t,e=this,r=(this.openButtons=this.querySelectorAll(".js-footer-menu__button"),_createForOfIteratorHelper(this.openButtons));try{for(r.s();!(t=r.n()).done;)t.value.addEventListener("click",function(t){return e.toggleMenu(t)})}catch(t){r.e(t)}finally{r.f()}}},{key:"disconnectedCallback",value:function(){var t,e=this,r=_createForOfIteratorHelper(this.openButtons);try{for(r.s();!(t=r.n()).done;)t.value.removeEventListener("click",function(t){return e.toggleMenu(t)})}catch(t){r.e(t)}finally{r.f()}}},{key:"toggleMenu",value:function(t){null!==this.activeMenu&&this.activeMenu!==t.currentTarget&&(this.activeMenu.nextElementSibling.classList.remove("footer-menu__accordion-content--active"),this.activeMenu.firstElementChild.classList.remove("footer-menu__icon--active")),this.activeMenu=t.currentTarget,this.activeMenu.nextElementSibling.classList.toggle("footer-menu__accordion-content--active"),this.activeMenu.firstElementChild.classList.toggle("footer-menu__icon--active")}}]),r}();customElements.define("footer-accordion",n)},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2VjdGlvbi1mb290ZXIuanMiLCJzZWN0aW9uLWZvb3Rlci5qcyJdLCJuYW1lcyI6WyJyIiwiZSIsIm4iLCJ0IiwibyIsImkiLCJmIiwiYyIsInJlcXVpcmUiLCJ1IiwiYSIsIkVycm9yIiwiY29kZSIsInAiLCJleHBvcnRzIiwiY2FsbCIsImxlbmd0aCIsIjEiLCJtb2R1bGUiLCJGb290ZXJBY2NvcmRpb24iLCJfaW5oZXJpdHMiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiSFRNTEVsZW1lbnQiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJfZGVmaW5lUHJvcGVydHkiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJfc3RlcCIsIl90aGlzMiIsIl9pdGVyYXRvciIsIm9wZW5CdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwicyIsImRvbmUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0b2dnbGVNZW51IiwiZXJyIiwiX3N0ZXAyIiwiX3RoaXMzIiwiX2l0ZXJhdG9yMiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhY3RpdmVNZW51IiwiY3VycmVudFRhcmdldCIsIm5leHRFbGVtZW50U2libGluZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImZpcnN0RWxlbWVudENoaWxkIiwidG9nZ2xlIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiXSwibWFwcGluZ3MiOiI2cUpBQUEsQ0FBQSxTQUFBQSxFQUFBQyxFQUFBQyxFQUFBQyxHQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEdBQUEsR0FBQSxDQUFBSixFQUFBRyxHQUFBLENBQUEsR0FBQSxDQUFBSixFQUFBSSxHQUFBLENBQUEsSUFBQUUsRUFBQSxZQUFBLE9BQUFDLFNB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Ijoic2VjdGlvbi1mb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY2xhc3MgRm9vdGVyQWNjb3JkaW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGFjdGl2ZU1lbnUgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5vcGVuQnV0dG9ucyA9IHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLmpzLWZvb3Rlci1tZW51X19idXR0b24nKVxyXG5cclxuICAgIGZvciAoY29uc3Qgb3BlbkJ1dHRvbiBvZiB0aGlzLm9wZW5CdXR0b25zKSB7XHJcbiAgICAgIG9wZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHRoaXMudG9nZ2xlTWVudShldmVudCkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIGZvciAoY29uc3Qgb3BlbkJ1dHRvbiBvZiB0aGlzLm9wZW5CdXR0b25zKSB7XHJcbiAgICAgIG9wZW5CdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHRoaXMudG9nZ2xlTWVudShldmVudCkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVNZW51KGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmVNZW51ICE9PSBudWxsICYmIHRoaXMuYWN0aXZlTWVudSAhPT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xyXG4gICAgICB0aGlzLmFjdGl2ZU1lbnUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3Rlci1tZW51X19hY2NvcmRpb24tY29udGVudC0tYWN0aXZlJylcclxuICAgICAgdGhpcy5hY3RpdmVNZW51LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3Rlci1tZW51X19pY29uLS1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFjdGl2ZU1lbnUgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG5cclxuICAgIHRoaXMuYWN0aXZlTWVudS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnZm9vdGVyLW1lbnVfX2FjY29yZGlvbi1jb250ZW50LS1hY3RpdmUnKTtcclxuICAgIHRoaXMuYWN0aXZlTWVudS5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QudG9nZ2xlKCdmb290ZXItbWVudV9faWNvbi0tYWN0aXZlJyk7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Zvb3Rlci1hY2NvcmRpb24nLCBGb290ZXJBY2NvcmRpb24pIiwiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5jbGFzcyBGb290ZXJBY2NvcmRpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgYWN0aXZlTWVudSA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLm9wZW5CdXR0b25zID0gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZm9vdGVyLW1lbnVfX2J1dHRvbicpXHJcblxyXG4gICAgZm9yIChjb25zdCBvcGVuQnV0dG9uIG9mIHRoaXMub3BlbkJ1dHRvbnMpIHtcclxuICAgICAgb3BlbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gdGhpcy50b2dnbGVNZW51KGV2ZW50KSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgZm9yIChjb25zdCBvcGVuQnV0dG9uIG9mIHRoaXMub3BlbkJ1dHRvbnMpIHtcclxuICAgICAgb3BlbkJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4gdGhpcy50b2dnbGVNZW51KGV2ZW50KSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZU1lbnUoZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmFjdGl2ZU1lbnUgIT09IG51bGwgJiYgdGhpcy5hY3RpdmVNZW51ICE9PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlTWVudS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyLW1lbnVfX2FjY29yZGlvbi1jb250ZW50LS1hY3RpdmUnKVxyXG4gICAgICB0aGlzLmFjdGl2ZU1lbnUuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyLW1lbnVfX2ljb24tLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWN0aXZlTWVudSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgdGhpcy5hY3RpdmVNZW51Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCdmb290ZXItbWVudV9fYWNjb3JkaW9uLWNvbnRlbnQtLWFjdGl2ZScpO1xyXG4gICAgdGhpcy5hY3RpdmVNZW51LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC50b2dnbGUoJ2Zvb3Rlci1tZW51X19pY29uLS1hY3RpdmUnKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZm9vdGVyLWFjY29yZGlvbicsIEZvb3RlckFjY29yZGlvbilcbn0se31dfSx7fSxbMV0pXG5cbiJdfQ==
