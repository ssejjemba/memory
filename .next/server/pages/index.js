/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Buttons/memoryCellButton/styles.module.css":
/*!***************************************************************!*\
  !*** ./components/Buttons/memoryCellButton/styles.module.css ***!
  \***************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"memoryCellButton\": \"styles_memoryCellButton__jzop3\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbnMvbWVtb3J5Q2VsbEJ1dHRvbi9zdHlsZXMubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lbW9yeWdhbWUvLi9jb21wb25lbnRzL0J1dHRvbnMvbWVtb3J5Q2VsbEJ1dHRvbi9zdHlsZXMubW9kdWxlLmNzcz80YjRjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1lbW9yeUNlbGxCdXR0b25cIjogXCJzdHlsZXNfbWVtb3J5Q2VsbEJ1dHRvbl9fanpvcDNcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Buttons/memoryCellButton/styles.module.css\n");

/***/ }),

/***/ "./components/Buttons/memoryCellButton/MemoryCellButton.tsx":
/*!******************************************************************!*\
  !*** ./components/Buttons/memoryCellButton/MemoryCellButton.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MemoryCellButton\": () => (/* binding */ MemoryCellButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"./components/Buttons/memoryCellButton/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet chosenCellValue = [];\nlet chosenCellElements = [];\nconst choseMemoryCell = (event)=>{\n    const cell = event.currentTarget.innerHTML;\n    const cellElement = event.currentTarget;\n    chosenCellValue.push(cell);\n    chosenCellElements.push(cellElement);\n    console.log(chosenCellElements);\n    if (chosenCellValue.length === 2 && chosenCellValue[1] === chosenCellValue[0]) {\n        //chnage styles for the chosen elements\n        //empty chosen cell values array\n        chosenCellValue = [];\n        //change styles of chosen matching cells\n        chosenCellElements = [];\n    } else if (chosenCellValue.length === 2 && chosenCellValue[1] !== chosenCellValue[0]) {\n        console.log(\"Try again\");\n        //empty chosen cell values array\n        chosenCellValue = [];\n        //empty chosen cell elements array\n        chosenCellElements = [];\n    }\n};\nconst MemoryCellButton = (props)=>{\n    const { buttonName  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        \"data-testid\": \"button_element\",\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().memoryCellButton),\n        onClick: (event)=>{\n            choseMemoryCell(event);\n        },\n        children: buttonName\n    }, void 0, false, {\n        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory Game/components/Buttons/memoryCellButton/MemoryCellButton.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbnMvbWVtb3J5Q2VsbEJ1dHRvbi9NZW1vcnlDZWxsQnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFDUjtBQU16QyxJQUFJRSxrQkFBNEIsRUFBRTtBQUNsQyxJQUFJQyxxQkFBb0MsRUFBRTtBQUUxQyxNQUFNQyxrQkFBa0IsQ0FBQ0MsUUFBMkQ7SUFDbEYsTUFBTUMsT0FBT0QsTUFBTUUsYUFBYSxDQUFDQyxTQUFTO0lBQzFDLE1BQU1DLGNBQTJCSixNQUFNRSxhQUFhO0lBRXBETCxnQkFBZ0JRLElBQUksQ0FBQ0o7SUFDckJILG1CQUFtQk8sSUFBSSxDQUFDRDtJQUV4QkUsUUFBUUMsR0FBRyxDQUFDVDtJQUVaLElBQUlELGdCQUFnQlcsTUFBTSxLQUFLLEtBQUtYLGVBQWUsQ0FBQyxFQUFFLEtBQUtBLGVBQWUsQ0FBQyxFQUFFLEVBQUU7UUFDN0UsdUNBQXVDO1FBRXZDLGdDQUFnQztRQUNoQ0Esa0JBQWtCLEVBQUU7UUFDcEIsd0NBQXdDO1FBQ3hDQyxxQkFBcUIsRUFBRTtJQUN6QixPQUFPLElBQUlELGdCQUFnQlcsTUFBTSxLQUFLLEtBQUtYLGVBQWUsQ0FBQyxFQUFFLEtBQUtBLGVBQWUsQ0FBQyxFQUFFLEVBQUU7UUFDcEZTLFFBQVFDLEdBQUcsQ0FBQztRQUNaLGdDQUFnQztRQUNoQ1Ysa0JBQWtCLEVBQUU7UUFDcEIsa0NBQWtDO1FBQ2xDQyxxQkFBcUIsRUFBRTtJQUN6QixDQUFDO0FBQ0g7QUFFTyxNQUFNVyxtQkFBbUIsQ0FBQ0MsUUFBaUM7SUFDaEUsTUFBTSxFQUFFQyxXQUFVLEVBQUUsR0FBR0Q7SUFFdkIscUJBQ0UsOERBQUNFO1FBQ0NDLGVBQVk7UUFDWkMsV0FBV2xCLDRFQUF1QjtRQUNsQ29CLFNBQVMsQ0FBQ2hCLFFBQWlFO1lBQ3pFRCxnQkFBZ0JDO1FBQ2xCO2tCQUVDVzs7Ozs7O0FBR1AsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL21lbW9yeWdhbWUvLi9jb21wb25lbnRzL0J1dHRvbnMvbWVtb3J5Q2VsbEJ1dHRvbi9NZW1vcnlDZWxsQnV0dG9uLnRzeD9mNzZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5cbnR5cGUgbWVtb3J5Q2VsbEJ1dHRvblByb3BzID0ge1xuICBidXR0b25OYW1lOiBzdHJpbmc7XG59O1xuXG5sZXQgY2hvc2VuQ2VsbFZhbHVlOiBzdHJpbmdbXSA9IFtdO1xubGV0IGNob3NlbkNlbGxFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG5jb25zdCBjaG9zZU1lbW9yeUNlbGwgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XG4gIGNvbnN0IGNlbGwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlubmVySFRNTDtcbiAgY29uc3QgY2VsbEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICBjaG9zZW5DZWxsVmFsdWUucHVzaChjZWxsKTtcbiAgY2hvc2VuQ2VsbEVsZW1lbnRzLnB1c2goY2VsbEVsZW1lbnQpO1xuXG4gIGNvbnNvbGUubG9nKGNob3NlbkNlbGxFbGVtZW50cyk7XG5cbiAgaWYgKGNob3NlbkNlbGxWYWx1ZS5sZW5ndGggPT09IDIgJiYgY2hvc2VuQ2VsbFZhbHVlWzFdID09PSBjaG9zZW5DZWxsVmFsdWVbMF0pIHtcbiAgICAvL2NobmFnZSBzdHlsZXMgZm9yIHRoZSBjaG9zZW4gZWxlbWVudHNcblxuICAgIC8vZW1wdHkgY2hvc2VuIGNlbGwgdmFsdWVzIGFycmF5XG4gICAgY2hvc2VuQ2VsbFZhbHVlID0gW107XG4gICAgLy9jaGFuZ2Ugc3R5bGVzIG9mIGNob3NlbiBtYXRjaGluZyBjZWxsc1xuICAgIGNob3NlbkNlbGxFbGVtZW50cyA9IFtdO1xuICB9IGVsc2UgaWYgKGNob3NlbkNlbGxWYWx1ZS5sZW5ndGggPT09IDIgJiYgY2hvc2VuQ2VsbFZhbHVlWzFdICE9PSBjaG9zZW5DZWxsVmFsdWVbMF0pIHtcbiAgICBjb25zb2xlLmxvZygnVHJ5IGFnYWluJyk7XG4gICAgLy9lbXB0eSBjaG9zZW4gY2VsbCB2YWx1ZXMgYXJyYXlcbiAgICBjaG9zZW5DZWxsVmFsdWUgPSBbXTtcbiAgICAvL2VtcHR5IGNob3NlbiBjZWxsIGVsZW1lbnRzIGFycmF5XG4gICAgY2hvc2VuQ2VsbEVsZW1lbnRzID0gW107XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBNZW1vcnlDZWxsQnV0dG9uID0gKHByb3BzOiBtZW1vcnlDZWxsQnV0dG9uUHJvcHMpID0+IHtcbiAgY29uc3QgeyBidXR0b25OYW1lIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGRhdGEtdGVzdGlkPVwiYnV0dG9uX2VsZW1lbnRcIlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVtb3J5Q2VsbEJ1dHRvbn1cbiAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pOiB2b2lkID0+IHtcbiAgICAgICAgY2hvc2VNZW1vcnlDZWxsKGV2ZW50KTtcbiAgICAgIH19XG4gICAgPlxuICAgICAge2J1dHRvbk5hbWV9XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiY2hvc2VuQ2VsbFZhbHVlIiwiY2hvc2VuQ2VsbEVsZW1lbnRzIiwiY2hvc2VNZW1vcnlDZWxsIiwiZXZlbnQiLCJjZWxsIiwiY3VycmVudFRhcmdldCIsImlubmVySFRNTCIsImNlbGxFbGVtZW50IiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJNZW1vcnlDZWxsQnV0dG9uIiwicHJvcHMiLCJidXR0b25OYW1lIiwiYnV0dG9uIiwiZGF0YS10ZXN0aWQiLCJjbGFzc05hbWUiLCJtZW1vcnlDZWxsQnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Buttons/memoryCellButton/MemoryCellButton.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Buttons_memoryCellButton_MemoryCellButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Buttons/memoryCellButton/MemoryCellButton */ \"./components/Buttons/memoryCellButton/MemoryCellButton.tsx\");\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Buttons_memoryCellButton_MemoryCellButton__WEBPACK_IMPORTED_MODULE_1__.MemoryCellButton, {\n                buttonName: \"1\"\n            }, void 0, false, {\n                fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory Game/pages/index.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Buttons_memoryCellButton_MemoryCellButton__WEBPACK_IMPORTED_MODULE_1__.MemoryCellButton, {\n                buttonName: \"2\"\n            }, void 0, false, {\n                fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory Game/pages/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Buttons_memoryCellButton_MemoryCellButton__WEBPACK_IMPORTED_MODULE_1__.MemoryCellButton, {\n                buttonName: \"3\"\n            }, void 0, false, {\n                fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory Game/pages/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Buttons_memoryCellButton_MemoryCellButton__WEBPACK_IMPORTED_MODULE_1__.MemoryCellButton, {\n                buttonName: \"3\"\n            }, void 0, false, {\n                fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory Game/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory Game/pages/index.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTJGO0FBSTVFLFNBQVNDLE9BQU87SUFDN0IscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0YsbUdBQWdCQTtnQkFBQ0csWUFBVzs7Ozs7OzBCQUM3Qiw4REFBQ0gsbUdBQWdCQTtnQkFBQ0csWUFBVzs7Ozs7OzBCQUM3Qiw4REFBQ0gsbUdBQWdCQTtnQkFBQ0csWUFBVzs7Ozs7OzBCQUM3Qiw4REFBQ0gsbUdBQWdCQTtnQkFBQ0csWUFBVzs7Ozs7Ozs7Ozs7O0FBR25DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZW1vcnlnYW1lLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVtb3J5Q2VsbEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9ucy9tZW1vcnlDZWxsQnV0dG9uL01lbW9yeUNlbGxCdXR0b24nO1xuaW1wb3J0IHsgQW5jaG9ySWNvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbnMvYW5jaG9yLWljb24vQW5jaG9ySWNvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TWVtb3J5Q2VsbEJ1dHRvbiBidXR0b25OYW1lPVwiMVwiIC8+XG4gICAgICA8TWVtb3J5Q2VsbEJ1dHRvbiBidXR0b25OYW1lPVwiMlwiIC8+XG4gICAgICA8TWVtb3J5Q2VsbEJ1dHRvbiBidXR0b25OYW1lPVwiM1wiIC8+XG4gICAgICA8TWVtb3J5Q2VsbEJ1dHRvbiBidXR0b25OYW1lPVwiM1wiIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTWVtb3J5Q2VsbEJ1dHRvbiIsIkhvbWUiLCJkaXYiLCJidXR0b25OYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();