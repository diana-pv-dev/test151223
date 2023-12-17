"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"===_typeof(t)?t:String(t)}function _toPrimitive(t,e){if("object"!==_typeof(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0===n)return("string"===e?String:Number)(t);n=n.call(t,e||"default");if("object"!==_typeof(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _createSuper(n){var r=_isNativeReflectConstruct();return function(){var t,e=_getPrototypeOf(n);return _possibleConstructorReturn(this,r?(t=_getPrototypeOf(this).constructor,Reflect.construct(e,arguments,t)):e.apply(this,arguments))}}function _possibleConstructorReturn(t,e){if(e&&("object"===_typeof(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _wrapNativeSuper(t){var n="function"==typeof Map?new Map:void 0;return(_wrapNativeSuper=function(t){if(null===t||!_isNativeFunction(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,e)}function e(){return _construct(t,arguments,_getPrototypeOf(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),_setPrototypeOf(e,t)})(t)}function _construct(t,e,n){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,n){var r=[null];r.push.apply(r,e);e=new(Function.bind.apply(t,r));return n&&_setPrototypeOf(e,n.prototype),e}).apply(null,arguments)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _isNativeFunction(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}!function r(o,i,u){function c(e,t){if(!i[e]){if(!o[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(s)return s(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}n=i[e]={exports:{}},o[e][0].call(n.exports,function(t){return c(o[e][1][t]||t)},n,n.exports,r,o,i,u)}return i[e].exports}for(var s="function"==typeof require&&require,t=0;t<u.length;t++)c(u[t]);return c}({1:[function(t,e,n){var r=function(){_inherits(e,_wrapNativeSuper(HTMLElement));var t=_createSuper(e);function e(){return _classCallCheck(this,e),t.call(this)}return _createClass(e,[{key:"connectedCallback",value:function(){var t=this;this.menu=this.querySelector(".js-header__menu"),this.openBtn=this.querySelector(".js-header__menu-button--open"),this.closeBtn=this.querySelector(".js-header__menu-button--close"),this.menuStatus="closed",this.openBtn.addEventListener("click",function(){return t.toggleMenu()}),this.closeBtn.addEventListener("click",function(){return t.toggleMenu()})}},{key:"disconnectedCallback",value:function(){this.openBtn.removeEventListener("click",this.toggleMenu),this.closeBtn.removeEventListener("click",this.toggleMenu)}},{key:"toggleMenu",value:function(){"closed"==this.menuStatus?(this.menuOpen(),console.log("open")):(this.menuClose(),console.log("close"))}},{key:"menuOpen",value:function(){this.menu.style.left="0",this.menuStatus="open"}},{key:"menuClose",value:function(){this.menu.style.left="-100%",this.menuStatus="closed"}}]),e}();customElements.define("menu-navigation",r)},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWVudS1uYXZpZ2F0aW9uLmpzIiwibWVudS1uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbInIiLCJlIiwibiIsInQiLCJvIiwiaSIsImYiLCJjIiwicmVxdWlyZSIsInUiLCJhIiwiRXJyb3IiLCJjb2RlIiwicCIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwiMSIsIm1vZHVsZSIsIk1lbnVOYXZpZ2F0aW9uIiwiX2luaGVyaXRzIiwiX3dyYXBOYXRpdmVTdXBlciIsIkhUTUxFbGVtZW50IiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJtZW51IiwicXVlcnlTZWxlY3RvciIsIm9wZW5CdG4iLCJjbG9zZUJ0biIsIm1lbnVTdGF0dXMiLCJhZGRFdmVudExpc3RlbmVyIiwidG9nZ2xlTWVudSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtZW51T3BlbiIsImNvbnNvbGUiLCJsb2ciLCJtZW51Q2xvc2UiLCJzdHlsZSIsImxlZnQiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSJdLCJtYXBwaW5ncyI6Ijg1R0FBQSxDQUFBLFNBQUFBLEVBQUFDLEVBQUFDLEVBQUFDLEdBQUEsU0FBQUMsRUFBQUMsRUFBQUMsR0FBQSxHQUFBLENBQUFKLEVBQUFHLEdBQUEsQ0FBQSxHQUFBLENBQUFKLEVBQUFJLEdBQUEsQ0FBQSxJQUFBRSxFQUFBLFlBQUEsT0FBQUMsU0FBQUEsUUFBQSxHQUFBLENBQUFGLEdBQUFDLEVBQUEsT0FBQUEsRUFBQUYsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBSSxFQUFBLE9BQUFBLEVBQUFKLEVBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQUssRUFBQSxJQUFBQyxNQUFBLHVCQUFBTixFQUFBLEdBQUEsR0FBQU8sS0FBQSxtQkFBQUYsQ0FBQSxDQUFBRyxFQUFBWCxFQUFBRyxHQUFBLENBQUFTLFFBQUEsRUFBQSxFQUFBYixFQUFBSSxHQUFBLEdBQUFVLEtBQUFGLEVBQUFDLFFBQUEsU0FBQWQsR0FBQSxPQUFBSSxFQUFBSCxFQUFBSSxHQUFBLEdBQUFMLElBQUFBLENBQUEsQ0FBQSxFQUFBYSxFQUFBQSxFQUFBQyxRQUFBZCxFQUFBQyxFQUFBQyxFQUFBQyxDQUFBLENBQUEsQ0FBQSxPQUFBRCxFQUFBRyxHQUFBUyxPQUFBLENBQUEsSUFBQSxJQUFBTCxFQUFBLFlBQUEsT0FBQUQsU0FBQUEsUUFBQUgsRUFBQSxFQUFBQSxFQUFBRixFQUFBYSxPQUFBWCxDQUFBLEdBQUFELEVBQUFELEVBQUFFLEVBQUEsRUFBQSxPQUFBRCxDQUFBLEVBQUEsQ0FBQWEsRUFBQSxDQUFBLFNBQUFULEVBQUFVLEVBQUFKLEdBQUEsSUNBQUssRUFBQSxXQUFBQyxVQUFBRCxFQXVDQUUsaUJBdkNBQyxXQUFBLENBQUEsRUFBQSxJQUFBQyxFQUFBQyxhQUFBTCxDQUFBLEVBQ0EsU0FBQUEsSUFBQSxPQUFBTSxnQkFBQUMsS0FBQVAsQ0FBQSxFQUFBSSxFQUFBUixLQUFBVyxJQUFBLENBRUEsQ0FvQ0EsT0FwQ0FDLGFBQUFSLEVBQUEsQ0FBQSxDQUFBUyxJQUFBLG9CQUFBQyxNQUVBLFdBQUEsSUFBQUMsRUFBQUosS0FDQUEsS0FBQUssS0FBQUwsS0FBQU0sY0FBQSxrQkFBQSxFQUNBTixLQUFBTyxRQUFBUCxLQUFBTSxjQUFBLCtCQUFBLEVBQ0FOLEtBQUFRLFNBQUFSLEtBQUFNLGNBQUEsZ0NBQUEsRUFDQU4sS0FBQVMsV0FBQSxTQUNBVCxLQUFBTyxRQUFBRyxpQkFBQSxRQUFBLFdBQUEsT0FBQU4sRUFBQU8sV0FBQSxDQUFBLENBQUEsRUFDQVgsS0FBQVEsU0FBQUUsaUJBQUEsUUFBQSxXQUFBLE9BQUFOLEVBQUFPLFdBQUEsQ0FBQSxDQUFBLENBRUEsQ0FBQSxFQUFBLENBQUFULElBQUEsdUJBQUFDLE1BRUEsV0FDQUgsS0FBQU8sUUFBQUssb0JBQUEsUUFBQVosS0FBQVcsVUFBQSxFQUNBWCxLQUFBUSxTQUFBSSxvQkFBQSxRQUFBWixLQUFBVyxVQUFBLENBQ0EsQ0FBQSxFQUFBLENBQUFULElBQUEsYUFBQUMsTUFFQSxXQUNBLFVBQUFILEtBQUFTLFlBQ0FULEtBQUFhLFNBQUEsRUFDQUMsUUFBQUMsSUFBQSxNQUFBLElBRUFmLEtBQUFnQixVQUFBLEVBQ0FGLFFBQUFDLElBQUEsT0FBQSxFQUVBLENBQUEsRUFBQSxDQUFBYixJQUFBLFdBQUFDLE1BRUEsV0FDQUgsS0FBQUssS0FBQVksTUFBQUMsS0FBQSxJQUNBbEIsS0FBQVMsV0FBQSxNQUNBLENBQUEsRUFBQSxDQUFBUCxJQUFBLFlBQUFDLE1BRUEsV0FDQUgsS0FBQUssS0FBQVksTUFBQUMsS0FBQSxRQUNBbEIsS0FBQVMsV0FBQSxRQUVBLENBQUEsRUFBQSxFQUFBaEIsQ0FBQSxFQXZDQSxFQTJDQTBCLGVBQUFDLE9BQUEsa0JBQUEzQixDQUFBLENDRUEsRUFBRSxHRjdDRixFQUFBLEdDQUFBLENBQUFBLEVBQUFBIiwiZmlsZSI6Im1lbnUtbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjbGFzcyBNZW51TmF2aWdhdGlvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5tZW51ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyX19tZW51JylcclxuICAgIHRoaXMub3BlbkJ0biA9IHRoaXMucXVlcnlTZWxlY3RvcignLmpzLWhlYWRlcl9fbWVudS1idXR0b24tLW9wZW4nKVxyXG4gICAgdGhpcy5jbG9zZUJ0biA9IHRoaXMucXVlcnlTZWxlY3RvcignLmpzLWhlYWRlcl9fbWVudS1idXR0b24tLWNsb3NlJylcclxuICAgIHRoaXMubWVudVN0YXR1cyA9ICdjbG9zZWQnXHJcbiAgICB0aGlzLm9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZU1lbnUoKSlcclxuICAgIHRoaXMuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZU1lbnUoKSlcclxuICBcclxuICB9XHJcblxyXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgdGhpcy5vcGVuQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVNZW51KVxyXG4gICAgdGhpcy5jbG9zZUJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlTWVudSlcclxuICB9XHJcblxyXG4gIHRvZ2dsZU1lbnUoKSB7XHJcbiAgICBpZiAodGhpcy5tZW51U3RhdHVzID09ICdjbG9zZWQnKSB7XHJcbiAgICAgIHRoaXMubWVudU9wZW4oKVxyXG4gICAgICBjb25zb2xlLmxvZygnb3BlbicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1lbnVDbG9zZSgpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdjbG9zZScpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtZW51T3BlbigpIHtcclxuICAgIHRoaXMubWVudS5zdHlsZS5sZWZ0ID0gJzAnXHJcbiAgICB0aGlzLm1lbnVTdGF0dXMgPSAnb3BlbidcclxuICB9XHJcblxyXG4gIG1lbnVDbG9zZSgpIHtcclxuICAgIHRoaXMubWVudS5zdHlsZS5sZWZ0ID0gJy0xMDAlJ1xyXG4gICAgdGhpcy5tZW51U3RhdHVzID0gJ2Nsb3NlZCdcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtZW51LW5hdmlnYXRpb24nLCBNZW51TmF2aWdhdGlvbikiLCIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbmNsYXNzIE1lbnVOYXZpZ2F0aW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLm1lbnUgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5qcy1oZWFkZXJfX21lbnUnKVxyXG4gICAgdGhpcy5vcGVuQnRuID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyX19tZW51LWJ1dHRvbi0tb3BlbicpXHJcbiAgICB0aGlzLmNsb3NlQnRuID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuanMtaGVhZGVyX19tZW51LWJ1dHRvbi0tY2xvc2UnKVxyXG4gICAgdGhpcy5tZW51U3RhdHVzID0gJ2Nsb3NlZCdcclxuICAgIHRoaXMub3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlTWVudSgpKVxyXG4gICAgdGhpcy5jbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlTWVudSgpKVxyXG4gIFxyXG4gIH1cclxuXHJcbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLm9wZW5CdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZU1lbnUpXHJcbiAgICB0aGlzLmNsb3NlQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVNZW51KVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTWVudSgpIHtcclxuICAgIGlmICh0aGlzLm1lbnVTdGF0dXMgPT0gJ2Nsb3NlZCcpIHtcclxuICAgICAgdGhpcy5tZW51T3BlbigpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdvcGVuJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWVudUNsb3NlKClcclxuICAgICAgY29uc29sZS5sb2coJ2Nsb3NlJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1lbnVPcGVuKCkge1xyXG4gICAgdGhpcy5tZW51LnN0eWxlLmxlZnQgPSAnMCdcclxuICAgIHRoaXMubWVudVN0YXR1cyA9ICdvcGVuJ1xyXG4gIH1cclxuXHJcbiAgbWVudUNsb3NlKCkge1xyXG4gICAgdGhpcy5tZW51LnN0eWxlLmxlZnQgPSAnLTEwMCUnXHJcbiAgICB0aGlzLm1lbnVTdGF0dXMgPSAnY2xvc2VkJ1xyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21lbnUtbmF2aWdhdGlvbicsIE1lbnVOYXZpZ2F0aW9uKVxufSx7fV19LHt9LFsxXSlcblxuIl19
