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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// Home page of the app\n// Imports\n\nvar _s = $RefreshSig$();\n\nvar text2png = __webpack_require__(/*! text2png */ \"./node_modules/text2png/index.js\");\n// Component defination\nconst Home = ()=>{\n    _s();\n    // Value of input\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // On input change\n    function onChange(e) {\n        // Set value in state\n        setValue(e.target.value);\n    }\n    function download(font, value) {\n        // Create a link element\n        const a = document.createElement(\"a\");\n        // Set the link URL and download filename\n        a.href = text2png(value, {\n            font: \"500px \" + font,\n            localFontName: font,\n            color: \"white\",\n            output: \"dataURL\"\n        });\n        a.download = \"\".concat(font, \".png\");\n        // Click the link programmatically to trigger the download\n        a.click();\n    }\n    // Function to download png\n    // function download(font, value) {\n    //   // Create a canvas element\n    //   const canvas = document.createElement(\"canvas\");\n    //   // Get the 2D context of the canvas\n    //   const ctx = canvas.getContext(\"2d\");\n    //   // Set the font and alignment properties\n    //   ctx.font = `200px ${font.toLowerCase()}`;\n    //   ctx.textAlign = \"center\";\n    //   ctx.textBaseline = \"middle\";\n    //   // Measure the width of the text\n    //   // const textWidth = ctx.measureText(value).width;\n    //   // const textHeight = ctx.measureText(value).height;\n    //   const textWidth = \"300\";\n    //   // Set the canvas size based on the text width\n    //   canvas.width = textWidth; // add some padding\n    //   canvas.height = 200;\n    //   // Set the fill color to transparent (alpha = 0)\n    //   ctx.fillStyle = \"rgba(255, 255, 255, 0)\"; // set alpha to 0\n    //   // Fill the canvas with the fill color\n    //   ctx.fillRect(0, 0, canvas.width, canvas.height);\n    //   // Set the fill color to black\n    //   ctx.fillStyle = \"#ededed\";\n    //   // Draw the text on the canvas\n    //   ctx.fillText(value, canvas.width / 2, canvas.height / 2);\n    //   // Convert the canvas to a PNG blob\n    //   canvas.toBlob(blob => {\n    //     // Create a URL for the blob\n    //     const url = URL.createObjectURL(blob);\n    //     // Create a link element\n    //     const a = document.createElement(\"a\");\n    //     // Set the link URL and download filename\n    //     a.href = url;\n    //     a.download = `${value}.png`;\n    //     // Click the link programmatically to trigger the download\n    //     a.click();\n    //     // Revoke the URL to release memory\n    //     URL.revokeObjectURL(url);\n    //   }, \"image/png\", 1); // set quality to 1 (maximum)\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"absolute flex-col flex bg-gray-1 w-full h-screen gap-16 items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-title text-white-1 font-qamri\",\n                children: \"تخیل\"\n            }, void 0, false, {\n                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"items-center flex justify-center w-full flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"text\",\n                        className: \"py-3 text-right h-12 px-6 bg-gray-2 w-3/6 placeholder:text-white-2 outline-none box-border text-lg rounded-sm align-middle text-white-2 border border-white-2 border-opacity-10 focus:border-opacity-20 \",\n                        type: \"text\",\n                        onChange: onChange,\n                        value: value\n                    }, void 0, false, {\n                        fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-20 flex flex-col items-center overflow-scroll w-full h-96\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-qamri cursor-pointer\",\n                                onClick: ()=>download(\"Qamri\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-divangiry cursor-pointer\",\n                                onClick: ()=>download(\"Divangiry\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-tasmeem cursor-pointer\",\n                                onClick: ()=>download(\"Tasmeem\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-kamran cursor-pointer\",\n                                onClick: ()=>download(\"Kamran\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-abuzar cursor-pointer\",\n                                onClick: ()=>download(\"Abuzar\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-sadaf cursor-pointer\",\n                                onClick: ()=>download(\"Sadaf\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-ubaid cursor-pointer\",\n                                onClick: ()=>download(\"Ubaid\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 100,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-tehreeri cursor-pointer\",\n                                onClick: ()=>download(\"Tehreeri\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-qalam cursor-pointer\",\n                                onClick: ()=>download(\"Qalm\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-h1 text-white-1 font-shekastah cursor-pointer\",\n                                onClick: ()=>download(\"Shekastah\", value),\n                                children: value\n                            }, void 0, false, {\n                                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/talhasaleem/Desktop/urdu/pages/index.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"dBtK6I2q1m3rcfzPBa0nrbv/iCI=\");\n_c = Home;\n// Export\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVCQUF1QjtBQUV2QixVQUFVOzs7QUFDOEI7QUFDeEMsSUFBSUUsV0FBV0MsbUJBQU9BLENBQUM7QUFFdkIsdUJBQXVCO0FBQ3ZCLE1BQU1DLE9BQU8sSUFBTTs7SUFFakIsaUJBQWlCO0lBQ2pCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVuQyxrQkFBa0I7SUFDbEIsU0FBU00sU0FBVUMsQ0FBQyxFQUFFO1FBRXBCLHFCQUFxQjtRQUNyQkYsU0FBU0UsRUFBRUMsTUFBTSxDQUFDSixLQUFLO0lBQ3pCO0lBRUEsU0FBU0ssU0FBU0MsSUFBSSxFQUFFTixLQUFLLEVBQUU7UUFFN0Isd0JBQXdCO1FBQ3hCLE1BQU1PLElBQUlDLFNBQVNDLGFBQWEsQ0FBQztRQUVqQyx5Q0FBeUM7UUFDekNGLEVBQUVHLElBQUksR0FBR2IsU0FBU0csT0FBTztZQUN2Qk0sTUFBTSxXQUFVQTtZQUNoQkssZUFBZUw7WUFDZk0sT0FBTztZQUNQQyxRQUFRO1FBQ1Y7UUFFQU4sRUFBRUYsUUFBUSxHQUFHLEdBQVEsT0FBTEMsTUFBSztRQUVyQiwwREFBMEQ7UUFDMURDLEVBQUVPLEtBQUs7SUFDVDtJQUVBLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLHFEQUFxRDtJQUNyRCx3Q0FBd0M7SUFDeEMseUNBQXlDO0lBQ3pDLDZDQUE2QztJQUM3Qyw4Q0FBOEM7SUFDOUMsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxxQ0FBcUM7SUFDckMsdURBQXVEO0lBQ3ZELHlEQUF5RDtJQUV6RCw2QkFBNkI7SUFDN0IsbURBQW1EO0lBQ25ELGtEQUFrRDtJQUNsRCx5QkFBeUI7SUFDekIscURBQXFEO0lBQ3JELGdFQUFnRTtJQUNoRSwyQ0FBMkM7SUFDM0MscURBQXFEO0lBQ3JELG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsbUNBQW1DO0lBQ25DLDhEQUE4RDtJQUU5RCx3Q0FBd0M7SUFDeEMsNEJBQTRCO0lBQzVCLG1DQUFtQztJQUNuQyw2Q0FBNkM7SUFDN0MsK0JBQStCO0lBQy9CLDZDQUE2QztJQUM3QyxnREFBZ0Q7SUFDaEQsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQyxpRUFBaUU7SUFDakUsaUJBQWlCO0lBQ2pCLDBDQUEwQztJQUMxQyxnQ0FBZ0M7SUFDaEMsc0RBQXNEO0lBQ3RELElBQUk7SUFFSixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBR2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUFxQzs7Ozs7OzBCQUVwRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUViLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0YsV0FBVTt3QkFBMk1HLE1BQUs7d0JBQU9qQixVQUFVQTt3QkFBVUYsT0FBT0E7Ozs7OztrQ0FHL1EsOERBQUNlO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7Z0NBQWlESSxTQUFTLElBQU1mLFNBQVMsU0FBU0w7MENBQVNBOzs7Ozs7MENBQzFHLDhEQUFDZTtnQ0FBSUMsV0FBVTtnQ0FBcURJLFNBQVMsSUFBTWYsU0FBUyxhQUFhTDswQ0FBU0E7Ozs7OzswQ0FDbEgsOERBQUNlO2dDQUFJQyxXQUFVO2dDQUFtREksU0FBUyxJQUFNZixTQUFTLFdBQVdMOzBDQUFTQTs7Ozs7OzBDQUM5Ryw4REFBQ2U7Z0NBQUlDLFdBQVU7Z0NBQWtESSxTQUFTLElBQU1mLFNBQVMsVUFBVUw7MENBQVNBOzs7Ozs7MENBQzVHLDhEQUFDZTtnQ0FBSUMsV0FBVTtnQ0FBa0RJLFNBQVMsSUFBTWYsU0FBUyxVQUFVTDswQ0FBU0E7Ozs7OzswQ0FDNUcsOERBQUNlO2dDQUFJQyxXQUFVO2dDQUFpREksU0FBUyxJQUFNZixTQUFTLFNBQVNMOzBDQUFTQTs7Ozs7OzBDQUMxRyw4REFBQ2U7Z0NBQUlDLFdBQVU7Z0NBQWlESSxTQUFTLElBQU1mLFNBQVMsU0FBU0w7MENBQVNBOzs7Ozs7MENBQzFHLDhEQUFDZTtnQ0FBSUMsV0FBVTtnQ0FBb0RJLFNBQVMsSUFBTWYsU0FBUyxZQUFZTDswQ0FBU0E7Ozs7OzswQ0FDaEgsOERBQUNlO2dDQUFJQyxXQUFVO2dDQUFpREksU0FBUyxJQUFNZixTQUFTLFFBQVFMOzBDQUFTQTs7Ozs7OzBDQUN6Ryw4REFBQ2U7Z0NBQUlDLFdBQVU7Z0NBQXFESSxTQUFTLElBQU1mLFNBQVMsYUFBYUw7MENBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUg7R0FwR01EO0tBQUFBO0FBc0dOLFNBQVM7QUFDVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhvbWUgcGFnZSBvZiB0aGUgYXBwXG5cbi8vIEltcG9ydHNcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbnZhciB0ZXh0MnBuZyA9IHJlcXVpcmUoJ3RleHQycG5nJyk7XG5cbi8vIENvbXBvbmVudCBkZWZpbmF0aW9uXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gIC8vIFZhbHVlIG9mIGlucHV0XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgLy8gT24gaW5wdXQgY2hhbmdlXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlIChlKSB7XG5cbiAgICAvLyBTZXQgdmFsdWUgaW4gc3RhdGVcbiAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBkb3dubG9hZChmb250LCB2YWx1ZSkge1xuXG4gICAgLy8gQ3JlYXRlIGEgbGluayBlbGVtZW50XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIFxuICAgIC8vIFNldCB0aGUgbGluayBVUkwgYW5kIGRvd25sb2FkIGZpbGVuYW1lXG4gICAgYS5ocmVmID0gdGV4dDJwbmcodmFsdWUsIHsgXG4gICAgICBmb250OiAnNTAwcHggJysgZm9udCxcbiAgICAgIGxvY2FsRm9udE5hbWU6IGZvbnQsXG4gICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgIG91dHB1dDogJ2RhdGFVUkwnXG4gICAgfSk7XG4gICAgXG4gICAgYS5kb3dubG9hZCA9IGAke2ZvbnR9LnBuZ2A7XG4gICAgXG4gICAgLy8gQ2xpY2sgdGhlIGxpbmsgcHJvZ3JhbW1hdGljYWxseSB0byB0cmlnZ2VyIHRoZSBkb3dubG9hZFxuICAgIGEuY2xpY2soKTtcbiAgfVxuXG4gIC8vIEZ1bmN0aW9uIHRvIGRvd25sb2FkIHBuZ1xuICAvLyBmdW5jdGlvbiBkb3dubG9hZChmb250LCB2YWx1ZSkge1xuICAvLyAgIC8vIENyZWF0ZSBhIGNhbnZhcyBlbGVtZW50XG4gIC8vICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgLy8gICAvLyBHZXQgdGhlIDJEIGNvbnRleHQgb2YgdGhlIGNhbnZhc1xuICAvLyAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIC8vICAgLy8gU2V0IHRoZSBmb250IGFuZCBhbGlnbm1lbnQgcHJvcGVydGllc1xuICAvLyAgIGN0eC5mb250ID0gYDIwMHB4ICR7Zm9udC50b0xvd2VyQ2FzZSgpfWA7XG4gIC8vICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIC8vICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gIC8vICAgLy8gTWVhc3VyZSB0aGUgd2lkdGggb2YgdGhlIHRleHRcbiAgLy8gICAvLyBjb25zdCB0ZXh0V2lkdGggPSBjdHgubWVhc3VyZVRleHQodmFsdWUpLndpZHRoO1xuICAvLyAgIC8vIGNvbnN0IHRleHRIZWlnaHQgPSBjdHgubWVhc3VyZVRleHQodmFsdWUpLmhlaWdodDtcblxuICAvLyAgIGNvbnN0IHRleHRXaWR0aCA9IFwiMzAwXCI7XG4gIC8vICAgLy8gU2V0IHRoZSBjYW52YXMgc2l6ZSBiYXNlZCBvbiB0aGUgdGV4dCB3aWR0aFxuICAvLyAgIGNhbnZhcy53aWR0aCA9IHRleHRXaWR0aDsgLy8gYWRkIHNvbWUgcGFkZGluZ1xuICAvLyAgIGNhbnZhcy5oZWlnaHQgPSAyMDA7XG4gIC8vICAgLy8gU2V0IHRoZSBmaWxsIGNvbG9yIHRvIHRyYW5zcGFyZW50IChhbHBoYSA9IDApXG4gIC8vICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiOyAvLyBzZXQgYWxwaGEgdG8gMFxuICAvLyAgIC8vIEZpbGwgdGhlIGNhbnZhcyB3aXRoIHRoZSBmaWxsIGNvbG9yXG4gIC8vICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIC8vICAgLy8gU2V0IHRoZSBmaWxsIGNvbG9yIHRvIGJsYWNrXG4gIC8vICAgY3R4LmZpbGxTdHlsZSA9IFwiI2VkZWRlZFwiO1xuICAvLyAgIC8vIERyYXcgdGhlIHRleHQgb24gdGhlIGNhbnZhc1xuICAvLyAgIGN0eC5maWxsVGV4dCh2YWx1ZSwgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xuICAgIFxuICAvLyAgIC8vIENvbnZlcnQgdGhlIGNhbnZhcyB0byBhIFBORyBibG9iXG4gIC8vICAgY2FudmFzLnRvQmxvYihibG9iID0+IHtcbiAgLy8gICAgIC8vIENyZWF0ZSBhIFVSTCBmb3IgdGhlIGJsb2JcbiAgLy8gICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gIC8vICAgICAvLyBDcmVhdGUgYSBsaW5rIGVsZW1lbnRcbiAgLy8gICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgLy8gICAgIC8vIFNldCB0aGUgbGluayBVUkwgYW5kIGRvd25sb2FkIGZpbGVuYW1lXG4gIC8vICAgICBhLmhyZWYgPSB1cmw7XG4gIC8vICAgICBhLmRvd25sb2FkID0gYCR7dmFsdWV9LnBuZ2A7XG4gIC8vICAgICAvLyBDbGljayB0aGUgbGluayBwcm9ncmFtbWF0aWNhbGx5IHRvIHRyaWdnZXIgdGhlIGRvd25sb2FkXG4gIC8vICAgICBhLmNsaWNrKCk7XG4gIC8vICAgICAvLyBSZXZva2UgdGhlIFVSTCB0byByZWxlYXNlIG1lbW9yeVxuICAvLyAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAvLyAgIH0sIFwiaW1hZ2UvcG5nXCIsIDEpOyAvLyBzZXQgcXVhbGl0eSB0byAxIChtYXhpbXVtKVxuICAvLyB9XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBmbGV4LWNvbCBmbGV4IGJnLWdyYXktMSB3LWZ1bGwgaC1zY3JlZW4gZ2FwLTE2IGl0ZW1zLWNlbnRlcic+XG4gICAgICBcbiAgICAgIHsvKiBIZWFkZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC10aXRsZSB0ZXh0LXdoaXRlLTEgZm9udC1xYW1yaSc+2KrYrtuM2YQ8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1zLWNlbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBmbGV4LWNvbCc+XG4gICAgICAgIHsvKiBJbnB1dCAqL31cbiAgICAgICAgPGlucHV0IG5hbWU9J3RleHQnIGNsYXNzTmFtZT0ncHktMyB0ZXh0LXJpZ2h0IGgtMTIgcHgtNiBiZy1ncmF5LTIgdy0zLzYgcGxhY2Vob2xkZXI6dGV4dC13aGl0ZS0yIG91dGxpbmUtbm9uZSBib3gtYm9yZGVyIHRleHQtbGcgcm91bmRlZC1zbSBhbGlnbi1taWRkbGUgdGV4dC13aGl0ZS0yIGJvcmRlciBib3JkZXItd2hpdGUtMiBib3JkZXItb3BhY2l0eS0xMCBmb2N1czpib3JkZXItb3BhY2l0eS0yMCAnIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9Lz5cbiAgICAgICAgXG4gICAgICAgIHsvKiBEaXNwbGF5ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMjAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgb3ZlcmZsb3ctc2Nyb2xsIHctZnVsbCBoLTk2Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1oMSB0ZXh0LXdoaXRlLTEgZm9udC1xYW1yaSBjdXJzb3ItcG9pbnRlcicgb25DbGljaz17KCkgPT4gZG93bmxvYWQoXCJRYW1yaVwiLCB2YWx1ZSl9Pnt2YWx1ZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1oMSB0ZXh0LXdoaXRlLTEgZm9udC1kaXZhbmdpcnkgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkKFwiRGl2YW5naXJ5XCIsIHZhbHVlKX0+e3ZhbHVlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWgxIHRleHQtd2hpdGUtMSBmb250LXRhc21lZW0gY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkKFwiVGFzbWVlbVwiLCB2YWx1ZSl9Pnt2YWx1ZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1oMSB0ZXh0LXdoaXRlLTEgZm9udC1rYW1yYW4gY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkKFwiS2FtcmFuXCIsIHZhbHVlKX0+e3ZhbHVlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWgxIHRleHQtd2hpdGUtMSBmb250LWFidXphciBjdXJzb3ItcG9pbnRlcicgb25DbGljaz17KCkgPT4gZG93bmxvYWQoXCJBYnV6YXJcIiwgdmFsdWUpfT57dmFsdWV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtaDEgdGV4dC13aGl0ZS0xIGZvbnQtc2FkYWYgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkKFwiU2FkYWZcIiwgdmFsdWUpfT57dmFsdWV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtaDEgdGV4dC13aGl0ZS0xIGZvbnQtdWJhaWQgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkKFwiVWJhaWRcIiwgdmFsdWUpfT57dmFsdWV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtaDEgdGV4dC13aGl0ZS0xIGZvbnQtdGVocmVlcmkgY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkKFwiVGVocmVlcmlcIiwgdmFsdWUpfT57dmFsdWV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtaDEgdGV4dC13aGl0ZS0xIGZvbnQtcWFsYW0gY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkKFwiUWFsbVwiLCB2YWx1ZSl9Pnt2YWx1ZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1oMSB0ZXh0LXdoaXRlLTEgZm9udC1zaGVrYXN0YWggY3Vyc29yLXBvaW50ZXInIG9uQ2xpY2s9eygpID0+IGRvd25sb2FkKFwiU2hla2FzdGFoXCIsIHZhbHVlKX0+e3ZhbHVlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidGV4dDJwbmciLCJyZXF1aXJlIiwiSG9tZSIsInZhbHVlIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJkb3dubG9hZCIsImZvbnQiLCJhIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImxvY2FsRm9udE5hbWUiLCJjb2xvciIsIm91dHB1dCIsImNsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJuYW1lIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});