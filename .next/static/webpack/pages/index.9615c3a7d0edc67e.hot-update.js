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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// Home page of the app\n// Imports\n\nvar _s = $RefreshSig$();\n\nvar text2png = __webpack_require__(/*! text2png */ \"./node_modules/text2png/index.js\");\n// Component defination\nconst Home = ()=>{\n    _s();\n    // Value of input\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // On input change\n    function onChange(e) {\n        // Set value in state\n        setValue(e.target.value);\n    }\n    function download(font, value) {\n        console.log(font.toLowerCase());\n        console.log(text2png(\"پیار خوبصورت ہے\", {\n            font: \"500px \" + font,\n            localFontPath: \"./\" + font.toLowerCase() + \".woff\",\n            localFontName: font,\n            color: \"white\",\n            output: \"dataURL\"\n        }));\n    }\n    // Function to download png\n    // function download(font, value) {\n    //   // Create a canvas element\n    //   const canvas = document.createElement(\"canvas\");\n    //   // Get the 2D context of the canvas\n    //   const ctx = canvas.getContext(\"2d\");\n    //   // Set the font and alignment properties\n    //   ctx.font = `200px ${font.toLowerCase()}`;\n    //   ctx.textAlign = \"center\";\n    //   ctx.textBaseline = \"middle\";\n    //   // Measure the width of the text\n    //   // const textWidth = ctx.measureText(value).width;\n    //   // const textHeight = ctx.measureText(value).height;\n    //   const textWidth = \"300\";\n    //   // Set the canvas size based on the text width\n    //   canvas.width = textWidth; // add some padding\n    //   canvas.height = 200;\n    //   // Set the fill color to transparent (alpha = 0)\n    //   ctx.fillStyle = \"rgba(255, 255, 255, 0)\"; // set alpha to 0\n    //   // Fill the canvas with the fill color\n    //   ctx.fillRect(0, 0, canvas.width, canvas.height);\n    //   // Set the fill color to black\n    //   ctx.fillStyle = \"#ededed\";\n    //   // Draw the text on the canvas\n    //   ctx.fillText(value, canvas.width / 2, canvas.height / 2);\n    //   // Convert the canvas to a PNG blob\n    //   canvas.toBlob(blob => {\n    //     // Create a URL for the blob\n    //     const url = URL.createObjectURL(blob);\n    //     // Create a link element\n    //     const a = document.createElement(\"a\");\n    //     // Set the link URL and download filename\n    //     a.href = url;\n    //     a.download = `${value}.png`;\n    //     // Click the link programmatically to trigger the download\n    //     a.click();\n    //     // Revoke the URL to release memory\n    //     URL.revokeObjectURL(url);\n    //   }, \"image/png\", 1); // set quality to 1 (maximum)\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute flex-col flex bg-gray-1 w-full h-screen gap-16 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-title text-white-1 font-qamri\",\n                children: \"تخیل\"\n            }, void 0, false, {\n                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"items-center flex justify-center w-full flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"text\",\n                        className: \"py-3 text-right h-12 px-6 bg-gray-2 w-3/6 placeholder:text-white-2 outline-none box-border text-lg rounded-sm align-middle text-white-2 border border-white-2 border-opacity-10 focus:border-opacity-20 \",\n                        type: \"text\",\n                        onChange: onChange,\n                        value: value\n                    }, void 0, false, {\n                        fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-20 flex flex-col items-center overflow-scroll w-full h-96\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-qamri cursor-pointer\",\n                                onClick: ()=>download(\"Qamri\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-divangiry cursor-pointer\",\n                                onClick: ()=>download(\"Divangiry\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-tasmeem cursor-pointer\",\n                                onClick: ()=>download(\"Tasmeem\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-kamran cursor-pointer\",\n                                onClick: ()=>download(\"Kamran\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-abuzar cursor-pointer\",\n                                onClick: ()=>download(\"Abuzar\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-sadaf cursor-pointer\",\n                                onClick: ()=>download(\"Sadaf\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-ubaid cursor-pointer\",\n                                onClick: ()=>download(\"Ubaid\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-tehreeri cursor-pointer\",\n                                onClick: ()=>download(\"Tehreeri\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-qalam cursor-pointer\",\n                                onClick: ()=>download(\"Qalm\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-shekastah cursor-pointer\",\n                                onClick: ()=>download(\"Shekastah\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"dBtK6I2q1m3rcfzPBa0nrbv/iCI=\");\n_c = Home;\n// Export\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVCQUF1QjtBQUV2QixVQUFVOzs7QUFDOEI7QUFDeEMsSUFBSUUsV0FBV0MsbUJBQU9BLENBQUM7QUFFdkIsdUJBQXVCO0FBQ3ZCLE1BQU1DLE9BQU8sSUFBTTs7SUFFakIsaUJBQWlCO0lBQ2pCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVuQyxrQkFBa0I7SUFDbEIsU0FBU00sU0FBVUMsQ0FBQyxFQUFFO1FBRXBCLHFCQUFxQjtRQUNyQkYsU0FBU0UsRUFBRUMsTUFBTSxDQUFDSixLQUFLO0lBQ3pCO0lBRUEsU0FBU0ssU0FBU0MsSUFBSSxFQUFFTixLQUFLLEVBQUU7UUFDN0JPLFFBQVFDLEdBQUcsQ0FBQ0YsS0FBS0csV0FBVztRQUU1QkYsUUFBUUMsR0FBRyxDQUFDWCxTQUFTLG1CQUFtQjtZQUN0Q1MsTUFBTSxXQUFVQTtZQUNoQkksZUFBZSxPQUFLSixLQUFLRyxXQUFXLEtBQUc7WUFDdkNFLGVBQWVMO1lBQ2ZNLE9BQU87WUFDUEMsUUFBUTtRQUNWO0lBQ0Y7SUFFQSwyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQixxREFBcUQ7SUFDckQsd0NBQXdDO0lBQ3hDLHlDQUF5QztJQUN6Qyw2Q0FBNkM7SUFDN0MsOENBQThDO0lBQzlDLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMscUNBQXFDO0lBQ3JDLHVEQUF1RDtJQUN2RCx5REFBeUQ7SUFFekQsNkJBQTZCO0lBQzdCLG1EQUFtRDtJQUNuRCxrREFBa0Q7SUFDbEQseUJBQXlCO0lBQ3pCLHFEQUFxRDtJQUNyRCxnRUFBZ0U7SUFDaEUsMkNBQTJDO0lBQzNDLHFEQUFxRDtJQUNyRCxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLG1DQUFtQztJQUNuQyw4REFBOEQ7SUFFOUQsd0NBQXdDO0lBQ3hDLDRCQUE0QjtJQUM1QixtQ0FBbUM7SUFDbkMsNkNBQTZDO0lBQzdDLCtCQUErQjtJQUMvQiw2Q0FBNkM7SUFDN0MsZ0RBQWdEO0lBQ2hELG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsaUVBQWlFO0lBQ2pFLGlCQUFpQjtJQUNqQiwwQ0FBMEM7SUFDMUMsZ0NBQWdDO0lBQ2hDLHNEQUFzRDtJQUN0RCxJQUFJO0lBRUoscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUdiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBcUM7Ozs7OzswQkFFcEQsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0M7d0JBQU1DLE1BQUs7d0JBQU9GLFdBQVU7d0JBQTJNRyxNQUFLO3dCQUFPaEIsVUFBVUE7d0JBQVVGLE9BQU9BOzs7Ozs7a0NBRy9RLDhEQUFDYzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVO2dDQUFpREksU0FBUyxJQUFNZCxTQUFTLFNBQVNMOzBDQUFTQTs7Ozs7OzBDQUMxRyw4REFBQ2M7Z0NBQUlDLFdBQVU7Z0NBQXFESSxTQUFTLElBQU1kLFNBQVMsYUFBYUw7MENBQVNBOzs7Ozs7MENBQ2xILDhEQUFDYztnQ0FBSUMsV0FBVTtnQ0FBbURJLFNBQVMsSUFBTWQsU0FBUyxXQUFXTDswQ0FBU0E7Ozs7OzswQ0FDOUcsOERBQUNjO2dDQUFJQyxXQUFVO2dDQUFrREksU0FBUyxJQUFNZCxTQUFTLFVBQVVMOzBDQUFTQTs7Ozs7OzBDQUM1Ryw4REFBQ2M7Z0NBQUlDLFdBQVU7Z0NBQWtESSxTQUFTLElBQU1kLFNBQVMsVUFBVUw7MENBQVNBOzs7Ozs7MENBQzVHLDhEQUFDYztnQ0FBSUMsV0FBVTtnQ0FBaURJLFNBQVMsSUFBTWQsU0FBUyxTQUFTTDswQ0FBU0E7Ozs7OzswQ0FDMUcsOERBQUNjO2dDQUFJQyxXQUFVO2dDQUFpREksU0FBUyxJQUFNZCxTQUFTLFNBQVNMOzBDQUFTQTs7Ozs7OzBDQUMxRyw4REFBQ2M7Z0NBQUlDLFdBQVU7Z0NBQW9ESSxTQUFTLElBQU1kLFNBQVMsWUFBWUw7MENBQVNBOzs7Ozs7MENBQ2hILDhEQUFDYztnQ0FBSUMsV0FBVTtnQ0FBaURJLFNBQVMsSUFBTWQsU0FBUyxRQUFRTDswQ0FBU0E7Ozs7OzswQ0FDekcsOERBQUNjO2dDQUFJQyxXQUFVO2dDQUFxREksU0FBUyxJQUFNZCxTQUFTLGFBQWFMOzBDQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVIO0dBN0ZNRDtLQUFBQTtBQStGTixTQUFTO0FBQ1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIb21lIHBhZ2Ugb2YgdGhlIGFwcFxuXG4vLyBJbXBvcnRzXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG52YXIgdGV4dDJwbmcgPSByZXF1aXJlKCd0ZXh0MnBuZycpO1xuXG4vLyBDb21wb25lbnQgZGVmaW5hdGlvblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuICAvLyBWYWx1ZSBvZiBpbnB1dFxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIC8vIE9uIGlucHV0IGNoYW5nZVxuICBmdW5jdGlvbiBvbkNoYW5nZSAoZSkge1xuXG4gICAgLy8gU2V0IHZhbHVlIGluIHN0YXRlXG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gZG93bmxvYWQoZm9udCwgdmFsdWUpIHtcbiAgICBjb25zb2xlLmxvZyhmb250LnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgY29uc29sZS5sb2codGV4dDJwbmcoJ9m+24zYp9ixINiu2YjYqNi12YjYsdiqINuB25InLCB7IFxuICAgICAgZm9udDogJzUwMHB4ICcrIGZvbnQsXG4gICAgICBsb2NhbEZvbnRQYXRoOiAnLi8nK2ZvbnQudG9Mb3dlckNhc2UoKSsnLndvZmYnLFxuICAgICAgbG9jYWxGb250TmFtZTogZm9udCxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgb3V0cHV0OiAnZGF0YVVSTCdcbiAgICB9KSk7XG4gIH1cblxuICAvLyBGdW5jdGlvbiB0byBkb3dubG9hZCBwbmdcbiAgLy8gZnVuY3Rpb24gZG93bmxvYWQoZm9udCwgdmFsdWUpIHtcbiAgLy8gICAvLyBDcmVhdGUgYSBjYW52YXMgZWxlbWVudFxuICAvLyAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gIC8vICAgLy8gR2V0IHRoZSAyRCBjb250ZXh0IG9mIHRoZSBjYW52YXNcbiAgLy8gICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAvLyAgIC8vIFNldCB0aGUgZm9udCBhbmQgYWxpZ25tZW50IHByb3BlcnRpZXNcbiAgLy8gICBjdHguZm9udCA9IGAyMDBweCAke2ZvbnQudG9Mb3dlckNhc2UoKX1gO1xuICAvLyAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAvLyAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAvLyAgIC8vIE1lYXN1cmUgdGhlIHdpZHRoIG9mIHRoZSB0ZXh0XG4gIC8vICAgLy8gY29uc3QgdGV4dFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHZhbHVlKS53aWR0aDtcbiAgLy8gICAvLyBjb25zdCB0ZXh0SGVpZ2h0ID0gY3R4Lm1lYXN1cmVUZXh0KHZhbHVlKS5oZWlnaHQ7XG5cbiAgLy8gICBjb25zdCB0ZXh0V2lkdGggPSBcIjMwMFwiO1xuICAvLyAgIC8vIFNldCB0aGUgY2FudmFzIHNpemUgYmFzZWQgb24gdGhlIHRleHQgd2lkdGhcbiAgLy8gICBjYW52YXMud2lkdGggPSB0ZXh0V2lkdGg7IC8vIGFkZCBzb21lIHBhZGRpbmdcbiAgLy8gICBjYW52YXMuaGVpZ2h0ID0gMjAwO1xuICAvLyAgIC8vIFNldCB0aGUgZmlsbCBjb2xvciB0byB0cmFuc3BhcmVudCAoYWxwaGEgPSAwKVxuICAvLyAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIjsgLy8gc2V0IGFscGhhIHRvIDBcbiAgLy8gICAvLyBGaWxsIHRoZSBjYW52YXMgd2l0aCB0aGUgZmlsbCBjb2xvclxuICAvLyAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAvLyAgIC8vIFNldCB0aGUgZmlsbCBjb2xvciB0byBibGFja1xuICAvLyAgIGN0eC5maWxsU3R5bGUgPSBcIiNlZGVkZWRcIjtcbiAgLy8gICAvLyBEcmF3IHRoZSB0ZXh0IG9uIHRoZSBjYW52YXNcbiAgLy8gICBjdHguZmlsbFRleHQodmFsdWUsIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICBcbiAgLy8gICAvLyBDb252ZXJ0IHRoZSBjYW52YXMgdG8gYSBQTkcgYmxvYlxuICAvLyAgIGNhbnZhcy50b0Jsb2IoYmxvYiA9PiB7XG4gIC8vICAgICAvLyBDcmVhdGUgYSBVUkwgZm9yIHRoZSBibG9iXG4gIC8vICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAvLyAgICAgLy8gQ3JlYXRlIGEgbGluayBlbGVtZW50XG4gIC8vICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIC8vICAgICAvLyBTZXQgdGhlIGxpbmsgVVJMIGFuZCBkb3dubG9hZCBmaWxlbmFtZVxuICAvLyAgICAgYS5ocmVmID0gdXJsO1xuICAvLyAgICAgYS5kb3dubG9hZCA9IGAke3ZhbHVlfS5wbmdgO1xuICAvLyAgICAgLy8gQ2xpY2sgdGhlIGxpbmsgcHJvZ3JhbW1hdGljYWxseSB0byB0cmlnZ2VyIHRoZSBkb3dubG9hZFxuICAvLyAgICAgYS5jbGljaygpO1xuICAvLyAgICAgLy8gUmV2b2tlIHRoZSBVUkwgdG8gcmVsZWFzZSBtZW1vcnlcbiAgLy8gICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgLy8gICB9LCBcImltYWdlL3BuZ1wiLCAxKTsgLy8gc2V0IHF1YWxpdHkgdG8gMSAobWF4aW11bSlcbiAgLy8gfVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgZmxleC1jb2wgZmxleCBiZy1ncmF5LTEgdy1mdWxsIGgtc2NyZWVuIGdhcC0xNiBpdGVtcy1jZW50ZXInPlxuICAgICAgXG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtdGl0bGUgdGV4dC13aGl0ZS0xIGZvbnQtcWFtcmknPtiq2K7bjNmEPC9kaXY+XG4gICAgICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtcy1jZW50ZXIgZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgZmxleC1jb2wnPlxuICAgICAgICB7LyogSW5wdXQgKi99XG4gICAgICAgIDxpbnB1dCBuYW1lPSd0ZXh0JyBjbGFzc05hbWU9J3B5LTMgdGV4dC1yaWdodCBoLTEyIHB4LTYgYmctZ3JheS0yIHctMy82IHBsYWNlaG9sZGVyOnRleHQtd2hpdGUtMiBvdXRsaW5lLW5vbmUgYm94LWJvcmRlciB0ZXh0LWxnIHJvdW5kZWQtc20gYWxpZ24tbWlkZGxlIHRleHQtd2hpdGUtMiBib3JkZXIgYm9yZGVyLXdoaXRlLTIgYm9yZGVyLW9wYWNpdHktMTAgZm9jdXM6Ym9yZGVyLW9wYWNpdHktMjAgJyB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfS8+XG4gICAgICAgIFxuICAgICAgICB7LyogRGlzcGxheSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTIwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG92ZXJmbG93LXNjcm9sbCB3LWZ1bGwgaC05Nic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtaDEgdGV4dC13aGl0ZS0xIGZvbnQtcWFtcmkgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkKFwiUWFtcmlcIiwgdmFsdWUpfT57dmFsdWV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtaDEgdGV4dC13aGl0ZS0xIGZvbnQtZGl2YW5naXJ5IGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZChcIkRpdmFuZ2lyeVwiLCB2YWx1ZSl9Pnt2YWx1ZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1oMSB0ZXh0LXdoaXRlLTEgZm9udC10YXNtZWVtIGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZChcIlRhc21lZW1cIiwgdmFsdWUpfT57dmFsdWV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtaDEgdGV4dC13aGl0ZS0xIGZvbnQta2FtcmFuIGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZChcIkthbXJhblwiLCB2YWx1ZSl9Pnt2YWx1ZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1oMSB0ZXh0LXdoaXRlLTEgZm9udC1hYnV6YXIgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkKFwiQWJ1emFyXCIsIHZhbHVlKX0+e3ZhbHVlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWgxIHRleHQtd2hpdGUtMSBmb250LXNhZGFmIGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZChcIlNhZGFmXCIsIHZhbHVlKX0+e3ZhbHVlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWgxIHRleHQtd2hpdGUtMSBmb250LXViYWlkIGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZChcIlViYWlkXCIsIHZhbHVlKX0+e3ZhbHVlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWgxIHRleHQtd2hpdGUtMSBmb250LXRlaHJlZXJpIGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZChcIlRlaHJlZXJpXCIsIHZhbHVlKX0+e3ZhbHVlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWgxIHRleHQtd2hpdGUtMSBmb250LXFhbGFtIGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZChcIlFhbG1cIiwgdmFsdWUpfT57dmFsdWV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtaDEgdGV4dC13aGl0ZS0xIGZvbnQtc2hla2FzdGFoIGN1cnNvci1wb2ludGVyJyBvbkNsaWNrPXsoKSA9PiBkb3dubG9hZChcIlNoZWthc3RhaFwiLCB2YWx1ZSl9Pnt2YWx1ZX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBFeHBvcnRcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInRleHQycG5nIiwicmVxdWlyZSIsIkhvbWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiZG93bmxvYWQiLCJmb250IiwiY29uc29sZSIsImxvZyIsInRvTG93ZXJDYXNlIiwibG9jYWxGb250UGF0aCIsImxvY2FsRm9udE5hbWUiLCJjb2xvciIsIm91dHB1dCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwibmFtZSIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});