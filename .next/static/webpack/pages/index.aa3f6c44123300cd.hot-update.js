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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MemoryCellButton\": function() { return /* binding */ MemoryCellButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"./components/Buttons/memoryCellButton/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet chosenCellValue = [];\nlet chosenCellElements = [];\nconst choseMemoryCell = (event)=>{\n    const cell = event.currentTarget.innerHTML;\n    const cellElementid = event.currentTarget.id;\n    chosenCellValue.push(cell);\n    chosenCellElements.push(cellElementid);\n    console.log(chosenCellElements);\n    if (chosenCellValue.length === 2 && chosenCellValue[1] === chosenCellValue[0]) {\n        //chnage styles for the chosen elements\n        const firstChosenCell = document.getElementById(cellElementid[0]);\n        const secondChosenCell = document.getElementById(cellElementid[1]);\n        //empty chosen cell values array\n        chosenCellValue = [];\n        //change styles of chosen matching cells\n        chosenCellElements = [];\n    } else if (chosenCellValue.length === 2 && chosenCellValue[1] !== chosenCellValue[0]) {\n        console.log(\"Try again\");\n        //empty chosen cell values array\n        chosenCellValue = [];\n        //empty chosen cell elements array\n        chosenCellElements = [];\n    }\n};\nconst MemoryCellButton = (props)=>{\n    const { buttonName , id  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        \"data-testid\": \"button_element\",\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().memoryCellButton),\n        onClick: (event)=>{\n            choseMemoryCell(event);\n        },\n        id: id,\n        children: buttonName\n    }, void 0, false, {\n        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory Game/components/Buttons/memoryCellButton/MemoryCellButton.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MemoryCellButton;\nvar _c;\n$RefreshReg$(_c, \"MemoryCellButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbnMvbWVtb3J5Q2VsbEJ1dHRvbi9NZW1vcnlDZWxsQnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFDUjtBQU96QyxJQUFJRSxrQkFBNEIsRUFBRTtBQUNsQyxJQUFJQyxxQkFBK0IsRUFBRTtBQUVyQyxNQUFNQyxrQkFBa0IsQ0FBQ0MsUUFBMkQ7SUFDbEYsTUFBTUMsT0FBT0QsTUFBTUUsYUFBYSxDQUFDQyxTQUFTO0lBQzFDLE1BQU1DLGdCQUF3QkosTUFBTUUsYUFBYSxDQUFDRyxFQUFFO0lBRXBEUixnQkFBZ0JTLElBQUksQ0FBQ0w7SUFDckJILG1CQUFtQlEsSUFBSSxDQUFDRjtJQUV4QkcsUUFBUUMsR0FBRyxDQUFDVjtJQUVaLElBQUlELGdCQUFnQlksTUFBTSxLQUFLLEtBQUtaLGVBQWUsQ0FBQyxFQUFFLEtBQUtBLGVBQWUsQ0FBQyxFQUFFLEVBQUU7UUFDN0UsdUNBQXVDO1FBQ3ZDLE1BQU1hLGtCQUFrQkMsU0FBU0MsY0FBYyxDQUFDUixhQUFhLENBQUMsRUFBRTtRQUNoRSxNQUFNUyxtQkFBbUJGLFNBQVNDLGNBQWMsQ0FBQ1IsYUFBYSxDQUFDLEVBQUU7UUFFakUsZ0NBQWdDO1FBQ2hDUCxrQkFBa0IsRUFBRTtRQUNwQix3Q0FBd0M7UUFDeENDLHFCQUFxQixFQUFFO0lBQ3pCLE9BQU8sSUFBSUQsZ0JBQWdCWSxNQUFNLEtBQUssS0FBS1osZUFBZSxDQUFDLEVBQUUsS0FBS0EsZUFBZSxDQUFDLEVBQUUsRUFBRTtRQUNwRlUsUUFBUUMsR0FBRyxDQUFDO1FBQ1osZ0NBQWdDO1FBQ2hDWCxrQkFBa0IsRUFBRTtRQUNwQixrQ0FBa0M7UUFDbENDLHFCQUFxQixFQUFFO0lBQ3pCLENBQUM7QUFDSDtBQUVPLE1BQU1nQixtQkFBbUIsQ0FBQ0MsUUFBaUM7SUFDaEUsTUFBTSxFQUFFQyxXQUFVLEVBQUVYLEdBQUUsRUFBRSxHQUFHVTtJQUUzQixxQkFDRSw4REFBQ0U7UUFDQ0MsZUFBWTtRQUNaQyxXQUFXdkIsNEVBQXVCO1FBQ2xDeUIsU0FBUyxDQUFDckIsUUFBaUU7WUFDekVELGdCQUFnQkM7UUFDbEI7UUFDQUssSUFBSUE7a0JBRUhXOzs7Ozs7QUFHUCxFQUFFO0tBZldGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnV0dG9ucy9tZW1vcnlDZWxsQnV0dG9uL01lbW9yeUNlbGxCdXR0b24udHN4P2Y3NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IE1vdXNlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcblxudHlwZSBtZW1vcnlDZWxsQnV0dG9uUHJvcHMgPSB7XG4gIGJ1dHRvbk5hbWU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbn07XG5cbmxldCBjaG9zZW5DZWxsVmFsdWU6IHN0cmluZ1tdID0gW107XG5sZXQgY2hvc2VuQ2VsbEVsZW1lbnRzOiBzdHJpbmdbXSA9IFtdO1xuXG5jb25zdCBjaG9zZU1lbW9yeUNlbGwgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XG4gIGNvbnN0IGNlbGwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlubmVySFRNTDtcbiAgY29uc3QgY2VsbEVsZW1lbnRpZDogc3RyaW5nID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcblxuICBjaG9zZW5DZWxsVmFsdWUucHVzaChjZWxsKTtcbiAgY2hvc2VuQ2VsbEVsZW1lbnRzLnB1c2goY2VsbEVsZW1lbnRpZCk7XG5cbiAgY29uc29sZS5sb2coY2hvc2VuQ2VsbEVsZW1lbnRzKTtcblxuICBpZiAoY2hvc2VuQ2VsbFZhbHVlLmxlbmd0aCA9PT0gMiAmJiBjaG9zZW5DZWxsVmFsdWVbMV0gPT09IGNob3NlbkNlbGxWYWx1ZVswXSkge1xuICAgIC8vY2huYWdlIHN0eWxlcyBmb3IgdGhlIGNob3NlbiBlbGVtZW50c1xuICAgIGNvbnN0IGZpcnN0Q2hvc2VuQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNlbGxFbGVtZW50aWRbMF0pO1xuICAgIGNvbnN0IHNlY29uZENob3NlbkNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsRWxlbWVudGlkWzFdKTtcblxuICAgIC8vZW1wdHkgY2hvc2VuIGNlbGwgdmFsdWVzIGFycmF5XG4gICAgY2hvc2VuQ2VsbFZhbHVlID0gW107XG4gICAgLy9jaGFuZ2Ugc3R5bGVzIG9mIGNob3NlbiBtYXRjaGluZyBjZWxsc1xuICAgIGNob3NlbkNlbGxFbGVtZW50cyA9IFtdO1xuICB9IGVsc2UgaWYgKGNob3NlbkNlbGxWYWx1ZS5sZW5ndGggPT09IDIgJiYgY2hvc2VuQ2VsbFZhbHVlWzFdICE9PSBjaG9zZW5DZWxsVmFsdWVbMF0pIHtcbiAgICBjb25zb2xlLmxvZygnVHJ5IGFnYWluJyk7XG4gICAgLy9lbXB0eSBjaG9zZW4gY2VsbCB2YWx1ZXMgYXJyYXlcbiAgICBjaG9zZW5DZWxsVmFsdWUgPSBbXTtcbiAgICAvL2VtcHR5IGNob3NlbiBjZWxsIGVsZW1lbnRzIGFycmF5XG4gICAgY2hvc2VuQ2VsbEVsZW1lbnRzID0gW107XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBNZW1vcnlDZWxsQnV0dG9uID0gKHByb3BzOiBtZW1vcnlDZWxsQnV0dG9uUHJvcHMpID0+IHtcbiAgY29uc3QgeyBidXR0b25OYW1lLCBpZCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBkYXRhLXRlc3RpZD1cImJ1dHRvbl9lbGVtZW50XCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lbW9yeUNlbGxCdXR0b259XG4gICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KTogdm9pZCA9PiB7XG4gICAgICAgIGNob3NlTWVtb3J5Q2VsbChldmVudCk7XG4gICAgICB9fVxuICAgICAgaWQ9e2lkfVxuICAgID5cbiAgICAgIHtidXR0b25OYW1lfVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsImNob3NlbkNlbGxWYWx1ZSIsImNob3NlbkNlbGxFbGVtZW50cyIsImNob3NlTWVtb3J5Q2VsbCIsImV2ZW50IiwiY2VsbCIsImN1cnJlbnRUYXJnZXQiLCJpbm5lckhUTUwiLCJjZWxsRWxlbWVudGlkIiwiaWQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImZpcnN0Q2hvc2VuQ2VsbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZWNvbmRDaG9zZW5DZWxsIiwiTWVtb3J5Q2VsbEJ1dHRvbiIsInByb3BzIiwiYnV0dG9uTmFtZSIsImJ1dHRvbiIsImRhdGEtdGVzdGlkIiwiY2xhc3NOYW1lIiwibWVtb3J5Q2VsbEJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Buttons/memoryCellButton/MemoryCellButton.tsx\n"));

/***/ })

});