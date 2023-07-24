/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constructor.js":
/*!****************************!*\
  !*** ./src/constructor.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Note: () => (/* binding */ Note),\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Project {\n  #name;\n  #tasks = [];\n  #notes = [];\n  #available = true;\n  constructor (name) {\n    this.#name = name;\n  }\n  getName () {\n    return this.#name;\n  }\n  getTasks () {\n    return this.#tasks;\n  }\n  getNotes () {\n    return this.#notes;\n  }\n  isAvalailable () {\n    return this.#available;\n  }\n  limit () {\n    this.#available = false;\n  }\n}\nclass Task {\n  #title;\n  #due;\n  #level;\n  #outro;\n  #completed = false;\n  constructor (title, due, level, outro) {\n    this.#title = title;\n    this.#due = new Date(due);\n    this.#level = level;\n    this.#outro = outro;\n  }\n  getTitle() {\n    return this.#title;\n  }\n  getDueDate() {\n    return this.#due;\n  }\n  getLevel() {\n    return this.#level;\n  }\n  getOutro () {\n    return this.#outro;\n  }\n  setTitle (string) {\n    this.#title = string;\n  }\n  setDue (date) {\n    this.#due = date;\n  }\n  setLevel (string) {\n    this.#level = string;\n  }\n  setOutro (string) {\n    this.#outro = string;\n  }\n  isCompleted () {\n    this.completed = true;\n  }\n  checkCompletion() {\n    return this.#completed;\n  }\n}\nclass Note {\n  #title;\n  #text;\n  #available = true;\n  constructor (title, text) {\n    this.#title = title;\n    this.#text = text;\n  }\n  getTitle() {\n    return this.#title;\n  }\n  getText() {\n    return this.#text;\n  }\n  setTitle(string) {\n    this.#title = string;\n  }\n  setText (string) {\n    this.#text = string;\n  }\n  isAvalailable () {\n    return this.#available;\n  }\n  limit () {\n    this.#available = false;\n  }\n}\n\n\n\n//# sourceURL=webpack://rebuild/./src/constructor.js?");

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideForm: () => (/* binding */ hideForm),\n/* harmony export */   newB: () => (/* binding */ newB),\n/* harmony export */   newNote: () => (/* binding */ newNote),\n/* harmony export */   newProject: () => (/* binding */ newProject),\n/* harmony export */   newTask: () => (/* binding */ newTask),\n/* harmony export */   showForm: () => (/* binding */ showForm),\n/* harmony export */   toggleMenu: () => (/* binding */ toggleMenu)\n/* harmony export */ });\n/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ \"./src/node.js\");\n  \n\nconst newB = document.querySelector('button.new'),\nmenu = document.querySelector('div.options'),\ntoggleMenu = () => {\n  menu.classList.toggle('show-form')\n  newB.textContent === '-' ? newB.textContent = '+' : newB.textContent = '-';\n},\nshowForm = (folder) => {\n  switch (folder) {\n    case 'project':\n      _node_js__WEBPACK_IMPORTED_MODULE_0__.formNodes.project.parent.classList.add('show-form');\n      break;\n    case 'note':\n      _node_js__WEBPACK_IMPORTED_MODULE_0__.formNodes.note.parent.classList.add('show-form');\n      break;\n    case 'task':\n      _node_js__WEBPACK_IMPORTED_MODULE_0__.formNodes.task.parent.classList.add('show-form');\n      break;\n  }\n  newB.classList.add('deep');\n  toggleMenu();\n  showOverlay()\n},\nhideForm = (folder) => {\n  switch (folder) {\n    case 'project':\n      _node_js__WEBPACK_IMPORTED_MODULE_0__.formNodes.project.parent.classList.remove('show-form');\n      break;\n    case 'note':\n      _node_js__WEBPACK_IMPORTED_MODULE_0__.formNodes.note.parent.classList.remove('show-form');\n      break;\n    case 'task':\n      _node_js__WEBPACK_IMPORTED_MODULE_0__.formNodes.task.parent.classList.remove('show-form');\n      break;\n  }\n  newB.classList.remove('deep');\n  toggleMenu();\n  hideOverlay()\n},\nnewProject = document.querySelector('button.menu.project'),\nnewTask = document.querySelector('button.menu.task'),\nnewNote = document.querySelector('button.menu.note');\nfunction showOverlay() {\n  _node_js__WEBPACK_IMPORTED_MODULE_0__.main.classList.add('overlay');\n}\nfunction hideOverlay() {\n  _node_js__WEBPACK_IMPORTED_MODULE_0__.main.classList.remove('overlay');\n}\n\n\n\n//# sourceURL=webpack://rebuild/./src/forms.js?");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonNodes: () => (/* binding */ buttonNodes),\n/* harmony export */   formNodes: () => (/* binding */ formNodes),\n/* harmony export */   main: () => (/* binding */ main),\n/* harmony export */   noteNodes: () => (/* binding */ noteNodes),\n/* harmony export */   projectNode: () => (/* binding */ projectNode),\n/* harmony export */   taskNodes: () => (/* binding */ taskNodes)\n/* harmony export */ });\nconst buttonNodes = {\n  \"daily\": document.querySelector('button.daily'),\n  \"home\": document.querySelector('button.center'),\n  \"weekly\": document.querySelector('button.weekly'),\n  \"creator\": document.querySelector('button.new'),\n},\nformNodes = {\n  \"project\": {\n    \"parent\":document.querySelector('form.new-project'),\n    \"name\": document.querySelector('#project-name'),\n  },\n  \"task\": {\n    \"parent\":document.querySelector('form.new-task'),\n    \"title\": document.querySelector('#task-title'),\n    \"due\": document.querySelector('#task-due'),\n    \"level\": document.querySelector('#task-priority'),\n    \"outro\": document.querySelector('#task-details'),\n  },\n  \"note\": {\n    \"parent\": document.querySelector('form.new-note'),\n    \"title\": document.querySelector('#note-title'),\n    \"text\": document.querySelector('#note-text'),\n  },\n},\ntaskNodes = function createTaskNode (title,due, priority) {\n  const parent = document.createElement('div'),\n  checkbox  = document.createElement('div'),\n  titleNode = document.createElement('h2'),\n  para = document.createElement('p'),\n  span = document.createElement('span');\n\n  parent.classList.add('task');\n  checkbox.setAttribute('role', 'checkbox')\n\n  titleNode.innerHTML = title;\n  para.innerHTML = due;\n  span.innerHTML = 'Remove';\n  switch (priority) {\n    case 'Hard':\n      parent.style.border = '2px solid red';\n      break;\n    case 'Medium':\n      parent.style.border = '2px solid green';\n      break;\n    default:\n      parent.style.border = '2px solid gray';\n      break;\n  }\n  parent.appendChild(checkbox);\n  parent.appendChild(titleNode);\n  parent.appendChild(para);\n  parent.appendChild(span);\n  return parent;\n},\nnoteNodes = function createTaskNode (title, text) {\n  const parent = document.createElement('div'),\n  titleNode = document.createElement('h2'),\n  para = document.createElement('p'),\n  span = document.createElement('span');\n\n  parent.classList.add('node');\n\n  titleNode.innerHTML = title;\n  para.innerHTML = text;\n  span.innerHTML = 'Remove';\n  parent.appendChild(titleNode);\n  parent.appendChild(para);\n  parent.appendChild(span);\n  return parent;\n},\nprojectNode = function (Text) {\n  const li = document.createElement('li'),\n  button = document.createElement('button');\n  button.textContent = Text;\n  li.appendChild(button);\n  return li;\n},\nmain = document.querySelector('.worker');\n\n\n//# sourceURL=webpack://rebuild/./src/node.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ \"./src/node.js\");\n/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.js */ \"./src/forms.js\");\n/* harmony import */ var _constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructor.js */ \"./src/constructor.js\");\n\n\n\n\n(function Addproject (argument) {\n  const project = _node_js__WEBPACK_IMPORTED_MODULE_0__.formNodes.project,\n  projectForm = project.parent,\n  name = project.name;\n\n  const task = _node_js__WEBPACK_IMPORTED_MODULE_0__.formNodes.task,\n  taskForm = task.parent,\n  title = task.title,\n  due = task.due,\n  level = task.due,\n  outro = task.outro;\n\n  const note = _node_js__WEBPACK_IMPORTED_MODULE_0__.formNodes.note,\n  noteForm = note.parent,\n  noteTitle = note.title,\n  noteText = note.title;\n\n  projectForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const createdProject = new _constructor_js__WEBPACK_IMPORTED_MODULE_2__.Project(name.value);\n    console.log(createdProject.getName());\n    e.target.reset();\n    (0,_forms_js__WEBPACK_IMPORTED_MODULE_1__.hideForm)('project')\n    ;(0,_forms_js__WEBPACK_IMPORTED_MODULE_1__.toggleMenu)()\n  })\n  taskForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const createdTask = new _constructor_js__WEBPACK_IMPORTED_MODULE_2__.Task (title.value, due.value, level.value, outro.value);\n    console.log(createdTask);\n    e.target.reset()\n    ;(0,_forms_js__WEBPACK_IMPORTED_MODULE_1__.hideForm)('task')\n    ;(0,_forms_js__WEBPACK_IMPORTED_MODULE_1__.toggleMenu)()\n    })\n  noteForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const createdNote = new _constructor_js__WEBPACK_IMPORTED_MODULE_2__.Note (noteTitle.value, noteText.value);\n    console.log(createdNote);\n    e.target.reset()\n    ;(0,_forms_js__WEBPACK_IMPORTED_MODULE_1__.hideForm)('note')\n    ;(0,_forms_js__WEBPACK_IMPORTED_MODULE_1__.toggleMenu)()\n  })\n})()\n\n//# sourceURL=webpack://rebuild/./src/storage.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/storage.js");
/******/ 	
/******/ })()
;