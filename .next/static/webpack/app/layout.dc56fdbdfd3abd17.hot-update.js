"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/redux/features/auth/authSlice.ts":
/*!**********************************************!*\
  !*** ./src/redux/features/auth/authSlice.ts ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authSlice: function() { return /* binding */ authSlice; },\n/* harmony export */   changeRegisterStep: function() { return /* binding */ changeRegisterStep; }\n/* harmony export */ });\n/* harmony import */ var _enums_authEnums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/enums/authEnums */ \"(app-client)/./src/enums/authEnums.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-client)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\n\nconst initialState = {\n    isLoading: false,\n    currentRegisterStep: _enums_authEnums__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_STEP.EMAIL_REGISTER\n};\n/**\r\n * Register email thunk\r\n */ const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        changeRegisterStep: (state, action)=>{\n            state.currentRegisterStep = action.payload;\n        }\n    }\n});\nconst { changeRegisterStep } = authSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (authSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3JlZHV4L2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBc0Q7QUFJVztBQU9qRSxNQUFNRSxlQUFlO0lBQ25CQyxXQUFXO0lBQ1hDLHFCQUFxQkosK0RBQWlCQSxDQUFDSyxjQUFjO0FBQ3ZEO0FBRUE7O0NBRUMsR0FFTSxNQUFNQyxZQUFZTCw2REFBV0EsQ0FBQztJQUNuQ00sTUFBTTtJQUNOTDtJQUNBTSxVQUFVO1FBQ1JDLG9CQUFvQixDQUFDQyxPQUFPQztZQUMxQkQsTUFBTU4sbUJBQW1CLEdBQUdPLE9BQU9DLE9BQU87UUFDNUM7SUFDRjtBQUNGLEdBQUc7QUFFSSxNQUFNLEVBQUVILGtCQUFrQixFQUFFLEdBQUdILFVBQVVPLE9BQU8sQ0FBQztBQUN4RCwrREFBZVAsVUFBVVEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZS50cz9kZDRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJFR0lTVFJBVElPTl9TVEVQIH0gZnJvbSAnQC9lbnVtcy9hdXRoRW51bXMnO1xyXG5pbXBvcnQgeyBnZXRSb3V0ZXMgfSBmcm9tICdAL2hlbHBlcnMvZ2V0Um91dGVzJztcclxuaW1wb3J0IG5vdGlmeSBmcm9tICdAL2hlbHBlcnMvbm90aWZ5JztcclxuaW1wb3J0IHsgRW1haWxSZWdpc3RlckJvZHlUeXBlcyB9IGZyb20gJ0AvdHlwZXMvYXV0aC50eXBlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG50eXBlIEF1dGhTdGF0ZSA9IHtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgY3VycmVudFJlZ2lzdGVyU3RlcDogbnVtYmVyO1xyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgY3VycmVudFJlZ2lzdGVyU3RlcDogUkVHSVNUUkFUSU9OX1NURVAuRU1BSUxfUkVHSVNURVIsXHJcbn0gYXMgQXV0aFN0YXRlO1xyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVyIGVtYWlsIHRodW5rXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAnYXV0aCcsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBjaGFuZ2VSZWdpc3RlclN0ZXA6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnRSZWdpc3RlclN0ZXAgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBjaGFuZ2VSZWdpc3RlclN0ZXAgfSA9IGF1dGhTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBhdXRoU2xpY2UucmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbIlJFR0lTVFJBVElPTl9TVEVQIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpc0xvYWRpbmciLCJjdXJyZW50UmVnaXN0ZXJTdGVwIiwiRU1BSUxfUkVHSVNURVIiLCJhdXRoU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJjaGFuZ2VSZWdpc3RlclN0ZXAiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/redux/features/auth/authSlice.ts\n"));

/***/ })

});