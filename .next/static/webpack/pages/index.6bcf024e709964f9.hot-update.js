"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Buttons/memoryCellButton/MemoryCellButton.tsx":
/*!******************************************************************!*\
  !*** ./components/Buttons/memoryCellButton/MemoryCellButton.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MemoryCellButton\": function() { return /* binding */ MemoryCellButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"./components/Buttons/memoryCellButton/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet chosenCellValue = [];\nlet chosenCellElements = [];\nconst choseMemoryCell = (event)=>{\n    const cell = event.currentTarget.innerHTML;\n    const cellElement = event.currentTarget;\n    chosenCellValue.push(cell);\n    chosenCellElements.push(cellElement);\n    console.log(chosenCellElements);\n    if (chosenCellValue.length === 2 && chosenCellValue[1] === chosenCellValue[0]) {\n        console.log(\"You gat me\");\n        chosenCellValue = [];\n    } else if (chosenCellValue.length === 2 && chosenCellValue[1] !== chosenCellValue[0]) {\n        console.log(\"Try again\");\n        chosenCellValue = [];\n        chosenCellElements = [];\n    }\n};\nconst MemoryCellButton = (props)=>{\n    const { buttonName  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        \"data-testid\": \"button_element\",\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().memoryCellButton),\n        onClick: (event)=>{\n            choseMemoryCell(event);\n        },\n        children: buttonName\n    }, void 0, false, {\n        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory Game/components/Buttons/memoryCellButton/MemoryCellButton.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MemoryCellButton;\nvar _c;\n$RefreshReg$(_c, \"MemoryCellButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbnMvbWVtb3J5Q2VsbEJ1dHRvbi9NZW1vcnlDZWxsQnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFDUjtBQU16QyxJQUFJRSxrQkFBNEIsRUFBRTtBQUNsQyxJQUFJQyxxQkFBb0MsRUFBRTtBQUUxQyxNQUFNQyxrQkFBa0IsQ0FBQ0MsUUFBMkQ7SUFDbEYsTUFBTUMsT0FBT0QsTUFBTUUsYUFBYSxDQUFDQyxTQUFTO0lBQzFDLE1BQU1DLGNBQTJCSixNQUFNRSxhQUFhO0lBRXBETCxnQkFBZ0JRLElBQUksQ0FBQ0o7SUFDckJILG1CQUFtQk8sSUFBSSxDQUFDRDtJQUV4QkUsUUFBUUMsR0FBRyxDQUFDVDtJQUVaLElBQUlELGdCQUFnQlcsTUFBTSxLQUFLLEtBQUtYLGVBQWUsQ0FBQyxFQUFFLEtBQUtBLGVBQWUsQ0FBQyxFQUFFLEVBQUU7UUFDN0VTLFFBQVFDLEdBQUcsQ0FBQztRQUNaVixrQkFBa0IsRUFBRTtJQUN0QixPQUFPLElBQUlBLGdCQUFnQlcsTUFBTSxLQUFLLEtBQUtYLGVBQWUsQ0FBQyxFQUFFLEtBQUtBLGVBQWUsQ0FBQyxFQUFFLEVBQUU7UUFDcEZTLFFBQVFDLEdBQUcsQ0FBQztRQUNaVixrQkFBa0IsRUFBRTtRQUNwQkMscUJBQXFCLEVBQUU7SUFDekIsQ0FBQztBQUNIO0FBRU8sTUFBTVcsbUJBQW1CLENBQUNDLFFBQWlDO0lBQ2hFLE1BQU0sRUFBRUMsV0FBVSxFQUFFLEdBQUdEO0lBRXZCLHFCQUNFLDhEQUFDRTtRQUNDQyxlQUFZO1FBQ1pDLFdBQVdsQiw0RUFBdUI7UUFDbENvQixTQUFTLENBQUNoQixRQUFpRTtZQUN6RUQsZ0JBQWdCQztRQUNsQjtrQkFFQ1c7Ozs7OztBQUdQLEVBQUU7S0FkV0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b25zL21lbW9yeUNlbGxCdXR0b24vTWVtb3J5Q2VsbEJ1dHRvbi50c3g/Zjc2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuXG50eXBlIG1lbW9yeUNlbGxCdXR0b25Qcm9wcyA9IHtcbiAgYnV0dG9uTmFtZTogc3RyaW5nO1xufTtcblxubGV0IGNob3NlbkNlbGxWYWx1ZTogc3RyaW5nW10gPSBbXTtcbmxldCBjaG9zZW5DZWxsRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuY29uc3QgY2hvc2VNZW1vcnlDZWxsID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xuICBjb25zdCBjZWxsID0gZXZlbnQuY3VycmVudFRhcmdldC5pbm5lckhUTUw7XG4gIGNvbnN0IGNlbGxFbGVtZW50OiBIVE1MRWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgY2hvc2VuQ2VsbFZhbHVlLnB1c2goY2VsbCk7XG4gIGNob3NlbkNlbGxFbGVtZW50cy5wdXNoKGNlbGxFbGVtZW50KTtcblxuICBjb25zb2xlLmxvZyhjaG9zZW5DZWxsRWxlbWVudHMpO1xuXG4gIGlmIChjaG9zZW5DZWxsVmFsdWUubGVuZ3RoID09PSAyICYmIGNob3NlbkNlbGxWYWx1ZVsxXSA9PT0gY2hvc2VuQ2VsbFZhbHVlWzBdKSB7XG4gICAgY29uc29sZS5sb2coJ1lvdSBnYXQgbWUnKTtcbiAgICBjaG9zZW5DZWxsVmFsdWUgPSBbXTtcbiAgfSBlbHNlIGlmIChjaG9zZW5DZWxsVmFsdWUubGVuZ3RoID09PSAyICYmIGNob3NlbkNlbGxWYWx1ZVsxXSAhPT0gY2hvc2VuQ2VsbFZhbHVlWzBdKSB7XG4gICAgY29uc29sZS5sb2coJ1RyeSBhZ2FpbicpO1xuICAgIGNob3NlbkNlbGxWYWx1ZSA9IFtdO1xuICAgIGNob3NlbkNlbGxFbGVtZW50cyA9IFtdO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgTWVtb3J5Q2VsbEJ1dHRvbiA9IChwcm9wczogbWVtb3J5Q2VsbEJ1dHRvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYnV0dG9uTmFtZSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBkYXRhLXRlc3RpZD1cImJ1dHRvbl9lbGVtZW50XCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lbW9yeUNlbGxCdXR0b259XG4gICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KTogdm9pZCA9PiB7XG4gICAgICAgIGNob3NlTWVtb3J5Q2VsbChldmVudCk7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtidXR0b25OYW1lfVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImNob3NlbkNlbGxWYWx1ZSIsImNob3NlbkNlbGxFbGVtZW50cyIsImNob3NlTWVtb3J5Q2VsbCIsImV2ZW50IiwiY2VsbCIsImN1cnJlbnRUYXJnZXQiLCJpbm5lckhUTUwiLCJjZWxsRWxlbWVudCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiTWVtb3J5Q2VsbEJ1dHRvbiIsInByb3BzIiwiYnV0dG9uTmFtZSIsImJ1dHRvbiIsImRhdGEtdGVzdGlkIiwiY2xhc3NOYW1lIiwibWVtb3J5Q2VsbEJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Buttons/memoryCellButton/MemoryCellButton.tsx\n"));

/***/ })

});