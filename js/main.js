/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_include.js":
/*!****************************!*\
  !*** ./src/js/_include.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/_burger */ "./src/js/templates/_burger.js");
/* harmony import */ var _utils_header_height__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/_header-height */ "./src/js/utils/_header-height.js");
/* harmony import */ var _utils_header_height__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_utils_header_height__WEBPACK_IMPORTED_MODULE_1__);


(0,_templates_burger__WEBPACK_IMPORTED_MODULE_0__.burger)();

/***/ }),

/***/ "./src/js/_project.js":
/*!****************************!*\
  !*** ./src/js/_project.js ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./src/js/templates/_burger.js":
/*!*************************************!*\
  !*** ./src/js/templates/_burger.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burger: () => (/* binding */ burger)
/* harmony export */ });
/* harmony import */ var _utils_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/_disable-scroll */ "./src/js/utils/_disable-scroll.js");
/* harmony import */ var _utils_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/_enable-scroll */ "./src/js/utils/_enable-scroll.js");


var burger = function burger() {
  var burgerButton = document.querySelector('[data-burger-button]');
  var menu = document.querySelector('[data-menu]');
  var menuLinks = document.querySelectorAll('[data-menu-link]');
  var checkClass = function checkClass() {
    if (burgerButton.classList.contains('burger-button--active')) {
      burgerButton.setAttribute('aria-expanded', 'true');
      burgerButton.setAttribute('aria-label', 'закрыть меню');
      (0,_utils_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burgerButton.setAttribute('aria-expanded', 'false');
      burgerButton.setAttribute('aria-label', 'открыть меню');
      (0,_utils_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  };
  burgerButton.addEventListener('click', function () {
    burgerButton.classList.toggle('burger-button--active');
    menu.classList.toggle('burger-menu--active');
    checkClass();
  });
  menuLinks.forEach(function (el) {
    el.addEventListener('click', function () {
      burgerButton.classList.remove('burgerbutton-button--active');
      menu.classList.remove('burgerbutton-menu--active');
      (0,_utils_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
  });
};

/***/ }),

/***/ "./src/js/utils/_disable-scroll.js":
/*!*****************************************!*\
  !*** ./src/js/utils/_disable-scroll.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disableScroll: () => (/* binding */ disableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

var disableScroll = function disableScroll() {
  var pagePosition = window.scrollY;
  var paddingOffset = "".concat(window.innerWidth - _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth, "px");
  var fixBlocks = document.querySelectorAll('.fixed-block');
  if (fixBlocks) {
    fixBlocks.forEach(function (el) {
      var fixBlock = el;
      fixBlock.style.paddingRight = paddingOffset;
    });
  }
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('disable-scroll');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = "-".concat(pagePosition, "px");
};

/***/ }),

/***/ "./src/js/utils/_enable-scroll.js":
/*!****************************************!*\
  !*** ./src/js/utils/_enable-scroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableScroll: () => (/* binding */ enableScroll)
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");

var enableScroll = function enableScroll() {
  var fixBlocks = document.querySelectorAll('.fixed-block');
  if (fixBlocks) {
    fixBlocks.forEach(function (el) {
      var fixBlock = el;
      fixBlock.style.paddingRight = '0';
    });
  }
  var pagePosition = parseInt(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('disable-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
};

/***/ }),

/***/ "./src/js/utils/_header-height.js":
/*!****************************************!*\
  !*** ./src/js/utils/_header-height.js ***!
  \****************************************/
/***/ (() => {

var getHeaderHeight = function getHeaderHeight() {
  if (document.querySelector('.header')) {
    var headerHeight = document.querySelector('.header').offsetHeight;
    document.querySelector(':root').style.setProperty('--header-height', "".concat(headerHeight, "px"));
  }
};
getHeaderHeight();
window.addEventListener('resize', function () {
  if (window.innerWidth < 992) {
    getHeaderHeight();
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _include__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_include */ "./src/js/_include.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_project */ "./src/js/_project.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_project__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=main.js.map