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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MemoryCellButton\": function() { return /* binding */ MemoryCellButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"./components/Buttons/memoryCellButton/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet chosenCellValue = [];\nlet chosenCellElements = [];\nconst choseMemoryCell = (event)=>{\n    const cell = event.currentTarget.innerHTML;\n    const cellElementid = event.currentTarget.id;\n    chosenCellValue.push(cell);\n    chosenCellElements.push(cellElementid);\n    console.log(chosenCellElements);\n    if (chosenCellValue.length === 2 && chosenCellValue[1] === chosenCellValue[0]) {\n        //chnage styles for the chosen elements\n        const firstChosenCell = document.getElementById(cellElementid[0]);\n        const secondChosenCell = document.getElementById(cellElementid[1]);\n        firstChosenCell === null || firstChosenCell === void 0 ? void 0 : firstChosenCell.classList.add(\"revealed_memoryCell\");\n        secondChosenCell === null || secondChosenCell === void 0 ? void 0 : secondChosenCell.classList.add(\"revealed_memoryCell\");\n        firstChosenCell === null || firstChosenCell === void 0 ? void 0 : firstChosenCell.classList.add(\"revealed_memoryCell\");\n        secondChosenCell === null || secondChosenCell === void 0 ? void 0 : secondChosenCell.classList.add(\"revealed_memoryCell\");\n        //empty chosen cell values array\n        chosenCellValue = [];\n        //change styles of chosen matching cells\n        chosenCellElements = [];\n    } else if (chosenCellValue.length === 2 && chosenCellValue[1] !== chosenCellValue[0]) {\n        console.log(\"Try again\");\n        //empty chosen cell values array\n        chosenCellValue = [];\n        //empty chosen cell elements array\n        chosenCellElements = [];\n    }\n};\nconst MemoryCellButton = (props)=>{\n    const { buttonName , id  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        \"data-testid\": \"button_element\",\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().memoryCellButton),\n        onClick: (event)=>{\n            choseMemoryCell(event);\n        },\n        id: id,\n        children: buttonName\n    }, void 0, false, {\n        fileName: \"/home/arthurkyam/Desktop/Daniel project/Memory Game/components/Buttons/memoryCellButton/MemoryCellButton.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MemoryCellButton;\nvar _c;\n$RefreshReg$(_c, \"MemoryCellButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbnMvbWVtb3J5Q2VsbEJ1dHRvbi9NZW1vcnlDZWxsQnV0dG9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBaUQ7QUFDUjtBQU96QyxJQUFJRSxrQkFBNEIsRUFBRTtBQUNsQyxJQUFJQyxxQkFBK0IsRUFBRTtBQUVyQyxNQUFNQyxrQkFBa0IsQ0FBQ0MsUUFBMkQ7SUFDbEYsTUFBTUMsT0FBT0QsTUFBTUUsYUFBYSxDQUFDQyxTQUFTO0lBQzFDLE1BQU1DLGdCQUF3QkosTUFBTUUsYUFBYSxDQUFDRyxFQUFFO0lBRXBEUixnQkFBZ0JTLElBQUksQ0FBQ0w7SUFDckJILG1CQUFtQlEsSUFBSSxDQUFDRjtJQUV4QkcsUUFBUUMsR0FBRyxDQUFDVjtJQUVaLElBQUlELGdCQUFnQlksTUFBTSxLQUFLLEtBQUtaLGVBQWUsQ0FBQyxFQUFFLEtBQUtBLGVBQWUsQ0FBQyxFQUFFLEVBQUU7UUFDN0UsdUNBQXVDO1FBQ3ZDLE1BQU1hLGtCQUFrQkMsU0FBU0MsY0FBYyxDQUFDUixhQUFhLENBQUMsRUFBRTtRQUNoRSxNQUFNUyxtQkFBbUJGLFNBQVNDLGNBQWMsQ0FBQ1IsYUFBYSxDQUFDLEVBQUU7UUFFakVNLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0I7UUFDckRGLDZCQUFBQSw4QkFBQUEsS0FBQUEsSUFBQUEsaUJBQWtCQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0I7UUFFdERMLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0I7UUFDckRGLDZCQUFBQSw4QkFBQUEsS0FBQUEsSUFBQUEsaUJBQWtCQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0I7UUFFdEQsZ0NBQWdDO1FBQ2hDbEIsa0JBQWtCLEVBQUU7UUFDcEIsd0NBQXdDO1FBQ3hDQyxxQkFBcUIsRUFBRTtJQUN6QixPQUFPLElBQUlELGdCQUFnQlksTUFBTSxLQUFLLEtBQUtaLGVBQWUsQ0FBQyxFQUFFLEtBQUtBLGVBQWUsQ0FBQyxFQUFFLEVBQUU7UUFDcEZVLFFBQVFDLEdBQUcsQ0FBQztRQUNaLGdDQUFnQztRQUNoQ1gsa0JBQWtCLEVBQUU7UUFDcEIsa0NBQWtDO1FBQ2xDQyxxQkFBcUIsRUFBRTtJQUN6QixDQUFDO0FBQ0g7QUFFTyxNQUFNa0IsbUJBQW1CLENBQUNDLFFBQWlDO0lBQ2hFLE1BQU0sRUFBRUMsV0FBVSxFQUFFYixHQUFFLEVBQUUsR0FBR1k7SUFFM0IscUJBQ0UsOERBQUNFO1FBQ0NDLGVBQVk7UUFDWkMsV0FBV3pCLDRFQUF1QjtRQUNsQzJCLFNBQVMsQ0FBQ3ZCLFFBQWlFO1lBQ3pFRCxnQkFBZ0JDO1FBQ2xCO1FBQ0FLLElBQUlBO2tCQUVIYTs7Ozs7O0FBR1AsRUFBRTtLQWZXRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0J1dHRvbnMvbWVtb3J5Q2VsbEJ1dHRvbi9NZW1vcnlDZWxsQnV0dG9uLnRzeD9mNzZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5cbnR5cGUgbWVtb3J5Q2VsbEJ1dHRvblByb3BzID0ge1xuICBidXR0b25OYW1lOiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG59O1xuXG5sZXQgY2hvc2VuQ2VsbFZhbHVlOiBzdHJpbmdbXSA9IFtdO1xubGV0IGNob3NlbkNlbGxFbGVtZW50czogc3RyaW5nW10gPSBbXTtcblxuY29uc3QgY2hvc2VNZW1vcnlDZWxsID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xuICBjb25zdCBjZWxsID0gZXZlbnQuY3VycmVudFRhcmdldC5pbm5lckhUTUw7XG4gIGNvbnN0IGNlbGxFbGVtZW50aWQ6IHN0cmluZyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQ7XG5cbiAgY2hvc2VuQ2VsbFZhbHVlLnB1c2goY2VsbCk7XG4gIGNob3NlbkNlbGxFbGVtZW50cy5wdXNoKGNlbGxFbGVtZW50aWQpO1xuXG4gIGNvbnNvbGUubG9nKGNob3NlbkNlbGxFbGVtZW50cyk7XG5cbiAgaWYgKGNob3NlbkNlbGxWYWx1ZS5sZW5ndGggPT09IDIgJiYgY2hvc2VuQ2VsbFZhbHVlWzFdID09PSBjaG9zZW5DZWxsVmFsdWVbMF0pIHtcbiAgICAvL2NobmFnZSBzdHlsZXMgZm9yIHRoZSBjaG9zZW4gZWxlbWVudHNcbiAgICBjb25zdCBmaXJzdENob3NlbkNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjZWxsRWxlbWVudGlkWzBdKTtcbiAgICBjb25zdCBzZWNvbmRDaG9zZW5DZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2VsbEVsZW1lbnRpZFsxXSk7XG5cbiAgICBmaXJzdENob3NlbkNlbGw/LmNsYXNzTGlzdC5hZGQoJ3JldmVhbGVkX21lbW9yeUNlbGwnKTtcbiAgICBzZWNvbmRDaG9zZW5DZWxsPy5jbGFzc0xpc3QuYWRkKCdyZXZlYWxlZF9tZW1vcnlDZWxsJyk7XG5cbiAgICBmaXJzdENob3NlbkNlbGw/LmNsYXNzTGlzdC5hZGQoJ3JldmVhbGVkX21lbW9yeUNlbGwnKTtcbiAgICBzZWNvbmRDaG9zZW5DZWxsPy5jbGFzc0xpc3QuYWRkKCdyZXZlYWxlZF9tZW1vcnlDZWxsJyk7XG5cbiAgICAvL2VtcHR5IGNob3NlbiBjZWxsIHZhbHVlcyBhcnJheVxuICAgIGNob3NlbkNlbGxWYWx1ZSA9IFtdO1xuICAgIC8vY2hhbmdlIHN0eWxlcyBvZiBjaG9zZW4gbWF0Y2hpbmcgY2VsbHNcbiAgICBjaG9zZW5DZWxsRWxlbWVudHMgPSBbXTtcbiAgfSBlbHNlIGlmIChjaG9zZW5DZWxsVmFsdWUubGVuZ3RoID09PSAyICYmIGNob3NlbkNlbGxWYWx1ZVsxXSAhPT0gY2hvc2VuQ2VsbFZhbHVlWzBdKSB7XG4gICAgY29uc29sZS5sb2coJ1RyeSBhZ2FpbicpO1xuICAgIC8vZW1wdHkgY2hvc2VuIGNlbGwgdmFsdWVzIGFycmF5XG4gICAgY2hvc2VuQ2VsbFZhbHVlID0gW107XG4gICAgLy9lbXB0eSBjaG9zZW4gY2VsbCBlbGVtZW50cyBhcnJheVxuICAgIGNob3NlbkNlbGxFbGVtZW50cyA9IFtdO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgTWVtb3J5Q2VsbEJ1dHRvbiA9IChwcm9wczogbWVtb3J5Q2VsbEJ1dHRvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYnV0dG9uTmFtZSwgaWQgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgZGF0YS10ZXN0aWQ9XCJidXR0b25fZWxlbWVudFwiXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW1vcnlDZWxsQnV0dG9ufVxuICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50Pik6IHZvaWQgPT4ge1xuICAgICAgICBjaG9zZU1lbW9yeUNlbGwoZXZlbnQpO1xuICAgICAgfX1cbiAgICAgIGlkPXtpZH1cbiAgICA+XG4gICAgICB7YnV0dG9uTmFtZX1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJjaG9zZW5DZWxsVmFsdWUiLCJjaG9zZW5DZWxsRWxlbWVudHMiLCJjaG9zZU1lbW9yeUNlbGwiLCJldmVudCIsImNlbGwiLCJjdXJyZW50VGFyZ2V0IiwiaW5uZXJIVE1MIiwiY2VsbEVsZW1lbnRpZCIsImlkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJmaXJzdENob3NlbkNlbGwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Vjb25kQ2hvc2VuQ2VsbCIsImNsYXNzTGlzdCIsImFkZCIsIk1lbW9yeUNlbGxCdXR0b24iLCJwcm9wcyIsImJ1dHRvbk5hbWUiLCJidXR0b24iLCJkYXRhLXRlc3RpZCIsImNsYXNzTmFtZSIsIm1lbW9yeUNlbGxCdXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Buttons/memoryCellButton/MemoryCellButton.tsx\n"));

/***/ })

});