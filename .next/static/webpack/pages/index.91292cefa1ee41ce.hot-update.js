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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MemoryCellButton\": function() { return /* binding */ MemoryCellButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"./components/Buttons/memoryCellButton/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet chosenCellValue = [];\nlet chosenCellElements = [];\nconst choseMemoryCell = (event)=>{\n    const cell = event.currentTarget.innerHTML;\n    const cellElementid = event.currentTarget.id;\n    chosenCellValue.push(cell);\n    chosenCellElements.push(cellElementid);\n    console.log(chosenCellElements);\n    console.log(event.target);\n    if (chosenCellValue.length === 2 && chosenCellValue[1] === chosenCellValue[0]) {\n        //chnage styles for the chosen elements\n        const firstChosenCell = document.getElementById(cellElementid[0]);\n        console.log(\"first\", firstChosenCell);\n        const secondChosenCell = document.getElementById(cellElementid[1]);\n        console.log(\"two\", secondChosenCell);\n        firstChosenCell === null || firstChosenCell === void 0 ? void 0 : firstChosenCell.classList.remove(\"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().revealed_memoryCell)));\n        secondChosenCell === null || secondChosenCell === void 0 ? void 0 : secondChosenCell.classList.remove(\"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().revealed_memoryCell)));\n        firstChosenCell === null || firstChosenCell === void 0 ? void 0 : firstChosenCell.classList.add(\"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().revealed_memoryCell)));\n        secondChosenCell === null || secondChosenCell === void 0 ? void 0 : secondChosenCell.classList.add(\"\".concat((_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().revealed_memoryCell)));\n        //empty chosen cell values array\n        chosenCellValue = [];\n        //change styles of chosen matching cells\n        chosenCellElements = [];\n    } else if (chosenCellValue.length === 2 && chosenCellValue[1] !== chosenCellValue[0]) {\n        console.log(\"Try again\");\n        //empty chosen cell values array\n        chosenCellValue = [];\n        //empty chosen cell elements array\n        chosenCellElements = [];\n    }\n};\nconst MemoryCellButton = (props)=>{\n    const { buttonName , id  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        \"data-testid\": \"button_element\",\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().memoryCellButton),\n        onClick: (event)=>{\n            choseMemoryCell(event);\n        },\n        id: id,\n        children: buttonName\n    }, void 0, false, {\n        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory Game/components/Buttons/memoryCellButton/MemoryCellButton.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MemoryCellButton;\nvar _c;\n$RefreshReg$(_c, \"MemoryCellButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbnMvbWVtb3J5Q2VsbEJ1dHRvbi9NZW1vcnlDZWxsQnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFDUjtBQU96QyxJQUFJRSxrQkFBNEIsRUFBRTtBQUNsQyxJQUFJQyxxQkFBK0IsRUFBRTtBQUVyQyxNQUFNQyxrQkFBa0IsQ0FBQ0MsUUFBMkQ7SUFDbEYsTUFBTUMsT0FBT0QsTUFBTUUsYUFBYSxDQUFDQyxTQUFTO0lBQzFDLE1BQU1DLGdCQUF3QkosTUFBTUUsYUFBYSxDQUFDRyxFQUFFO0lBRXBEUixnQkFBZ0JTLElBQUksQ0FBQ0w7SUFDckJILG1CQUFtQlEsSUFBSSxDQUFDRjtJQUV4QkcsUUFBUUMsR0FBRyxDQUFDVjtJQUNaUyxRQUFRQyxHQUFHLENBQUNSLE1BQU1TLE1BQU07SUFFeEIsSUFBSVosZ0JBQWdCYSxNQUFNLEtBQUssS0FBS2IsZUFBZSxDQUFDLEVBQUUsS0FBS0EsZUFBZSxDQUFDLEVBQUUsRUFBRTtRQUM3RSx1Q0FBdUM7UUFDdkMsTUFBTWMsa0JBQWtCQyxTQUFTQyxjQUFjLENBQUNULGFBQWEsQ0FBQyxFQUFFO1FBQ2hFRyxRQUFRQyxHQUFHLENBQUMsU0FBU0c7UUFFckIsTUFBTUcsbUJBQW1CRixTQUFTQyxjQUFjLENBQUNULGFBQWEsQ0FBQyxFQUFFO1FBQ2pFRyxRQUFRQyxHQUFHLENBQUMsT0FBT007UUFFbkJILDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCSSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxHQUE4QixPQUEzQnBCLCtFQUEwQixFQUFHO1FBQ2xFa0IsNkJBQUFBLDhCQUFBQSxLQUFBQSxJQUFBQSxpQkFBa0JDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLEdBQThCLE9BQTNCcEIsK0VBQTBCLEVBQUc7UUFFbkVlLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCSSxTQUFTLENBQUNHLEdBQUcsQ0FBQyxHQUE4QixPQUEzQnRCLCtFQUEwQixFQUFHO1FBQy9Ea0IsNkJBQUFBLDhCQUFBQSxLQUFBQSxJQUFBQSxpQkFBa0JDLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLEdBQThCLE9BQTNCdEIsK0VBQTBCLEVBQUc7UUFFaEUsZ0NBQWdDO1FBQ2hDQyxrQkFBa0IsRUFBRTtRQUNwQix3Q0FBd0M7UUFDeENDLHFCQUFxQixFQUFFO0lBQ3pCLE9BQU8sSUFBSUQsZ0JBQWdCYSxNQUFNLEtBQUssS0FBS2IsZUFBZSxDQUFDLEVBQUUsS0FBS0EsZUFBZSxDQUFDLEVBQUUsRUFBRTtRQUNwRlUsUUFBUUMsR0FBRyxDQUFDO1FBQ1osZ0NBQWdDO1FBQ2hDWCxrQkFBa0IsRUFBRTtRQUNwQixrQ0FBa0M7UUFDbENDLHFCQUFxQixFQUFFO0lBQ3pCLENBQUM7QUFDSDtBQUVPLE1BQU1xQixtQkFBbUIsQ0FBQ0MsUUFBaUM7SUFDaEUsTUFBTSxFQUFFQyxXQUFVLEVBQUVoQixHQUFFLEVBQUUsR0FBR2U7SUFFM0IscUJBQ0UsOERBQUNFO1FBQ0NDLGVBQVk7UUFDWkMsV0FBVzVCLDRFQUF1QjtRQUNsQzhCLFNBQVMsQ0FBQzFCLFFBQWlFO1lBQ3pFRCxnQkFBZ0JDO1FBQ2xCO1FBQ0FLLElBQUlBO2tCQUVIZ0I7Ozs7OztBQUdQLEVBQUU7S0FmV0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b25zL21lbW9yeUNlbGxCdXR0b24vTWVtb3J5Q2VsbEJ1dHRvbi50c3g/Zjc2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuXG50eXBlIG1lbW9yeUNlbGxCdXR0b25Qcm9wcyA9IHtcbiAgYnV0dG9uTmFtZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xufTtcblxubGV0IGNob3NlbkNlbGxWYWx1ZTogc3RyaW5nW10gPSBbXTtcbmxldCBjaG9zZW5DZWxsRWxlbWVudHM6IHN0cmluZ1tdID0gW107XG5cbmNvbnN0IGNob3NlTWVtb3J5Q2VsbCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcbiAgY29uc3QgY2VsbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaW5uZXJIVE1MO1xuICBjb25zdCBjZWxsRWxlbWVudGlkOiBzdHJpbmcgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xuXG4gIGNob3NlbkNlbGxWYWx1ZS5wdXNoKGNlbGwpO1xuICBjaG9zZW5DZWxsRWxlbWVudHMucHVzaChjZWxsRWxlbWVudGlkKTtcblxuICBjb25zb2xlLmxvZyhjaG9zZW5DZWxsRWxlbWVudHMpO1xuICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuXG4gIGlmIChjaG9zZW5DZWxsVmFsdWUubGVuZ3RoID09PSAyICYmIGNob3NlbkNlbGxWYWx1ZVsxXSA9PT0gY2hvc2VuQ2VsbFZhbHVlWzBdKSB7XG4gICAgLy9jaG5hZ2Ugc3R5bGVzIGZvciB0aGUgY2hvc2VuIGVsZW1lbnRzXG4gICAgY29uc3QgZmlyc3RDaG9zZW5DZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbEVsZW1lbnRpZFswXSk7XG4gICAgY29uc29sZS5sb2coJ2ZpcnN0JywgZmlyc3RDaG9zZW5DZWxsKTtcblxuICAgIGNvbnN0IHNlY29uZENob3NlbkNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsRWxlbWVudGlkWzFdKTtcbiAgICBjb25zb2xlLmxvZygndHdvJywgc2Vjb25kQ2hvc2VuQ2VsbCk7XG5cbiAgICBmaXJzdENob3NlbkNlbGw/LmNsYXNzTGlzdC5yZW1vdmUoYCR7c3R5bGVzLnJldmVhbGVkX21lbW9yeUNlbGx9YCk7XG4gICAgc2Vjb25kQ2hvc2VuQ2VsbD8uY2xhc3NMaXN0LnJlbW92ZShgJHtzdHlsZXMucmV2ZWFsZWRfbWVtb3J5Q2VsbH1gKTtcblxuICAgIGZpcnN0Q2hvc2VuQ2VsbD8uY2xhc3NMaXN0LmFkZChgJHtzdHlsZXMucmV2ZWFsZWRfbWVtb3J5Q2VsbH1gKTtcbiAgICBzZWNvbmRDaG9zZW5DZWxsPy5jbGFzc0xpc3QuYWRkKGAke3N0eWxlcy5yZXZlYWxlZF9tZW1vcnlDZWxsfWApO1xuXG4gICAgLy9lbXB0eSBjaG9zZW4gY2VsbCB2YWx1ZXMgYXJyYXlcbiAgICBjaG9zZW5DZWxsVmFsdWUgPSBbXTtcbiAgICAvL2NoYW5nZSBzdHlsZXMgb2YgY2hvc2VuIG1hdGNoaW5nIGNlbGxzXG4gICAgY2hvc2VuQ2VsbEVsZW1lbnRzID0gW107XG4gIH0gZWxzZSBpZiAoY2hvc2VuQ2VsbFZhbHVlLmxlbmd0aCA9PT0gMiAmJiBjaG9zZW5DZWxsVmFsdWVbMV0gIT09IGNob3NlbkNlbGxWYWx1ZVswXSkge1xuICAgIGNvbnNvbGUubG9nKCdUcnkgYWdhaW4nKTtcbiAgICAvL2VtcHR5IGNob3NlbiBjZWxsIHZhbHVlcyBhcnJheVxuICAgIGNob3NlbkNlbGxWYWx1ZSA9IFtdO1xuICAgIC8vZW1wdHkgY2hvc2VuIGNlbGwgZWxlbWVudHMgYXJyYXlcbiAgICBjaG9zZW5DZWxsRWxlbWVudHMgPSBbXTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IE1lbW9yeUNlbGxCdXR0b24gPSAocHJvcHM6IG1lbW9yeUNlbGxCdXR0b25Qcm9wcykgPT4ge1xuICBjb25zdCB7IGJ1dHRvbk5hbWUsIGlkIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGRhdGEtdGVzdGlkPVwiYnV0dG9uX2VsZW1lbnRcIlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVtb3J5Q2VsbEJ1dHRvbn1cbiAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pOiB2b2lkID0+IHtcbiAgICAgICAgY2hvc2VNZW1vcnlDZWxsKGV2ZW50KTtcbiAgICAgIH19XG4gICAgICBpZD17aWR9XG4gICAgPlxuICAgICAge2J1dHRvbk5hbWV9XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiY2hvc2VuQ2VsbFZhbHVlIiwiY2hvc2VuQ2VsbEVsZW1lbnRzIiwiY2hvc2VNZW1vcnlDZWxsIiwiZXZlbnQiLCJjZWxsIiwiY3VycmVudFRhcmdldCIsImlubmVySFRNTCIsImNlbGxFbGVtZW50aWQiLCJpZCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwibGVuZ3RoIiwiZmlyc3RDaG9zZW5DZWxsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNlY29uZENob3NlbkNlbGwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJyZXZlYWxlZF9tZW1vcnlDZWxsIiwiYWRkIiwiTWVtb3J5Q2VsbEJ1dHRvbiIsInByb3BzIiwiYnV0dG9uTmFtZSIsImJ1dHRvbiIsImRhdGEtdGVzdGlkIiwiY2xhc3NOYW1lIiwibWVtb3J5Q2VsbEJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Buttons/memoryCellButton/MemoryCellButton.tsx\n"));

/***/ })

});