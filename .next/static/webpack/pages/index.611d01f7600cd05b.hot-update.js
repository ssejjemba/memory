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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MemoryCellButton\": function() { return /* binding */ MemoryCellButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"./components/Buttons/memoryCellButton/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet chosenCellValue = [];\nlet chosenCellElement = [];\nconst choseMemoryCell = (event)=>{\n    const cell = event.currentTarget.innerHTML;\n    const cellElement = event.currentTarget;\n    chosenCellValue.push(cell);\n    chosenCellElement.push(cellElement);\n    if (chosenCellValue.length === 2 && chosenCellValue[1] === chosenCellValue[0]) {\n        console.log(\"You gat me\");\n        chosenCellValue = [];\n    } else if (chosenCellValue.length === 2 && chosenCellValue[1] !== chosenCellValue[0]) {\n        console.log(\"Try again\");\n        chosenCellValue = [];\n        chosenCellElement = [];\n    }\n};\nconst MemoryCellButton = (props)=>{\n    const { buttonName  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        \"data-testid\": \"button_element\",\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().memoryCellButton),\n        onClick: (event)=>{\n            choseMemoryCell(event);\n        },\n        children: buttonName\n    }, void 0, false, {\n        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory Game/components/Buttons/memoryCellButton/MemoryCellButton.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MemoryCellButton;\nvar _c;\n$RefreshReg$(_c, \"MemoryCellButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbnMvbWVtb3J5Q2VsbEJ1dHRvbi9NZW1vcnlDZWxsQnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFDUjtBQU16QyxJQUFJRSxrQkFBNEIsRUFBRTtBQUNsQyxJQUFJQyxvQkFBd0IsRUFBRTtBQUU5QixNQUFNQyxrQkFBa0IsQ0FBQ0MsUUFBMkQ7SUFDbEYsTUFBTUMsT0FBT0QsTUFBTUUsYUFBYSxDQUFDQyxTQUFTO0lBQzFDLE1BQU1DLGNBQTJCSixNQUFNRSxhQUFhO0lBRXBETCxnQkFBZ0JRLElBQUksQ0FBQ0o7SUFDckJILGtCQUFrQk8sSUFBSSxDQUFDRDtJQUN2QixJQUFJUCxnQkFBZ0JTLE1BQU0sS0FBSyxLQUFLVCxlQUFlLENBQUMsRUFBRSxLQUFLQSxlQUFlLENBQUMsRUFBRSxFQUFFO1FBQzdFVSxRQUFRQyxHQUFHLENBQUM7UUFDWlgsa0JBQWtCLEVBQUU7SUFDdEIsT0FBTyxJQUFJQSxnQkFBZ0JTLE1BQU0sS0FBSyxLQUFLVCxlQUFlLENBQUMsRUFBRSxLQUFLQSxlQUFlLENBQUMsRUFBRSxFQUFFO1FBQ3BGVSxRQUFRQyxHQUFHLENBQUM7UUFDWlgsa0JBQWtCLEVBQUU7UUFDcEJDLG9CQUFvQixFQUFFO0lBQ3hCLENBQUM7QUFDSDtBQUVPLE1BQU1XLG1CQUFtQixDQUFDQyxRQUFpQztJQUNoRSxNQUFNLEVBQUVDLFdBQVUsRUFBRSxHQUFHRDtJQUV2QixxQkFDRSw4REFBQ0U7UUFDQ0MsZUFBWTtRQUNaQyxXQUFXbEIsNEVBQXVCO1FBQ2xDb0IsU0FBUyxDQUFDaEIsUUFBaUU7WUFDekVELGdCQUFnQkM7UUFDbEI7a0JBRUNXOzs7Ozs7QUFHUCxFQUFFO0tBZFdGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnV0dG9ucy9tZW1vcnlDZWxsQnV0dG9uL01lbW9yeUNlbGxCdXR0b24udHN4P2Y3NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcblxudHlwZSBtZW1vcnlDZWxsQnV0dG9uUHJvcHMgPSB7XG4gIGJ1dHRvbk5hbWU6IHN0cmluZztcbn07XG5cbmxldCBjaG9zZW5DZWxsVmFsdWU6IHN0cmluZ1tdID0gW107XG5sZXQgY2hvc2VuQ2VsbEVsZW1lbnQ6IFtdID0gW107XG5cbmNvbnN0IGNob3NlTWVtb3J5Q2VsbCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgY29uc3QgY2VsbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaW5uZXJIVE1MO1xuICBjb25zdCBjZWxsRWxlbWVudDogSFRNTEVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gIGNob3NlbkNlbGxWYWx1ZS5wdXNoKGNlbGwpO1xuICBjaG9zZW5DZWxsRWxlbWVudC5wdXNoKGNlbGxFbGVtZW50KTtcbiAgaWYgKGNob3NlbkNlbGxWYWx1ZS5sZW5ndGggPT09IDIgJiYgY2hvc2VuQ2VsbFZhbHVlWzFdID09PSBjaG9zZW5DZWxsVmFsdWVbMF0pIHtcbiAgICBjb25zb2xlLmxvZygnWW91IGdhdCBtZScpO1xuICAgIGNob3NlbkNlbGxWYWx1ZSA9IFtdO1xuICB9IGVsc2UgaWYgKGNob3NlbkNlbGxWYWx1ZS5sZW5ndGggPT09IDIgJiYgY2hvc2VuQ2VsbFZhbHVlWzFdICE9PSBjaG9zZW5DZWxsVmFsdWVbMF0pIHtcbiAgICBjb25zb2xlLmxvZygnVHJ5IGFnYWluJyk7XG4gICAgY2hvc2VuQ2VsbFZhbHVlID0gW107XG4gICAgY2hvc2VuQ2VsbEVsZW1lbnQgPSBbXTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IE1lbW9yeUNlbGxCdXR0b24gPSAocHJvcHM6IG1lbW9yeUNlbGxCdXR0b25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGJ1dHRvbk5hbWUgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgZGF0YS10ZXN0aWQ9XCJidXR0b25fZWxlbWVudFwiXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW1vcnlDZWxsQnV0dG9ufVxuICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50Pik6IHZvaWQgPT4ge1xuICAgICAgICBjaG9zZU1lbW9yeUNlbGwoZXZlbnQpO1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7YnV0dG9uTmFtZX1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJjaG9zZW5DZWxsVmFsdWUiLCJjaG9zZW5DZWxsRWxlbWVudCIsImNob3NlTWVtb3J5Q2VsbCIsImV2ZW50IiwiY2VsbCIsImN1cnJlbnRUYXJnZXQiLCJpbm5lckhUTUwiLCJjZWxsRWxlbWVudCIsInB1c2giLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiTWVtb3J5Q2VsbEJ1dHRvbiIsInByb3BzIiwiYnV0dG9uTmFtZSIsImJ1dHRvbiIsImRhdGEtdGVzdGlkIiwiY2xhc3NOYW1lIiwibWVtb3J5Q2VsbEJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Buttons/memoryCellButton/MemoryCellButton.tsx\n"));

/***/ })

});