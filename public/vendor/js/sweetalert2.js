/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 164);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domUtils__ = __webpack_require__(46);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__domUtils__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__domUtils__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__domUtils__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__domUtils__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_0__domUtils__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_0__domUtils__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_0__domUtils__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_0__domUtils__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_0__domUtils__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_0__domUtils__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_0__domUtils__["k"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init__ = __webpack_require__(172);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_1__init__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getters__ = __webpack_require__(85);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["j"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["k"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["l"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["m"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["n"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["p"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["q"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_2__getters__["r"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parseHtmlToContainer__ = __webpack_require__(173);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_3__parseHtmlToContainer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animationEndEvent__ = __webpack_require__(174);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__animationEndEvent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__measureScrollbar__ = __webpack_require__(175);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_5__measureScrollbar__["a"]; });








/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const swalPrefix = 'swal2-'
/* unused harmony export swalPrefix */


const prefix = (items) => {
  const result = {}
  for (const i in items) {
    result[items[i]] = swalPrefix + items[i]
  }
  return result
}
/* unused harmony export prefix */


const swalClasses = prefix([
  'container',
  'shown',
  'height-auto',
  'iosfix',
  'popup',
  'modal',
  'no-backdrop',
  'toast',
  'toast-shown',
  'fade',
  'show',
  'hide',
  'noanimation',
  'close',
  'title',
  'header',
  'content',
  'actions',
  'confirm',
  'cancel',
  'footer',
  'icon',
  'icon-text',
  'image',
  'input',
  'has-input',
  'file',
  'range',
  'select',
  'radio',
  'checkbox',
  'textarea',
  'inputerror',
  'validationerror',
  'progresssteps',
  'activeprogressstep',
  'progresscircle',
  'progressline',
  'loading',
  'styled',
  'top',
  'top-start',
  'top-end',
  'top-left',
  'top-right',
  'center',
  'center-start',
  'center-end',
  'center-left',
  'center-right',
  'bottom',
  'bottom-start',
  'bottom-end',
  'bottom-left',
  'bottom-right',
  'grow-row',
  'grow-column',
  'grow-fullscreen'
])
/* harmony export (immutable) */ __webpack_exports__["b"] = swalClasses;


const iconTypes = prefix([
  'success',
  'warning',
  'info',
  'question',
  'error'
])
/* harmony export (immutable) */ __webpack_exports__["a"] = iconTypes;



/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const consolePrefix = 'SweetAlert2:'
/* unused harmony export consolePrefix */


/**
 * Filter the unique values into a new array
 * @param arr
 */
const uniqueArray = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i])
    }
  }
  return result
}
/* harmony export (immutable) */ __webpack_exports__["e"] = uniqueArray;


/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */
const formatInputOptions = (inputOptions) => {
  const result = []
  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach((value, key) => {
      result.push([key, value])
    })
  } else {
    Object.keys(inputOptions).forEach(key => {
      result.push([key, inputOptions[key]])
    })
  }
  return result
}
/* harmony export (immutable) */ __webpack_exports__["c"] = formatInputOptions;


/**
 * Standardise console warnings
 * @param message
 */
const warn = (message) => {
  console.warn(`${consolePrefix} ${message}`)
}
/* harmony export (immutable) */ __webpack_exports__["f"] = warn;


/**
 * Standardise console errors
 * @param message
 */
const error = (message) => {
  console.error(`${consolePrefix} ${message}`)
}
/* harmony export (immutable) */ __webpack_exports__["b"] = error;


/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */
const previousWarnOnceMessages = []

/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */
const warnOnce = (message) => {
  if (!previousWarnOnceMessages.includes(message)) {
    previousWarnOnceMessages.push(message)
    warn(message)
  }
}
/* harmony export (immutable) */ __webpack_exports__["g"] = warnOnce;


/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */
const callIfFunction = (arg) => typeof arg === 'function' ? arg() : arg
/* harmony export (immutable) */ __webpack_exports__["a"] = callIfFunction;


const isThenable = (arg) => typeof arg === 'object' && typeof arg.then === 'function'
/* harmony export (immutable) */ __webpack_exports__["d"] = isThenable;



/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_WeakMap__ = __webpack_require__(186);
/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */



/* harmony default export */ __webpack_exports__["a"] = ({
  promise: new __WEBPACK_IMPORTED_MODULE_0__utils_WeakMap__["a" /* default */](),
  innerParams: new __WEBPACK_IMPORTED_MODULE_0__utils_WeakMap__["a" /* default */](),
  domCache: new __WEBPACK_IMPORTED_MODULE_0__utils_WeakMap__["a" /* default */]()
});


/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SweetAlert__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enhancers__ = __webpack_require__(88);



const Swal = Object(__WEBPACK_IMPORTED_MODULE_1__enhancers__["b" /* withNoNewKeyword */])(Object(__WEBPACK_IMPORTED_MODULE_1__enhancers__["a" /* withGlobalDefaults */])(__WEBPACK_IMPORTED_MODULE_0__SweetAlert__["a" /* default */]))
Swal.default = Swal

/* harmony default export */ __webpack_exports__["default"] = (Swal);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const globalState = {}

/* harmony default export */ __webpack_exports__["a"] = (globalState);

// Restore previous active (focused) element
const restoreActiveElement = () => {
  const x = window.scrollX
  const y = window.scrollY
  globalState.restoreFocusTimeout = setTimeout(() => {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus()
      globalState.previousActiveElement = null
    }
  }, 100) // issues/900
  if (typeof x !== 'undefined' && typeof y !== 'undefined') { // IE doesn't have scrollX/scrollY support
    window.scrollTo(x, y)
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = restoreActiveElement;



/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes__ = __webpack_require__(6);


// Remember state in cases where opening and handling a modal will fiddle with it.
const states = {
  previousBodyPadding: null
}
/* harmony export (immutable) */ __webpack_exports__["k"] = states;


const hasClass = (elem, className) => {
  if (elem.classList) {
    return elem.classList.contains(className)
  }
  return false
}
/* harmony export (immutable) */ __webpack_exports__["e"] = hasClass;


const focusInput = (input) => {
  input.focus()

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    const val = input.value
    input.value = ''
    input.value = val
  }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = focusInput;


const addOrRemoveClass = (target, classList, add) => {
  if (!target || !classList) {
    return
  }
  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean)
  }
  classList.forEach((className) => {
    if (target.forEach) {
      target.forEach((elem) => {
        add ? elem.classList.add(className) : elem.classList.remove(className)
      })
    } else {
      add ? target.classList.add(className) : target.classList.remove(className)
    }
  })
}

const addClass = (target, classList) => {
  addOrRemoveClass(target, classList, true)
}
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;


const removeClass = (target, classList) => {
  addOrRemoveClass(target, classList, false)
}
/* harmony export (immutable) */ __webpack_exports__["h"] = removeClass;


const getChildByClass = (elem, className) => {
  for (let i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i]
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = getChildByClass;


const show = (elem) => {
  elem.style.opacity = ''
  elem.style.display = (elem.id === __WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].content) ? 'block' : 'flex'
}
/* harmony export (immutable) */ __webpack_exports__["j"] = show;


const hide = (elem) => {
  elem.style.opacity = ''
  elem.style.display = 'none'
}
/* harmony export (immutable) */ __webpack_exports__["f"] = hide;


const empty = (elem) => {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild)
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = empty;


// borrowed from jquery $(elem).is(':visible') implementation
const isVisible = (elem) => elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
/* harmony export (immutable) */ __webpack_exports__["g"] = isVisible;


const removeStyleProperty = (elem, property) => {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property)
  } else {
    elem.style.removeAttribute(property)
  }
}
/* harmony export (immutable) */ __webpack_exports__["i"] = removeStyleProperty;



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(10);


const defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null,
  useRejections: false,
  expectRejections: false
}

const deprecatedParams = [
  'useRejections',
  'expectRejections'
]
/* unused harmony export deprecatedParams */


/**
 * Is valid parameter
 * @param {String} paramName
 */
const isValidParameter = (paramName) => {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams'
}
/* harmony export (immutable) */ __webpack_exports__["c"] = isValidParameter;


/**
 * Is deprecated parameter
 * @param {String} paramName
 */
const isDeprecatedParameter = (paramName) => {
  return deprecatedParams.includes(paramName)
}
/* harmony export (immutable) */ __webpack_exports__["b"] = isDeprecatedParameter;


/**
 * Show relevant warnings for given params
 *
 * @param params
 */
const showWarningsForParams = (params) => {
  for (const param in params) {
    if (!isValidParameter(param)) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["f" /* warn */])(`Unknown parameter "${param}"`)
    }
    if (isDeprecatedParameter(param)) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["g" /* warnOnce */])(`The parameter "${param}" is deprecated and will be removed in the next major release.`)
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = showWarningsForParams;


/* harmony default export */ __webpack_exports__["a"] = (defaultParams);


/***/ }),
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_index__ = __webpack_require__(5);


const fixScrollbar = () => {
  // for queues, do not do this more than once
  if (__WEBPACK_IMPORTED_MODULE_0__dom_index__["G" /* states */].previousBodyPadding !== null) {
    return
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    __WEBPACK_IMPORTED_MODULE_0__dom_index__["G" /* states */].previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'))
    document.body.style.paddingRight = (__WEBPACK_IMPORTED_MODULE_0__dom_index__["G" /* states */].previousBodyPadding + __WEBPACK_IMPORTED_MODULE_0__dom_index__["B" /* measureScrollbar */]()) + 'px'
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = fixScrollbar;


const undoScrollbar = () => {
  if (__WEBPACK_IMPORTED_MODULE_0__dom_index__["G" /* states */].previousBodyPadding !== null) {
    document.body.style.paddingRight = __WEBPACK_IMPORTED_MODULE_0__dom_index__["G" /* states */].previousBodyPadding
    __WEBPACK_IMPORTED_MODULE_0__dom_index__["G" /* states */].previousBodyPadding = null
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = undoScrollbar;



/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(10);



const getContainer = () => document.body.querySelector('.' + __WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].container)
/* harmony export (immutable) */ __webpack_exports__["f"] = getContainer;


const elementByClass = (className) => {
  const container = getContainer()
  return container ? container.querySelector('.' + className) : null
}

const getPopup = () => elementByClass(__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].popup)
/* harmony export (immutable) */ __webpack_exports__["l"] = getPopup;


const getIcons = () => {
  const popup = getPopup()
  return popup.querySelectorAll('.' + __WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].icon)
}
/* harmony export (immutable) */ __webpack_exports__["j"] = getIcons;


const getTitle = () => elementByClass(__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].title)
/* harmony export (immutable) */ __webpack_exports__["n"] = getTitle;


const getContent = () => elementByClass(__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].content)
/* harmony export (immutable) */ __webpack_exports__["g"] = getContent;


const getImage = () => elementByClass(__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].image)
/* harmony export (immutable) */ __webpack_exports__["k"] = getImage;


const getProgressSteps = () => elementByClass(__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].progresssteps)
/* harmony export (immutable) */ __webpack_exports__["m"] = getProgressSteps;


const getValidationError = () => elementByClass(__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].validationerror)
/* harmony export (immutable) */ __webpack_exports__["o"] = getValidationError;


const getConfirmButton = () => elementByClass(__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].confirm)
/* harmony export (immutable) */ __webpack_exports__["e"] = getConfirmButton;


const getCancelButton = () => elementByClass(__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].cancel)
/* harmony export (immutable) */ __webpack_exports__["c"] = getCancelButton;


const getButtonsWrapper = () => {
  Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* warnOnce */])(`swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead`)
  return elementByClass(__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].actions)
}
/* harmony export (immutable) */ __webpack_exports__["b"] = getButtonsWrapper;


const getActions = () => elementByClass(__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].actions)
/* harmony export (immutable) */ __webpack_exports__["a"] = getActions;


const getFooter = () => elementByClass(__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].footer)
/* harmony export (immutable) */ __webpack_exports__["i"] = getFooter;


const getCloseButton = () => elementByClass(__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].close)
/* harmony export (immutable) */ __webpack_exports__["d"] = getCloseButton;


const getFocusableElements = () => {
  const focusableElementsWithTabindex = Array.prototype.slice.call(
    getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')
  )
  // sort according to tabindex
    .sort((a, b) => {
      a = parseInt(a.getAttribute('tabindex'))
      b = parseInt(b.getAttribute('tabindex'))
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      }
      return 0
    })

  // https://github.com/jkup/focusable/blob/master/index.js
  const otherFocusableElements = Array.prototype.slice.call(
    getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')
  )

  return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* uniqueArray */])(focusableElementsWithTabindex.concat(otherFocusableElements))
}
/* harmony export (immutable) */ __webpack_exports__["h"] = getFocusableElements;


const isModal = () => {
  return !document.body.classList.contains(__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */]['toast-shown'])
}
/* harmony export (immutable) */ __webpack_exports__["q"] = isModal;


const isToast = () => {
  return document.body.classList.contains(__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */]['toast-shown'])
}
/* harmony export (immutable) */ __webpack_exports__["r"] = isToast;


const isLoading = () => {
  return getPopup().hasAttribute('data-loading')
}
/* harmony export (immutable) */ __webpack_exports__["p"] = isLoading;



/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Detect Node env
const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined'
/* harmony export (immutable) */ __webpack_exports__["a"] = isNodeEnv;



/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_classes__ = __webpack_require__(6);



// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
const iOSfix = () => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  if (iOS && !__WEBPACK_IMPORTED_MODULE_0__dom_index__["u" /* hasClass */](document.body, __WEBPACK_IMPORTED_MODULE_1__utils_classes__["b" /* swalClasses */].iosfix)) {
    const offset = document.body.scrollTop
    document.body.style.top = (offset * -1) + 'px'
    __WEBPACK_IMPORTED_MODULE_0__dom_index__["a" /* addClass */](document.body, __WEBPACK_IMPORTED_MODULE_1__utils_classes__["b" /* swalClasses */].iosfix)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = iOSfix;


const undoIOSfix = () => {
  if (__WEBPACK_IMPORTED_MODULE_0__dom_index__["u" /* hasClass */](document.body, __WEBPACK_IMPORTED_MODULE_1__utils_classes__["b" /* swalClasses */].iosfix)) {
    const offset = parseInt(document.body.style.top, 10)
    __WEBPACK_IMPORTED_MODULE_0__dom_index__["D" /* removeClass */](document.body, __WEBPACK_IMPORTED_MODULE_1__utils_classes__["b" /* swalClasses */].iosfix)
    document.body.style.top = ''
    document.body.scrollTop = (offset * -1)
  }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = undoIOSfix;



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enhancers_withNoNewKeyword__ = __webpack_require__(179);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__enhancers_withNoNewKeyword__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enhancers_withGlobalDefaults__ = __webpack_require__(180);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__enhancers_withGlobalDefaults__["a"]; });




/***/ }),
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(28);


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_DismissReason__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__package_json__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__package_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__package_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staticMethods__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__instanceMethods__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__privateProps__ = __webpack_require__(19);







let currentInstance

// SweetAlert constructor
function SweetAlert (...args) {
  // Prevent run in Node env
  if (typeof window === 'undefined') {
    return
  }

  // Check for the existence of Promise
  if (typeof Promise === 'undefined') {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["b" /* error */])('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)')
  }

  if (typeof args[0] === 'undefined') {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["b" /* error */])('SweetAlert2 expects at least 1 attribute!')
    return false
  }

  currentInstance = this

  const outerParams = Object.freeze(this.constructor.argsToParams(args))

  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true
    }
  })

  const promise = this._main(this.params)
  __WEBPACK_IMPORTED_MODULE_5__privateProps__["a" /* default */].promise.set(this, promise)
}

// `catch` cannot be the name of a module export, so we define our thenable methods here instead
SweetAlert.prototype.then = function (onFulfilled, onRejected) {
  const promise = __WEBPACK_IMPORTED_MODULE_5__privateProps__["a" /* default */].promise.get(this)
  return promise.then(onFulfilled, onRejected)
}
SweetAlert.prototype.catch = function (onRejected) {
  const promise = __WEBPACK_IMPORTED_MODULE_5__privateProps__["a" /* default */].promise.get(this)
  return promise.catch(onRejected)
}
SweetAlert.prototype.finally = function (onFinally) {
  const promise = __WEBPACK_IMPORTED_MODULE_5__privateProps__["a" /* default */].promise.get(this)
  return promise.finally(onFinally)
}

// Assign instance methods from src/instanceMethods/*.js to prototype
Object.assign(SweetAlert.prototype, __WEBPACK_IMPORTED_MODULE_4__instanceMethods__)

// Assign static methods from src/staticMethods/*.js to constructor
Object.assign(SweetAlert, __WEBPACK_IMPORTED_MODULE_3__staticMethods__)

// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(__WEBPACK_IMPORTED_MODULE_4__instanceMethods__).forEach(key => {
  SweetAlert[key] = function (...args) {
    if (currentInstance) {
      return currentInstance[key](...args)
    }
  }
})

SweetAlert.DismissReason = __WEBPACK_IMPORTED_MODULE_1__utils_DismissReason__["a" /* DismissReason */]

SweetAlert.noop = () => { }

SweetAlert.version = __WEBPACK_IMPORTED_MODULE_2__package_json__["version"]

/* harmony default export */ __webpack_exports__["a"] = (SweetAlert);


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'overlay',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
})
/* harmony export (immutable) */ __webpack_exports__["a"] = DismissReason;



/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = {"_from":"sweetalert2","_id":"sweetalert2@7.24.1","_inBundle":false,"_integrity":"sha512-YAo4QB2KEcvvkD4TbwXDt7Vyofsr+uxse1ZQmK/yeCO/QyDN9KF4jtdvDGcRgJxlGoEqpbz1rCeS8Qhp+bjD9A==","_location":"/sweetalert2","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"sweetalert2","name":"sweetalert2","escapedName":"sweetalert2","rawSpec":"","saveSpec":null,"fetchSpec":"latest"},"_requiredBy":["#DEV:/","#USER"],"_resolved":"https://registry.npmjs.org/sweetalert2/-/sweetalert2-7.24.1.tgz","_shasum":"0f615c4da35ec7e194675838521718b5f6c575ac","_spec":"sweetalert2","_where":"/home/julio/workspace/personal/school-manager","author":{"name":"Limon Monte","email":"limon.monte@gmail.com","url":"https://limonte.github.io"},"bugs":{"url":"https://github.com/sweetalert2/sweetalert2/issues"},"bundleDependencies":false,"contributors":[{"name":"Matthew Francis Brunetti","email":"zenflow87@gmail.com","url":"https://github.com/zenflow"},{"name":"Morgan Touverey-Quilling","email":"mtouverey@alembic-dev.com","url":"https://github.com/toverux"},{"name":"Joseph Schultz","url":"https://github.com/acupajoe"},{"name":"Sam Turrell","email":"sam@samturrell.co.uk","url":"https://github.com/samturrell"},{"name":"Johan Fagerberg","url":"https://github.com/birjolaxew"}],"deprecated":false,"description":"A beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for JavaScript's popup boxes, supported fork of sweetalert","devDependencies":{"babel-core":"^6.23.1","babel-loader":"^7.1.2","babel-plugin-array-includes":"^2.0.3","babel-plugin-external-helpers":"^6.22.0","babel-plugin-transform-object-assign":"^6.22.0","babel-preset-env":"^1.6.1","browser-sync":"^2.23.3","bundlesize":"^0.17.0","detect-browser":"^2.1.0","event-stream":"^3.3.4","execa":"^0.10.0","git-state":"^4.0.0","gulp":"^4.0.0","gulp-autoprefixer":"^5.0.0","gulp-babel-minify":"^0.4.0","gulp-clean-css":"^3.9.0","gulp-concat":"^2.6.1","gulp-css2js":"^1.1.2","gulp-if":"^2.0.2","gulp-load-plugins":"^1.5.0","gulp-rename":"^1.2.2","gulp-rollup":"^2.16.2","gulp-sass":"^4.0.0","gulp-sass-lint":"^1.3.4","gulp-standard":"^8.0.0","gulp-tslint":"^8.1.2","gulp-typescript":"^4.0.2","is-ci":"^1.1.0","jquery":"^3.3.1","karma":"^2.0.0","karma-chrome-launcher":"^2.2.0","karma-firefox-launcher":"^1.1.0","karma-ie-launcher":"^1.0.0","karma-qunit":"^2.0.0","karma-sauce-launcher":"^1.2.0","karma-sourcemap-loader":"^0.3.7","karma-spec-reporter":"^0.0.32","karma-webpack":"^4.0.0-beta.0","merge2":"^1.2.1","mkdirp":"^0.5.1","pify":"^3.0.0","promise-polyfill":"^7.1.0","qunit":"^2.5.1","rimraf":"^2.6.2","rollup":"^0.58.0","rollup-plugin-babel":"^3.0.2","rollup-plugin-json":"^2.3.0","sinon":"^5.0.7","standard":"^8.0.0","tslint":"^5.8.0","typescript":"~2.1","webpack":"^4.0.0"},"engines":{"node":">=0.10.0"},"files":["dist","src","sweetalert2.d.ts"],"greenkeeper":{"ignore":["gulp-standard","standard"]},"homepage":"https://sweetalert2.github.io/","jsnext:main":"src/sweetalert2.js","keywords":["sweetalert","sweetalert2","alert","prompt","confirm"],"license":"MIT","main":"dist/sweetalert2.all.js","name":"sweetalert2","repository":{"type":"git","url":"git+https://github.com/sweetalert2/sweetalert2.git"},"scripts":{"build":"gulp build","check":"npm run check:linting && npm run check:bundlesize && npm run check:require-in-node && npm run check:qunit && npm run check:qunit:minified && npm run check:ts","check:bundlesize":"bundlesize -f dist/sweetalert2.all.min.js -s 15kB","check:linting":"gulp lint","check:qunit":"karma start karma.conf.js --single-run","check:qunit:minified":"karma start karma.conf.js --single-run --minified","check:require-in-node":"node test/require-in-node","check:ts":"tsc --lib dom,es6 sweetalert2.d.ts","fix:lint":"standard --fix","release":"node release","start":"gulp develop --continue-on-error --skip-minification --skip-standalone","test":"npm run build && npm run check"},"standard":{"ignore":["dist/"]},"types":"sweetalert2.d.ts","version":"7.24.1"}

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__staticMethods_argsToParams__ = __webpack_require__(169);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "argsToParams", function() { return __WEBPACK_IMPORTED_MODULE_0__staticMethods_argsToParams__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__staticMethods_adaptInputValidator__ = __webpack_require__(170);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "adaptInputValidator", function() { return __WEBPACK_IMPORTED_MODULE_1__staticMethods_adaptInputValidator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staticMethods_close__ = __webpack_require__(171);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "close", function() { return __WEBPACK_IMPORTED_MODULE_2__staticMethods_close__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "closePopup", function() { return __WEBPACK_IMPORTED_MODULE_2__staticMethods_close__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return __WEBPACK_IMPORTED_MODULE_2__staticMethods_close__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "closeToast", function() { return __WEBPACK_IMPORTED_MODULE_2__staticMethods_close__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staticMethods_dom__ = __webpack_require__(176);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getPopup", function() { return __WEBPACK_IMPORTED_MODULE_3__staticMethods_dom__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getTitle", function() { return __WEBPACK_IMPORTED_MODULE_3__staticMethods_dom__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getContent", function() { return __WEBPACK_IMPORTED_MODULE_3__staticMethods_dom__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return __WEBPACK_IMPORTED_MODULE_3__staticMethods_dom__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getButtonsWrapper", function() { return __WEBPACK_IMPORTED_MODULE_3__staticMethods_dom__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getActions", function() { return __WEBPACK_IMPORTED_MODULE_3__staticMethods_dom__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getConfirmButton", function() { return __WEBPACK_IMPORTED_MODULE_3__staticMethods_dom__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getCancelButton", function() { return __WEBPACK_IMPORTED_MODULE_3__staticMethods_dom__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getFooter", function() { return __WEBPACK_IMPORTED_MODULE_3__staticMethods_dom__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return __WEBPACK_IMPORTED_MODULE_3__staticMethods_dom__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return __WEBPACK_IMPORTED_MODULE_3__staticMethods_dom__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clickConfirm", function() { return __WEBPACK_IMPORTED_MODULE_3__staticMethods_dom__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clickCancel", function() { return __WEBPACK_IMPORTED_MODULE_3__staticMethods_dom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staticMethods_fire__ = __webpack_require__(177);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "fire", function() { return __WEBPACK_IMPORTED_MODULE_4__staticMethods_fire__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__staticMethods_mixin__ = __webpack_require__(178);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return __WEBPACK_IMPORTED_MODULE_5__staticMethods_mixin__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__staticMethods_queue__ = __webpack_require__(181);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "queue", function() { return __WEBPACK_IMPORTED_MODULE_6__staticMethods_queue__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getQueueStep", function() { return __WEBPACK_IMPORTED_MODULE_6__staticMethods_queue__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "insertQueueStep", function() { return __WEBPACK_IMPORTED_MODULE_6__staticMethods_queue__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "deleteQueueStep", function() { return __WEBPACK_IMPORTED_MODULE_6__staticMethods_queue__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__staticMethods_showLoading__ = __webpack_require__(182);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "showLoading", function() { return __WEBPACK_IMPORTED_MODULE_7__staticMethods_showLoading__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "enableLoading", function() { return __WEBPACK_IMPORTED_MODULE_7__staticMethods_showLoading__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__staticMethods_timer__ = __webpack_require__(183);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getTimerLeft", function() { return __WEBPACK_IMPORTED_MODULE_8__staticMethods_timer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_params__ = __webpack_require__(47);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isValidParameter", function() { return __WEBPACK_IMPORTED_MODULE_9__utils_params__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "isDeprecatedParameter", function() { return __WEBPACK_IMPORTED_MODULE_9__utils_params__["b"]; });












/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils_js__ = __webpack_require__(10);


const argsToParams = (args) => {
  const params = {}
  switch (typeof args[0]) {
    case 'string':
      ['title', 'html', 'type'].forEach((name, index) => {
        switch (typeof args[index]) {
          case 'string':
            params[name] = args[index]
            break
          case 'undefined':
            break
          default:
            Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["b" /* error */])(`Unexpected type of ${name}! Expected "string", got ${typeof args[index]}`)
        }
      })
      break

    case 'object':
      Object.assign(params, args[0])
      break

    default:
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils_js__["b" /* error */])(`Unexpected type of argument! Expected "string" or "object", got ${typeof args[0]}`)
      return false
  }
  return params
}
/* harmony export (immutable) */ __webpack_exports__["a"] = argsToParams;



/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Adapt a legacy inputValidator for use with expectRejections=false
 */
const adaptInputValidator = (legacyValidator) => {
  return function adaptedInputValidator (inputValue, extraParams) {
    return legacyValidator.call(this, inputValue, extraParams)
      .then(() => undefined, validationError => validationError)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = adaptInputValidator;



/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return close; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return close; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_scrollbarFix__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_iosFix__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_dom_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_classes_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globalState__ = __webpack_require__(29);






/*
 * Global function to close sweetAlert
 */
const close = (onClose, onAfterClose) => {
  const container = __WEBPACK_IMPORTED_MODULE_2__utils_dom_index__["k" /* getContainer */]()
  const popup = __WEBPACK_IMPORTED_MODULE_2__utils_dom_index__["q" /* getPopup */]()
  if (!popup) {
    return
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup)
  }

  __WEBPACK_IMPORTED_MODULE_2__utils_dom_index__["D" /* removeClass */](popup, __WEBPACK_IMPORTED_MODULE_3__utils_classes_js__["b" /* swalClasses */].show)
  __WEBPACK_IMPORTED_MODULE_2__utils_dom_index__["a" /* addClass */](popup, __WEBPACK_IMPORTED_MODULE_3__utils_classes_js__["b" /* swalClasses */].hide)

  const removePopupAndResetState = () => {
    if (!__WEBPACK_IMPORTED_MODULE_2__utils_dom_index__["z" /* isToast */]()) {
      Object(__WEBPACK_IMPORTED_MODULE_4__globalState__["b" /* restoreActiveElement */])()
      __WEBPACK_IMPORTED_MODULE_4__globalState__["a" /* default */].keydownTarget.removeEventListener('keydown', __WEBPACK_IMPORTED_MODULE_4__globalState__["a" /* default */].keydownHandler, {capture: __WEBPACK_IMPORTED_MODULE_4__globalState__["a" /* default */].keydownListenerCapture})
      __WEBPACK_IMPORTED_MODULE_4__globalState__["a" /* default */].keydownHandlerAdded = false
    }

    if (container.parentNode) {
      container.parentNode.removeChild(container)
    }
    __WEBPACK_IMPORTED_MODULE_2__utils_dom_index__["D" /* removeClass */](
      [document.documentElement, document.body],
      [
        __WEBPACK_IMPORTED_MODULE_3__utils_classes_js__["b" /* swalClasses */].shown,
        __WEBPACK_IMPORTED_MODULE_3__utils_classes_js__["b" /* swalClasses */]['height-auto'],
        __WEBPACK_IMPORTED_MODULE_3__utils_classes_js__["b" /* swalClasses */]['no-backdrop'],
        __WEBPACK_IMPORTED_MODULE_3__utils_classes_js__["b" /* swalClasses */]['has-input'],
        __WEBPACK_IMPORTED_MODULE_3__utils_classes_js__["b" /* swalClasses */]['toast-shown']
      ]
    )

    if (__WEBPACK_IMPORTED_MODULE_2__utils_dom_index__["y" /* isModal */]()) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_scrollbarFix__["b" /* undoScrollbar */])()
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_iosFix__["b" /* undoIOSfix */])()
    }

    if (onAfterClose !== null && typeof onAfterClose === 'function') {
      setTimeout(() => {
        onAfterClose()
      })
    }
  }

  // If animation is supported, animate
  if (__WEBPACK_IMPORTED_MODULE_2__utils_dom_index__["b" /* animationEndEvent */] && !__WEBPACK_IMPORTED_MODULE_2__utils_dom_index__["u" /* hasClass */](popup, __WEBPACK_IMPORTED_MODULE_3__utils_classes_js__["b" /* swalClasses */].noanimation)) {
    popup.addEventListener(__WEBPACK_IMPORTED_MODULE_2__utils_dom_index__["b" /* animationEndEvent */], function swalCloseEventFinished () {
      popup.removeEventListener(__WEBPACK_IMPORTED_MODULE_2__utils_dom_index__["b" /* animationEndEvent */], swalCloseEventFinished)
      if (__WEBPACK_IMPORTED_MODULE_2__utils_dom_index__["u" /* hasClass */](popup, __WEBPACK_IMPORTED_MODULE_3__utils_classes_js__["b" /* swalClasses */].hide)) {
        removePopupAndResetState()
      }
    })
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState()
  }
}



/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getters__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domUtils__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isNodeEnv__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sweetalert2__ = __webpack_require__(28);







const sweetHTML = `
 <div aria-labelledby="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].title}" aria-describedby="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].content}" class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].popup}" tabindex="-1">
   <div class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].header}">
     <ul class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].progresssteps}"></ul>
     <div class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].icon} ${__WEBPACK_IMPORTED_MODULE_0__classes__["a" /* iconTypes */].error}">
       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>
     </div>
     <div class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].icon} ${__WEBPACK_IMPORTED_MODULE_0__classes__["a" /* iconTypes */].question}">
       <span class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */]['icon-text']}">?</span>
      </div>
     <div class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].icon} ${__WEBPACK_IMPORTED_MODULE_0__classes__["a" /* iconTypes */].warning}">
       <span class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */]['icon-text']}">!</span>
      </div>
     <div class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].icon} ${__WEBPACK_IMPORTED_MODULE_0__classes__["a" /* iconTypes */].info}">
       <span class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */]['icon-text']}">i</span>
      </div>
     <div class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].icon} ${__WEBPACK_IMPORTED_MODULE_0__classes__["a" /* iconTypes */].success}">
       <div class="swal2-success-circular-line-left"></div>
       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
       <div class="swal2-success-circular-line-right"></div>
     </div>
     <img class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].image}" />
     <h2 class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].title}" id="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].title}"></h2>
     <button type="button" class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].close}">×</button>
   </div>
   <div class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].content}">
     <div id="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].content}"></div>
     <input class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].input}" />
     <input type="file" class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].file}" />
     <div class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].range}">
       <input type="range" />
       <output></output>
     </div>
     <select class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].select}"></select>
     <div class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].radio}"></div>
     <label for="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].checkbox}" class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].checkbox}">
       <input type="checkbox" />
     </label>
     <textarea class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].textarea}"></textarea>
     <div class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].validationerror}" id="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].validationerror}"></div>
   </div>
   <div class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].actions}">
     <button type="button" class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].confirm}">OK</button>
     <button type="button" class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].cancel}">Cancel</button>
   </div>
   <div class="${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].footer}">
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '')

/*
 * Add modal + backdrop to DOM
 */
const init = (params) => {
  // Clean up the old popup if it exists
  const c = Object(__WEBPACK_IMPORTED_MODULE_1__getters__["f" /* getContainer */])()
  if (c) {
    c.parentNode.removeChild(c)
    Object(__WEBPACK_IMPORTED_MODULE_2__domUtils__["h" /* removeClass */])(
      [document.documentElement, document.body],
      [
        __WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */]['no-backdrop'],
        __WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */]['has-input'],
        __WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */]['toast-shown']
      ]
    )
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_3__isNodeEnv__["a" /* isNodeEnv */])()) {
    Object(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* error */])('SweetAlert2 requires document to initialize')
    return
  }

  const container = document.createElement('div')
  container.className = __WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].container
  container.innerHTML = sweetHTML

  let targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target
  targetElement.appendChild(container)

  const popup = Object(__WEBPACK_IMPORTED_MODULE_1__getters__["l" /* getPopup */])()
  const content = Object(__WEBPACK_IMPORTED_MODULE_1__getters__["g" /* getContent */])()
  const input = Object(__WEBPACK_IMPORTED_MODULE_2__domUtils__["d" /* getChildByClass */])(content, __WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].input)
  const file = Object(__WEBPACK_IMPORTED_MODULE_2__domUtils__["d" /* getChildByClass */])(content, __WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].file)
  const range = content.querySelector(`.${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].range} input`)
  const rangeOutput = content.querySelector(`.${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].range} output`)
  const select = Object(__WEBPACK_IMPORTED_MODULE_2__domUtils__["d" /* getChildByClass */])(content, __WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].select)
  const checkbox = content.querySelector(`.${__WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].checkbox} input`)
  const textarea = Object(__WEBPACK_IMPORTED_MODULE_2__domUtils__["d" /* getChildByClass */])(content, __WEBPACK_IMPORTED_MODULE_0__classes__["b" /* swalClasses */].textarea)

  // a11y
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog')
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive')
  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true')
  }

  let oldInputVal // IE11 workaround, see #1109 for details
  const resetValidationError = (e) => {
    if (__WEBPACK_IMPORTED_MODULE_5__sweetalert2__["default"].isVisible() && oldInputVal !== e.target.value) {
      __WEBPACK_IMPORTED_MODULE_5__sweetalert2__["default"].resetValidationError()
    }
    oldInputVal = e.target.value
  }

  input.oninput = resetValidationError
  file.onchange = resetValidationError
  select.onchange = resetValidationError
  checkbox.onchange = resetValidationError
  textarea.oninput = resetValidationError

  range.oninput = (e) => {
    resetValidationError(e)
    rangeOutput.value = range.value
  }

  range.onchange = (e) => {
    resetValidationError(e)
    range.nextSibling.value = range.value
  }

  return popup
}
/* harmony export (immutable) */ __webpack_exports__["a"] = init;



/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domUtils__ = __webpack_require__(46);


const parseHtmlToContainer = (param, target) => {
  if (!param) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__domUtils__["f" /* hide */])(target)
  }

  if (typeof param === 'object') {
    target.innerHTML = ''
    if (0 in param) {
      for (let i = 0; i in param; i++) {
        target.appendChild(param[i].cloneNode(true))
      }
    } else {
      target.appendChild(param.cloneNode(true))
    }
  } else if (param) {
    target.innerHTML = param
  } else {}
  Object(__WEBPACK_IMPORTED_MODULE_0__domUtils__["j" /* show */])(target)
}
/* harmony export (immutable) */ __webpack_exports__["a"] = parseHtmlToContainer;



/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isNodeEnv__ = __webpack_require__(86);


const animationEndEvent = (() => {
  // Prevent run in Node env
  if (Object(__WEBPACK_IMPORTED_MODULE_0__isNodeEnv__["a" /* isNodeEnv */])()) {
    return false
  }

  const testEl = document.createElement('div')
  const transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  }
  for (const i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i]
    }
  }

  return false
})()
/* harmony export (immutable) */ __webpack_exports__["a"] = animationEndEvent;



/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
const measureScrollbar = () => {
  const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints
  if (supportsTouch) {
    return 0
  }
  const scrollDiv = document.createElement('div')
  scrollDiv.style.width = '50px'
  scrollDiv.style.height = '50px'
  scrollDiv.style.overflow = 'scroll'
  document.body.appendChild(scrollDiv)
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
  document.body.removeChild(scrollDiv)
  return scrollbarWidth
}
/* harmony export (immutable) */ __webpack_exports__["a"] = measureScrollbar;



/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["q"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["p"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["x"]; });




/*
 * Global function to determine if swal2 popup is shown
 */
const isVisible = () => {
  return !!__WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["q" /* getPopup */]()
}
/* harmony export (immutable) */ __webpack_exports__["m"] = isVisible;


/*
 * Global function to click 'Confirm' button
 */
const clickConfirm = () => __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["j" /* getConfirmButton */]().click()
/* harmony export (immutable) */ __webpack_exports__["b"] = clickConfirm;


/*
 * Global function to click 'Cancel' button
 */
const clickCancel = () => __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["g" /* getCancelButton */]().click()
/* harmony export (immutable) */ __webpack_exports__["a"] = clickCancel;



/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fire;
function fire (...args) {
  const Swal = this
  return new Swal(...args)
}


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mixin;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enhancers__ = __webpack_require__(88);


/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin (mixinParams) {
  const Swal = this
  return Object(__WEBPACK_IMPORTED_MODULE_0__enhancers__["b" /* withNoNewKeyword */])(
    class MixinSwal extends Swal {
      _main (params) {
        return super._main(Object.assign({}, mixinParams, params))
      }
    }
  )
}


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withNoNewKeyword;
/**
 * Extends a Swal class making it able to be instantiated without the `new` keyword (and thus without `Swal.fire`)
 * @param ParentSwal
 * @returns {NoNewKeywordSwal}
 */
function withNoNewKeyword (ParentSwal) {
  const NoNewKeywordSwal = function (...args) {
    if (!(this instanceof NoNewKeywordSwal)) {
      return new NoNewKeywordSwal(...args)
    }
    Object.getPrototypeOf(NoNewKeywordSwal).apply(this, args)
  }
  NoNewKeywordSwal.prototype = Object.assign(
    Object.create(ParentSwal.prototype),
    { constructor: NoNewKeywordSwal }
  )

  if (typeof Object.setPrototypeOf === 'function') {
    Object.setPrototypeOf(NoNewKeywordSwal, ParentSwal)
  } else {
    // Android 4.4
    // eslint-disable-next-line
    NoNewKeywordSwal.__proto__ = ParentSwal
  }
  return NoNewKeywordSwal
}


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withGlobalDefaults;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_params__ = __webpack_require__(47);



const deprecationWarning = `\
"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. \
For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.`
let defaults = {}

function withGlobalDefaults (ParentSwal) {
  class SwalWithGlobalDefaults extends ParentSwal {
    _main (params) {
      return super._main(Object.assign({}, defaults, params))
    }

    static setDefaults (params) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["g" /* warnOnce */])(deprecationWarning)
      if (!params || typeof params !== 'object') {
        throw new TypeError('SweetAlert2: The argument for setDefaults() is required and has to be a object')
      }
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_params__["d" /* showWarningsForParams */])(params)
      // assign valid params from `params` to `defaults`
      Object.keys(params).forEach(param => {
        if (ParentSwal.isValidParameter(param)) {
          defaults[param] = params[param]
        }
      })
    }

    static resetDefaults () {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["g" /* warnOnce */])(deprecationWarning)
      defaults = {}
    }
  }

  // Set default params if `window._swalDefaults` is an object
  if (typeof window !== 'undefined' && typeof window._swalDefaults === 'object') {
    SwalWithGlobalDefaults.setDefaults(window._swalDefaults)
  }

  return SwalWithGlobalDefaults
}


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// private global state for the queue feature
let currentSteps = []

/*
 * Global function for chaining sweetAlert popups
 */
const queue = function (steps) {
  const swal = this
  currentSteps = steps
  const resetQueue = () => {
    currentSteps = []
    document.body.removeAttribute('data-swal2-queue-step')
  }
  let queueResult = []
  return new Promise((resolve, reject) => {
    (function step (i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i)

        swal(currentSteps[i]).then((result) => {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value)
            step(i + 1, callback)
          } else {
            resetQueue()
            resolve({dismiss: result.dismiss})
          }
        })
      } else {
        resetQueue()
        resolve({value: queueResult})
      }
    })(0)
  })
}
/* harmony export (immutable) */ __webpack_exports__["d"] = queue;


/*
 * Global function for getting the index of current popup in queue
 */
const getQueueStep = () => document.body.getAttribute('data-swal2-queue-step')
/* harmony export (immutable) */ __webpack_exports__["b"] = getQueueStep;


/*
 * Global function for inserting a popup to the queue
 */
const insertQueueStep = (step, index) => {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step)
  }
  return currentSteps.push(step)
}
/* harmony export (immutable) */ __webpack_exports__["c"] = insertQueueStep;


/*
 * Global function for deleting a popup from the queue
 */
const deleteQueueStep = (index) => {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = deleteQueueStep;



/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return showLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showLoading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sweetalert2__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_classes__ = __webpack_require__(6);




/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
const showLoading = () => {
  let popup = __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["q" /* getPopup */]()
  if (!popup) {
    Object(__WEBPACK_IMPORTED_MODULE_1__sweetalert2__["default"])('')
  }
  popup = __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["q" /* getPopup */]()
  const actions = __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["e" /* getActions */]()
  const confirmButton = __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["j" /* getConfirmButton */]()
  const cancelButton = __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["g" /* getCancelButton */]()

  __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["F" /* show */](actions)
  __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["F" /* show */](confirmButton)
  __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["a" /* addClass */]([popup, actions], __WEBPACK_IMPORTED_MODULE_2__utils_classes__["b" /* swalClasses */].loading)
  confirmButton.disabled = true
  cancelButton.disabled = true

  popup.setAttribute('data-loading', true)
  popup.setAttribute('aria-busy', true)
  popup.focus()
}




/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__globalState__ = __webpack_require__(29);


/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
const getTimerLeft = () => {
  return __WEBPACK_IMPORTED_MODULE_0__globalState__["a" /* default */].timeout && __WEBPACK_IMPORTED_MODULE_0__globalState__["a" /* default */].timeout.getTimerLeft()
}
/* harmony export (immutable) */ __webpack_exports__["a"] = getTimerLeft;



/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instanceMethods_hideLoading__ = __webpack_require__(185);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hideLoading", function() { return __WEBPACK_IMPORTED_MODULE_0__instanceMethods_hideLoading__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "disableLoading", function() { return __WEBPACK_IMPORTED_MODULE_0__instanceMethods_hideLoading__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instanceMethods_getInput__ = __webpack_require__(188);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getInput", function() { return __WEBPACK_IMPORTED_MODULE_1__instanceMethods_getInput__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instanceMethods_enable_disable_elements__ = __webpack_require__(189);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "enableButtons", function() { return __WEBPACK_IMPORTED_MODULE_2__instanceMethods_enable_disable_elements__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "disableButtons", function() { return __WEBPACK_IMPORTED_MODULE_2__instanceMethods_enable_disable_elements__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "enableConfirmButton", function() { return __WEBPACK_IMPORTED_MODULE_2__instanceMethods_enable_disable_elements__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "disableConfirmButton", function() { return __WEBPACK_IMPORTED_MODULE_2__instanceMethods_enable_disable_elements__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "enableInput", function() { return __WEBPACK_IMPORTED_MODULE_2__instanceMethods_enable_disable_elements__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "disableInput", function() { return __WEBPACK_IMPORTED_MODULE_2__instanceMethods_enable_disable_elements__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instanceMethods_show_reset_validation_error__ = __webpack_require__(190);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "showValidationError", function() { return __WEBPACK_IMPORTED_MODULE_3__instanceMethods_show_reset_validation_error__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "resetValidationError", function() { return __WEBPACK_IMPORTED_MODULE_3__instanceMethods_show_reset_validation_error__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__instanceMethods_main__ = __webpack_require__(191);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "_main", function() { return __WEBPACK_IMPORTED_MODULE_4__instanceMethods_main__["a"]; });







/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hideLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hideLoading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_classes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privateProps__ = __webpack_require__(19);




/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
function hideLoading () {
  const innerParams = __WEBPACK_IMPORTED_MODULE_2__privateProps__["a" /* default */].innerParams.get(this)
  const domCache = __WEBPACK_IMPORTED_MODULE_2__privateProps__["a" /* default */].domCache.get(this)
  if (!innerParams.showConfirmButton) {
    __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["v" /* hide */](domCache.confirmButton)
    if (!innerParams.showCancelButton) {
      __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["v" /* hide */](domCache.actions)
    }
  }
  __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["D" /* removeClass */]([domCache.popup, domCache.actions], __WEBPACK_IMPORTED_MODULE_1__utils_classes__["b" /* swalClasses */].loading)
  domCache.popup.removeAttribute('aria-busy')
  domCache.popup.removeAttribute('data-loading')
  domCache.confirmButton.disabled = false
  domCache.cancelButton.disabled = false
}




/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(187);
// WeakMap polyfill, needed for Android 4.4
// Related issue: https://github.com/sweetalert2/sweetalert2/issues/1071
// http://webreflection.blogspot.fi/2015/04/a-weakmap-polyfill-in-20-lines-of-code.html



/* harmony default export */ __webpack_exports__["a"] = (typeof WeakMap === 'function' ? WeakMap : ((s, dP, hOP) => {
  function WeakMap () {
    dP(this, s, {value: Object(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('WeakMap')})
  }
  WeakMap.prototype = {
    'delete': function del (o) {
      delete o[this[s]]
    },
    get: function get (o) {
      return o[this[s]]
    },
    has: function has (o) {
      return hOP.call(o, this[s])
    },
    set: function set (o, v) {
      dP(o, this[s], {configurable: true, value: v})
    }
  }
  return WeakMap
})(Object(__WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */])('WeakMap'), Object.defineProperty, {}.hasOwnProperty));


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// https://github.com/Riim/symbol-polyfill/blob/master/index.js

/* harmony default export */ __webpack_exports__["a"] = (typeof Symbol === 'function' ? Symbol : (() => {
  let idCounter = 0
  function Symbol (key) {
    return '__' + key + '_' + Math.floor(Math.random() * 1e9) + '_' + (++idCounter) + '__'
  }
  Symbol.iterator = Symbol('Symbol.iterator')
  return Symbol
})());


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getInput;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_classes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privateProps__ = __webpack_require__(19);




// Get input element by specified type or, if type isn't specified, by params.input
function getInput (inputType) {
  const innerParams = __WEBPACK_IMPORTED_MODULE_2__privateProps__["a" /* default */].innerParams.get(this)
  const domCache = __WEBPACK_IMPORTED_MODULE_2__privateProps__["a" /* default */].domCache.get(this)
  inputType = inputType || innerParams.input
  if (!inputType) {
    return null
  }
  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["h" /* getChildByClass */](domCache.content, __WEBPACK_IMPORTED_MODULE_1__utils_classes__["b" /* swalClasses */][inputType])
    case 'checkbox':
      return domCache.popup.querySelector(`.${__WEBPACK_IMPORTED_MODULE_1__utils_classes__["b" /* swalClasses */].checkbox} input`)
    case 'radio':
      return domCache.popup.querySelector(`.${__WEBPACK_IMPORTED_MODULE_1__utils_classes__["b" /* swalClasses */].radio} input:checked`) ||
        domCache.popup.querySelector(`.${__WEBPACK_IMPORTED_MODULE_1__utils_classes__["b" /* swalClasses */].radio} input:first-child`)
    case 'range':
      return domCache.popup.querySelector(`.${__WEBPACK_IMPORTED_MODULE_1__utils_classes__["b" /* swalClasses */].range} input`)
    default:
      return __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["h" /* getChildByClass */](domCache.content, __WEBPACK_IMPORTED_MODULE_1__utils_classes__["b" /* swalClasses */].input)
  }
}


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = enableButtons;
/* harmony export (immutable) */ __webpack_exports__["a"] = disableButtons;
/* harmony export (immutable) */ __webpack_exports__["e"] = enableConfirmButton;
/* harmony export (immutable) */ __webpack_exports__["b"] = disableConfirmButton;
/* harmony export (immutable) */ __webpack_exports__["f"] = enableInput;
/* harmony export (immutable) */ __webpack_exports__["c"] = disableInput;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__privateProps__ = __webpack_require__(19);


function enableButtons () {
  const domCache = __WEBPACK_IMPORTED_MODULE_0__privateProps__["a" /* default */].domCache.get(this)
  domCache.confirmButton.disabled = false
  domCache.cancelButton.disabled = false
}

function disableButtons () {
  const domCache = __WEBPACK_IMPORTED_MODULE_0__privateProps__["a" /* default */].domCache.get(this)
  domCache.confirmButton.disabled = true
  domCache.cancelButton.disabled = true
}

function enableConfirmButton () {
  const domCache = __WEBPACK_IMPORTED_MODULE_0__privateProps__["a" /* default */].domCache.get(this)
  domCache.confirmButton.disabled = false
}

function disableConfirmButton () {
  const domCache = __WEBPACK_IMPORTED_MODULE_0__privateProps__["a" /* default */].domCache.get(this)
  domCache.confirmButton.disabled = true
}

function enableInput () {
  const input = this.getInput()
  if (!input) {
    return false
  }
  if (input.type === 'radio') {
    const radiosContainer = input.parentNode.parentNode
    const radios = radiosContainer.querySelectorAll('input')
    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = false
    }
  } else {
    input.disabled = false
  }
}

function disableInput () {
  const input = this.getInput()
  if (!input) {
    return false
  }
  if (input && input.type === 'radio') {
    const radiosContainer = input.parentNode.parentNode
    const radios = radiosContainer.querySelectorAll('input')
    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = true
    }
  } else {
    input.disabled = true
  }
}


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = showValidationError;
/* harmony export (immutable) */ __webpack_exports__["a"] = resetValidationError;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_classes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__privateProps__ = __webpack_require__(19);




// Show block with validation error
function showValidationError (error) {
  const domCache = __WEBPACK_IMPORTED_MODULE_2__privateProps__["a" /* default */].domCache.get(this)
  domCache.validationError.innerHTML = error
  const popupComputedStyle = window.getComputedStyle(domCache.popup)
  domCache.validationError.style.marginLeft = `-${popupComputedStyle.getPropertyValue('padding-left')}`
  domCache.validationError.style.marginRight = `-${popupComputedStyle.getPropertyValue('padding-right')}`
  __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["F" /* show */](domCache.validationError)

  const input = this.getInput()
  if (input) {
    input.setAttribute('aria-invalid', true)
    input.setAttribute('aria-describedBy', __WEBPACK_IMPORTED_MODULE_1__utils_classes__["b" /* swalClasses */].validationerror)
    __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["d" /* focusInput */](input)
    __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["a" /* addClass */](input, __WEBPACK_IMPORTED_MODULE_1__utils_classes__["b" /* swalClasses */].inputerror)
  }
}

// Hide block with validation error
function resetValidationError () {
  const domCache = __WEBPACK_IMPORTED_MODULE_2__privateProps__["a" /* default */].domCache.get(this)
  if (domCache.validationError) {
    __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["v" /* hide */](domCache.validationError)
  }

  const input = this.getInput()
  if (input) {
    input.removeAttribute('aria-invalid')
    input.removeAttribute('aria-describedBy')
    __WEBPACK_IMPORTED_MODULE_0__utils_dom_index__["D" /* removeClass */](input, __WEBPACK_IMPORTED_MODULE_1__utils_classes__["b" /* swalClasses */].inputerror)
  }
}


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _main;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_params__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_classes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Timer__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_utils__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_setParameters__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__globalState__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_openPopup__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__privateProps__ = __webpack_require__(19);










function _main (userParams) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils_params__["d" /* showWarningsForParams */])(userParams)

  const innerParams = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__utils_params__["a" /* default */], userParams)
  Object(__WEBPACK_IMPORTED_MODULE_5__utils_setParameters__["a" /* default */])(innerParams)
  Object.freeze(innerParams)
  __WEBPACK_IMPORTED_MODULE_8__privateProps__["a" /* default */].innerParams.set(this, innerParams)

  // clear the previous timer
  if (__WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].timeout) {
    __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].timeout.stop()
    delete __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].timeout
  }

  // clear the restore focus timeout
  clearTimeout(__WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].restoreFocusTimeout)

  const domCache = {
    popup: __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["q" /* getPopup */](),
    container: __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["k" /* getContainer */](),
    content: __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["l" /* getContent */](),
    actions: __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["e" /* getActions */](),
    confirmButton: __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["j" /* getConfirmButton */](),
    cancelButton: __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["g" /* getCancelButton */](),
    closeButton: __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["i" /* getCloseButton */](),
    validationError: __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["t" /* getValidationError */](),
    progressSteps: __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["r" /* getProgressSteps */]()
  }
  __WEBPACK_IMPORTED_MODULE_8__privateProps__["a" /* default */].domCache.set(this, domCache)

  const constructor = this.constructor

  return new Promise((resolve, reject) => {
    // functions to handle all resolving/rejecting/settling
    const succeedWith = (value) => {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose) // TODO: make closePopup an *instance* method
      if (innerParams.useRejections) {
        resolve(value)
      } else {
        resolve({value})
      }
    }
    const dismissWith = (dismiss) => {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose)
      if (innerParams.useRejections) {
        reject(dismiss)
      } else {
        resolve({dismiss})
      }
    }
    const errorWith = (error) => {
      constructor.closePopup(innerParams.onClose, innerParams.onAfterClose)
      reject(error)
    }

    // Close on timer
    if (innerParams.timer) {
      __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].timeout = new __WEBPACK_IMPORTED_MODULE_3__utils_Timer__["a" /* default */](() => {
        dismissWith('timer')
        delete __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].timeout
      }, innerParams.timer)
    }

    // Get the value of the popup input
    const getInputValue = () => {
      const input = this.getInput()
      if (!input) {
        return null
      }
      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0
        case 'radio':
          return input.checked ? input.value : null
        case 'file':
          return input.files.length ? input.files[0] : null
        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value
      }
    }

    // input autofocus
    if (innerParams.input) {
      setTimeout(() => {
        const input = this.getInput()
        if (input) {
          __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["d" /* focusInput */](input)
        }
      }, 0)
    }

    const confirm = (value) => {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading() // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        this.resetValidationError()
        const preConfirmPromise = Promise.resolve().then(() => innerParams.preConfirm(value, innerParams.extraParams))
        if (innerParams.expectRejections) {
          preConfirmPromise.then(
            (preConfirmValue) => succeedWith(preConfirmValue || value),
            (validationError) => {
              this.hideLoading()
              if (validationError) {
                this.showValidationError(validationError)
              }
            }
          )
        } else {
          preConfirmPromise.then(
            (preConfirmValue) => {
              if (__WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["A" /* isVisible */](domCache.validationError) || preConfirmValue === false) {
                this.hideLoading()
              } else {
                succeedWith(preConfirmValue || value)
              }
            },
            (error) => errorWith(error)
          )
        }
      } else {
        succeedWith(value)
      }
    }

    // Mouse interactions
    const onButtonEvent = (event) => {
      const e = event || window.event
      const target = e.target || e.srcElement
      const {confirmButton, cancelButton} = domCache
      const targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target))
      const targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target))

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && constructor.isVisible()) {
            this.disableButtons()
            if (innerParams.input) {
              const inputValue = getInputValue()

              if (innerParams.inputValidator) {
                this.disableInput()
                const validationPromise = Promise.resolve().then(() => innerParams.inputValidator(inputValue, innerParams.extraParams))
                if (innerParams.expectRejections) {
                  validationPromise.then(
                    () => {
                      this.enableButtons()
                      this.enableInput()
                      confirm(inputValue)
                    },
                    (validationError) => {
                      this.enableButtons()
                      this.enableInput()
                      if (validationError) {
                        this.showValidationError(validationError)
                      }
                    }
                  )
                } else {
                  validationPromise.then(
                    (validationError) => {
                      this.enableButtons()
                      this.enableInput()
                      if (validationError) {
                        this.showValidationError(validationError)
                      } else {
                        confirm(inputValue)
                      }
                    },
                    error => errorWith(error)
                  )
                }
              } else {
                confirm(inputValue)
              }
            } else {
              confirm(true)
            }

            // Clicked 'cancel'
          } else if (targetedCancel && constructor.isVisible()) {
            this.disableButtons()
            dismissWith(constructor.DismissReason.cancel)
          }
          break
        default:
      }
    }

    const buttons = domCache.popup.querySelectorAll('button')
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent
      buttons[i].onmouseover = onButtonEvent
      buttons[i].onmouseout = onButtonEvent
      buttons[i].onmousedown = onButtonEvent
    }

    // Closing popup by close button
    domCache.closeButton.onclick = () => {
      dismissWith(constructor.DismissReason.close)
    }

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = (e) => {
        if (
          innerParams.showConfirmButton ||
          innerParams.showCancelButton ||
          innerParams.showCloseButton ||
          innerParams.input
        ) {
          return
        }
        constructor.closePopup(innerParams.onClose, innerParams.onAfterClose)
        dismissWith(constructor.DismissReason.close)
      }
    } else {
      let ignoreOutsideClick = false

      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      domCache.popup.onmousedown = () => {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined
          // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup
          if (e.target === domCache.container) {
            ignoreOutsideClick = true
          }
        }
      }

      // Ignore click events that had mousedown on the container but mouseup on the popup
      domCache.container.onmousedown = () => {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined
          // We also need to check if the mouseup target is a child of the popup
          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true
          }
        }
      }

      domCache.container.onclick = (e) => {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false
          return
        }
        if (e.target !== domCache.container) {
          return
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* callIfFunction */])(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop)
        }
      }
    }

    // Reverse buttons (Confirm on the right side)
    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton)
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton)
    }

    // Focus handling
    const setFocus = (index, increment) => {
      const focusableElements = __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["m" /* getFocusableElements */](innerParams.focusCancel)
      // search for visible elements and select the next possible match
      for (let i = 0; i < focusableElements.length; i++) {
        index = index + increment

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1
        }

        // determine if element is visible
        const el = focusableElements[index]
        if (__WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["A" /* isVisible */](el)) {
          return el.focus()
        }
      }
      // no visible focusable elements, focus the popup
      domCache.popup.focus()
    }

    const keydownHandler = (e, innerParams) => {
      if (innerParams.stopKeydownPropagation) {
        e.stopPropagation()
      }

      const arrowKeys = [
        'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
        'Left', 'Right', 'Up', 'Down' // IE11
      ]

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && this.getInput() && e.target.outerHTML === this.getInput().outerHTML) {
          if (['textarea', 'file'].includes(innerParams.input)) {
            return // do not submit
          }

          constructor.clickConfirm()
          e.preventDefault()
        }

        // TAB
      } else if (e.key === 'Tab') {
        const targetElement = e.target || e.srcElement

        const focusableElements = __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["m" /* getFocusableElements */](innerParams.focusCancel)
        let btnIndex = -1 // Find the button - note, this is a nodelist, not an array.
        for (let i = 0; i < focusableElements.length; i++) {
          if (targetElement === focusableElements[i]) {
            btnIndex = i
            break
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1)
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1)
        }
        e.stopPropagation()
        e.preventDefault()

        // ARROWS - switch focus between buttons
      } else if (arrowKeys.includes(e.key)) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["A" /* isVisible */](domCache.cancelButton)) {
          domCache.cancelButton.focus()
          // and vice versa
        } else if (document.activeElement === domCache.cancelButton && __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["A" /* isVisible */](domCache.confirmButton)) {
          domCache.confirmButton.focus()
        }

        // ESC
      } else if ((e.key === 'Escape' || e.key === 'Esc') && Object(__WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* callIfFunction */])(innerParams.allowEscapeKey) === true) {
        dismissWith(constructor.DismissReason.esc)
      }
    }

    if (__WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].keydownHandlerAdded) {
      __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].keydownTarget.removeEventListener('keydown', __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].keydownHandler, {capture: __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].keydownListenerCapture})
      __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].keydownHandlerAdded = false
    }

    if (!innerParams.toast) {
      __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].keydownHandler = (e) => keydownHandler(e, innerParams)
      __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup
      __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].keydownListenerCapture = innerParams.keydownListenerCapture
      __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].keydownTarget.addEventListener('keydown', __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].keydownHandler, {capture: __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].keydownListenerCapture})
      __WEBPACK_IMPORTED_MODULE_6__globalState__["a" /* default */].keydownHandlerAdded = true
    }

    this.enableButtons()
    this.hideLoading()
    this.resetValidationError()

    if (innerParams.input) {
      __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["a" /* addClass */](document.body, __WEBPACK_IMPORTED_MODULE_2__utils_classes__["b" /* swalClasses */]['has-input'])
    }

    // inputs
    const inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea']
    let input
    for (let i = 0; i < inputTypes.length; i++) {
      const inputClass = __WEBPACK_IMPORTED_MODULE_2__utils_classes__["b" /* swalClasses */][inputTypes[i]]
      const inputContainer = __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["h" /* getChildByClass */](domCache.content, inputClass)
      input = this.getInput(inputTypes[i])

      // set attributes
      if (input) {
        for (let j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            const attrName = input.attributes[j].name
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName)
            }
          }
        }
        for (let attr in innerParams.inputAttributes) {
          input.setAttribute(attr, innerParams.inputAttributes[attr])
        }
      }

      // set class
      inputContainer.className = inputClass
      if (innerParams.inputClass) {
        __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["a" /* addClass */](inputContainer, innerParams.inputClass)
      }

      __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["v" /* hide */](inputContainer)
    }

    let populateInputOptions
    switch (innerParams.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["h" /* getChildByClass */](domCache.content, __WEBPACK_IMPORTED_MODULE_2__utils_classes__["b" /* swalClasses */].input)
        input.value = innerParams.inputValue
        input.placeholder = innerParams.inputPlaceholder
        input.type = innerParams.input
        __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["F" /* show */](input)
        break
      case 'file':
        input = __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["h" /* getChildByClass */](domCache.content, __WEBPACK_IMPORTED_MODULE_2__utils_classes__["b" /* swalClasses */].file)
        input.placeholder = innerParams.inputPlaceholder
        input.type = innerParams.input
        __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["F" /* show */](input)
        break
      case 'range':
        const range = __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["h" /* getChildByClass */](domCache.content, __WEBPACK_IMPORTED_MODULE_2__utils_classes__["b" /* swalClasses */].range)
        const rangeInput = range.querySelector('input')
        const rangeOutput = range.querySelector('output')
        rangeInput.value = innerParams.inputValue
        rangeInput.type = innerParams.input
        rangeOutput.value = innerParams.inputValue
        __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["F" /* show */](range)
        break
      case 'select':
        const select = __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["h" /* getChildByClass */](domCache.content, __WEBPACK_IMPORTED_MODULE_2__utils_classes__["b" /* swalClasses */].select)
        select.innerHTML = ''
        if (innerParams.inputPlaceholder) {
          const placeholder = document.createElement('option')
          placeholder.innerHTML = innerParams.inputPlaceholder
          placeholder.value = ''
          placeholder.disabled = true
          placeholder.selected = true
          select.appendChild(placeholder)
        }
        populateInputOptions = (inputOptions) => {
          inputOptions.forEach(([optionValue, optionLabel]) => {
            const option = document.createElement('option')
            option.value = optionValue
            option.innerHTML = optionLabel
            if (innerParams.inputValue.toString() === optionValue.toString()) {
              option.selected = true
            }
            select.appendChild(option)
          })
          __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["F" /* show */](select)
          select.focus()
        }
        break
      case 'radio':
        const radio = __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["h" /* getChildByClass */](domCache.content, __WEBPACK_IMPORTED_MODULE_2__utils_classes__["b" /* swalClasses */].radio)
        radio.innerHTML = ''
        populateInputOptions = (inputOptions) => {
          inputOptions.forEach(([radioValue, radioLabel]) => {
            const radioInput = document.createElement('input')
            const radioLabelElement = document.createElement('label')
            radioInput.type = 'radio'
            radioInput.name = __WEBPACK_IMPORTED_MODULE_2__utils_classes__["b" /* swalClasses */].radio
            radioInput.value = radioValue
            if (innerParams.inputValue.toString() === radioValue.toString()) {
              radioInput.checked = true
            }
            radioLabelElement.innerHTML = radioLabel
            radioLabelElement.insertBefore(radioInput, radioLabelElement.firstChild)
            radio.appendChild(radioLabelElement)
          })
          __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["F" /* show */](radio)
          const radios = radio.querySelectorAll('input')
          if (radios.length) {
            radios[0].focus()
          }
        }
        break
      case 'checkbox':
        const checkbox = __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["h" /* getChildByClass */](domCache.content, __WEBPACK_IMPORTED_MODULE_2__utils_classes__["b" /* swalClasses */].checkbox)
        const checkboxInput = this.getInput('checkbox')
        checkboxInput.type = 'checkbox'
        checkboxInput.value = 1
        checkboxInput.id = __WEBPACK_IMPORTED_MODULE_2__utils_classes__["b" /* swalClasses */].checkbox
        checkboxInput.checked = Boolean(innerParams.inputValue)
        let label = checkbox.getElementsByTagName('span')
        if (label.length) {
          checkbox.removeChild(label[0])
        }
        label = document.createElement('span')
        label.innerHTML = innerParams.inputPlaceholder
        checkbox.appendChild(label)
        __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["F" /* show */](checkbox)
        break
      case 'textarea':
        const textarea = __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["h" /* getChildByClass */](domCache.content, __WEBPACK_IMPORTED_MODULE_2__utils_classes__["b" /* swalClasses */].textarea)
        textarea.value = innerParams.inputValue
        textarea.placeholder = innerParams.inputPlaceholder
        __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["F" /* show */](textarea)
        break
      case null:
        break
      default:
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_utils__["b" /* error */])(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${innerParams.input}"`)
        break
    }

    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      const processInputOptions = inputOptions => populateInputOptions(Object(__WEBPACK_IMPORTED_MODULE_4__utils_utils__["c" /* formatInputOptions */])(inputOptions))
      if (Object(__WEBPACK_IMPORTED_MODULE_4__utils_utils__["d" /* isThenable */])(innerParams.inputOptions)) {
        constructor.showLoading()
        innerParams.inputOptions.then((inputOptions) => {
          this.hideLoading()
          processInputOptions(inputOptions)
        })
      } else if (typeof innerParams.inputOptions === 'object') {
        processInputOptions(innerParams.inputOptions)
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_4__utils_utils__["b" /* error */])(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof innerParams.inputOptions}`)
      }
    } else if (['text', 'email', 'number', 'tel', 'textarea'].includes(innerParams.input) && Object(__WEBPACK_IMPORTED_MODULE_4__utils_utils__["d" /* isThenable */])(innerParams.inputValue)) {
      constructor.showLoading()
      __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["v" /* hide */](input)
      innerParams.inputValue.then((inputValue) => {
        input.value = innerParams.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + ''
        __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["F" /* show */](input)
        this.hideLoading()
      })
        .catch((err) => {
          Object(__WEBPACK_IMPORTED_MODULE_4__utils_utils__["b" /* error */])('Error in inputValue promise: ' + err)
          input.value = ''
          __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["F" /* show */](input)
          this.hideLoading()
        })
    }

    Object(__WEBPACK_IMPORTED_MODULE_7__utils_openPopup__["a" /* openPopup */])(innerParams)

    if (!innerParams.toast) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_4__utils_utils__["a" /* callIfFunction */])(innerParams.allowEnterKey)) {
        if (document.activeElement) {
          document.activeElement.blur()
        }
      } else if (innerParams.focusCancel && __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["A" /* isVisible */](domCache.cancelButton)) {
        domCache.cancelButton.focus()
      } else if (innerParams.focusConfirm && __WEBPACK_IMPORTED_MODULE_1__utils_dom_index__["A" /* isVisible */](domCache.confirmButton)) {
        domCache.confirmButton.focus()
      } else {
        setFocus(-1, 1)
      }
    }

    // fix scroll
    domCache.container.scrollTop = 0
  })
}


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Timer {
  constructor (callback, delay) {
    var id, started, running
    var remaining = delay
    this.start = function () {
      running = true
      started = new Date()
      id = setTimeout(callback, remaining)
    }
    this.stop = function () {
      running = false
      clearTimeout(id)
      remaining -= new Date() - started
    }
    this.getTimerLeft = function () {
      if (running) {
        this.stop()
        this.start()
      }
      return remaining
    }
    this.getStateRunning = function () {
      return running
    }
    this.start()
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Timer;



/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = setParameters;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__classes_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sweetalert2__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultInputValidators__ = __webpack_require__(194);






/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */
function setParameters (params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(__WEBPACK_IMPORTED_MODULE_4__defaultInputValidators__["a" /* default */]).forEach((key) => {
      if (params.input === key) {
        params.inputValidator = params.expectRejections ? __WEBPACK_IMPORTED_MODULE_4__defaultInputValidators__["a" /* default */][key] : __WEBPACK_IMPORTED_MODULE_3__sweetalert2__["default"].adaptInputValidator(__WEBPACK_IMPORTED_MODULE_4__defaultInputValidators__["a" /* default */][key])
      }
    })
  }

  // Determine if the custom target element is valid
  if (
    !params.target ||
    (typeof params.target === 'string' && !document.querySelector(params.target)) ||
    (typeof params.target !== 'string' && !params.target.appendChild)
  ) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["f" /* warn */])('Target parameter is not valid, defaulting to "body"')
    params.target = 'body'
  }

  let popup
  const oldPopup = __WEBPACK_IMPORTED_MODULE_2__dom_index__["q" /* getPopup */]()
  let targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target
  // If the model target has changed, refresh the popup
  if (oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    popup = __WEBPACK_IMPORTED_MODULE_2__dom_index__["w" /* init */](params)
  } else {
    popup = oldPopup || __WEBPACK_IMPORTED_MODULE_2__dom_index__["w" /* init */](params)
  }

  // Set popup width
  if (params.width) {
    popup.style.width = (typeof params.width === 'number') ? params.width + 'px' : params.width
  }

  // Set popup padding
  if (params.padding) {
    popup.style.padding = (typeof params.padding === 'number') ? params.padding + 'px' : params.padding
  }

  // Set popup background
  if (params.background) {
    popup.style.background = params.background
  }
  const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color')
  const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix')
  for (let i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor
  }

  const container = __WEBPACK_IMPORTED_MODULE_2__dom_index__["k" /* getContainer */]()
  const title = __WEBPACK_IMPORTED_MODULE_2__dom_index__["s" /* getTitle */]()
  const content = __WEBPACK_IMPORTED_MODULE_2__dom_index__["l" /* getContent */]().querySelector('#' + __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].content)
  const actions = __WEBPACK_IMPORTED_MODULE_2__dom_index__["e" /* getActions */]()
  const confirmButton = __WEBPACK_IMPORTED_MODULE_2__dom_index__["j" /* getConfirmButton */]()
  const cancelButton = __WEBPACK_IMPORTED_MODULE_2__dom_index__["g" /* getCancelButton */]()
  const closeButton = __WEBPACK_IMPORTED_MODULE_2__dom_index__["i" /* getCloseButton */]()
  const footer = __WEBPACK_IMPORTED_MODULE_2__dom_index__["n" /* getFooter */]()

  // Title
  if (params.titleText) {
    title.innerText = params.titleText
  } else if (params.title) {
    title.innerHTML = params.title.split('\n').join('<br />')
  }

  if (typeof params.backdrop === 'string') {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["k" /* getContainer */]().style.background = params.backdrop
  } else if (!params.backdrop) {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */]([document.documentElement, document.body], __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */]['no-backdrop'])
  }

  // Content as HTML
  if (params.html) {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["C" /* parseHtmlToContainer */](params.html, content)

    // Content as plain text
  } else if (params.text) {
    content.textContent = params.text
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["F" /* show */](content)
  } else {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["v" /* hide */](content)
  }

  // Position
  if (params.position in __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */]) {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */](container, __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */][params.position])
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["f" /* warn */])('The "position" parameter is not valid, defaulting to "center"')
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */](container, __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].center)
  }

  // Grow
  if (params.grow && typeof params.grow === 'string') {
    let growClass = 'grow-' + params.grow
    if (growClass in __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */]) {
      __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */](container, __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */][growClass])
    }
  }

  // Animation
  if (typeof params.animation === 'function') {
    params.animation = params.animation.call()
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel)
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["F" /* show */](closeButton)
  } else {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["v" /* hide */](closeButton)
  }

  // Default Class
  popup.className = __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].popup
  if (params.toast) {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */]([document.documentElement, document.body], __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */]['toast-shown'])
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */](popup, __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].toast)
  } else {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */](popup, __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].modal)
  }

  // Custom Class
  if (params.customClass) {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */](popup, params.customClass)
  }

  // Progress steps
  let progressStepsContainer = __WEBPACK_IMPORTED_MODULE_2__dom_index__["r" /* getProgressSteps */]()
  let currentProgressStep = parseInt(params.currentProgressStep === null ? __WEBPACK_IMPORTED_MODULE_3__sweetalert2__["default"].getQueueStep() : params.currentProgressStep, 10)
  if (params.progressSteps && params.progressSteps.length) {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["F" /* show */](progressStepsContainer)
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["c" /* empty */](progressStepsContainer)
    if (currentProgressStep >= params.progressSteps.length) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["f" /* warn */])(
        'Invalid currentProgressStep parameter, it should be less than progressSteps.length ' +
        '(currentProgressStep like JS arrays starts from 0)'
      )
    }
    params.progressSteps.forEach((step, index) => {
      let circle = document.createElement('li')
      __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */](circle, __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].progresscircle)
      circle.innerHTML = step
      if (index === currentProgressStep) {
        __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */](circle, __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].activeprogressstep)
      }
      progressStepsContainer.appendChild(circle)
      if (index !== params.progressSteps.length - 1) {
        let line = document.createElement('li')
        __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */](line, __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].progressline)
        if (params.progressStepsDistance) {
          line.style.width = params.progressStepsDistance
        }
        progressStepsContainer.appendChild(line)
      }
    })
  } else {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["v" /* hide */](progressStepsContainer)
  }

  // Icon
  const icons = __WEBPACK_IMPORTED_MODULE_2__dom_index__["o" /* getIcons */]()
  for (let i = 0; i < icons.length; i++) {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["v" /* hide */](icons[i])
  }
  if (params.type) {
    let validType = false
    for (let iconType in __WEBPACK_IMPORTED_MODULE_0__classes_js__["a" /* iconTypes */]) {
      if (params.type === iconType) {
        validType = true
        break
      }
    }
    if (!validType) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["b" /* error */])(`Unknown alert type: ${params.type}`)
      return false
    }
    const icon = popup.querySelector(`.${__WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].icon}.${__WEBPACK_IMPORTED_MODULE_0__classes_js__["a" /* iconTypes */][params.type]}`)
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["F" /* show */](icon)

    // Animate icon
    if (params.animation) {
      __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */](icon, `swal2-animate-${params.type}-icon`)
    }
  }

  // Custom image
  const image = __WEBPACK_IMPORTED_MODULE_2__dom_index__["p" /* getImage */]()
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl)
    image.setAttribute('alt', params.imageAlt)
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["F" /* show */](image)

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth)
    } else {
      image.removeAttribute('width')
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight)
    } else {
      image.removeAttribute('height')
    }

    image.className = __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].image
    if (params.imageClass) {
      __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */](image, params.imageClass)
    }
  } else {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["v" /* hide */](image)
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block'
  } else {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["v" /* hide */](cancelButton)
  }

  // Confirm button
  if (params.showConfirmButton) {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["E" /* removeStyleProperty */](confirmButton, 'display')
  } else {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["v" /* hide */](confirmButton)
  }

  // Actions (buttons) wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["v" /* hide */](actions)
  } else {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["F" /* show */](actions)
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText
  cancelButton.innerHTML = params.cancelButtonText

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel)
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel)

  // Add buttons custom classes
  confirmButton.className = __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].confirm
  __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */](confirmButton, params.confirmButtonClass)
  cancelButton.className = __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].cancel
  __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */](cancelButton, params.cancelButtonClass)

  // Buttons styling
  if (params.buttonsStyling) {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */]([confirmButton, cancelButton], __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].styled)

    // Buttons background colors
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor
    }

    // Loading state
    const confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color')
    confirmButton.style.borderLeftColor = confirmButtonBackgroundColor
    confirmButton.style.borderRightColor = confirmButtonBackgroundColor
  } else {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["D" /* removeClass */]([confirmButton, cancelButton], __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].styled)

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = ''
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = ''
  }

  // Footer
  __WEBPACK_IMPORTED_MODULE_2__dom_index__["C" /* parseHtmlToContainer */](params.footer, footer)

  // CSS animation
  if (params.animation === true) {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["D" /* removeClass */](popup, __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].noanimation)
  } else {
    __WEBPACK_IMPORTED_MODULE_2__dom_index__["a" /* addClass */](popup, __WEBPACK_IMPORTED_MODULE_0__classes_js__["b" /* swalClasses */].noanimation)
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_js__["f" /* warn */])(
      'showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' +
      'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' +
      'https://sweetalert2.github.io/#ajax-request'
    )
  }
}



/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  email: (string, extraParams) => {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string)
      ? Promise.resolve()
      : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid email address')
  },
  url: (string, extraParams) => {
    // taken from https://stackoverflow.com/a/3809435/1331425
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(string)
      ? Promise.resolve()
      : Promise.reject(extraParams && extraParams.validationMessage ? extraParams.validationMessage : 'Invalid URL')
  }
});


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scrollbarFix__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iosFix__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globalState__ = __webpack_require__(29);






/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */
const openPopup = (params) => {
  const container = __WEBPACK_IMPORTED_MODULE_0__dom_index__["k" /* getContainer */]()
  const popup = __WEBPACK_IMPORTED_MODULE_0__dom_index__["q" /* getPopup */]()

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup)
  }

  if (params.animation) {
    __WEBPACK_IMPORTED_MODULE_0__dom_index__["a" /* addClass */](popup, __WEBPACK_IMPORTED_MODULE_1__classes__["b" /* swalClasses */].show)
    __WEBPACK_IMPORTED_MODULE_0__dom_index__["a" /* addClass */](container, __WEBPACK_IMPORTED_MODULE_1__classes__["b" /* swalClasses */].fade)
    __WEBPACK_IMPORTED_MODULE_0__dom_index__["D" /* removeClass */](popup, __WEBPACK_IMPORTED_MODULE_1__classes__["b" /* swalClasses */].hide)
  } else {
    __WEBPACK_IMPORTED_MODULE_0__dom_index__["D" /* removeClass */](popup, __WEBPACK_IMPORTED_MODULE_1__classes__["b" /* swalClasses */].fade)
  }
  __WEBPACK_IMPORTED_MODULE_0__dom_index__["F" /* show */](popup)

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden'
  if (__WEBPACK_IMPORTED_MODULE_0__dom_index__["b" /* animationEndEvent */] && !__WEBPACK_IMPORTED_MODULE_0__dom_index__["u" /* hasClass */](popup, __WEBPACK_IMPORTED_MODULE_1__classes__["b" /* swalClasses */].noanimation)) {
    popup.addEventListener(__WEBPACK_IMPORTED_MODULE_0__dom_index__["b" /* animationEndEvent */], function swalCloseEventFinished () {
      popup.removeEventListener(__WEBPACK_IMPORTED_MODULE_0__dom_index__["b" /* animationEndEvent */], swalCloseEventFinished)
      container.style.overflowY = 'auto'
    })
  } else {
    container.style.overflowY = 'auto'
  }

  __WEBPACK_IMPORTED_MODULE_0__dom_index__["a" /* addClass */]([document.documentElement, document.body, container], __WEBPACK_IMPORTED_MODULE_1__classes__["b" /* swalClasses */].shown)
  if (params.heightAuto && params.backdrop && !params.toast) {
    __WEBPACK_IMPORTED_MODULE_0__dom_index__["a" /* addClass */]([document.documentElement, document.body], __WEBPACK_IMPORTED_MODULE_1__classes__["b" /* swalClasses */]['height-auto'])
  }

  if (__WEBPACK_IMPORTED_MODULE_0__dom_index__["y" /* isModal */]()) {
    Object(__WEBPACK_IMPORTED_MODULE_2__scrollbarFix__["a" /* fixScrollbar */])()
    Object(__WEBPACK_IMPORTED_MODULE_3__iosFix__["a" /* iOSfix */])()
  }
  if (!__WEBPACK_IMPORTED_MODULE_4__globalState__["a" /* default */].previousActiveElement) {
    __WEBPACK_IMPORTED_MODULE_4__globalState__["a" /* default */].previousActiveElement = document.activeElement
  }
  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(() => {
      params.onOpen(popup)
    })
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = openPopup;



/***/ })
/******/ ]);