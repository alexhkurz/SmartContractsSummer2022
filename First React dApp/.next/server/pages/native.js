"use strict";
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
exports.id = "pages/native";
exports.ids = ["pages/native"];
exports.modules = {

/***/ "./pages/native.jsx":
/*!**************************!*\
  !*** ./pages/native.jsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moralis */ \"moralis\");\n/* harmony import */ var moralis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moralis__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @moralisweb3/evm-utils */ \"@moralisweb3/evm-utils\");\n/* harmony import */ var _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Native({ nativeBalance , address  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Wallet: \",\n                    address\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ronankearns/Documents/Chapman/Y3/Internship/First React dApp/pages/native.jsx\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Native Balance: \",\n                    nativeBalance,\n                    \" ETH\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ronankearns/Documents/Chapman/Y3/Internship/First React dApp/pages/native.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ronankearns/Documents/Chapman/Y3/Internship/First React dApp/pages/native.jsx\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps(context) {\n    await moralis__WEBPACK_IMPORTED_MODULE_1___default().start({\n        apiKey: process.env.MORALIS_API_KEY\n    });\n    const address = \"0xcA8Fa8f0b631EcdB18Cda619C4Fc9d197c8aFfCa\";\n    const nativeBalance = await moralis__WEBPACK_IMPORTED_MODULE_1___default().EvmApi.balance.getNativeBalance({\n        chain: _moralisweb3_evm_utils__WEBPACK_IMPORTED_MODULE_2__.EvmChain.ETHEREUM,\n        address\n    });\n    return {\n        props: {\n            address,\n            nativeBalance: nativeBalance.result.balance.ether\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Native);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uYXRpdmUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFDb0I7QUFFbEQsU0FBU0UsT0FBTyxFQUFFQyxjQUFhLEVBQUVDLFFBQU8sRUFBRSxFQUFFO0lBQ3hDLHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNDOztvQkFBRztvQkFBU0Y7Ozs7Ozs7MEJBQ2IsOERBQUNFOztvQkFBRztvQkFBaUJIO29CQUFjOzs7Ozs7Ozs7Ozs7O0FBRy9DO0FBRU8sZUFBZUksbUJBQW1CQyxPQUFPLEVBQUU7SUFDOUMsTUFBTVIsb0RBQWEsQ0FBQztRQUFFVSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFBQztJQUUxRCxNQUFNVCxVQUFVO0lBRWhCLE1BQU1ELGdCQUFnQixNQUFNSCw4RUFBdUMsQ0FBQztRQUNoRWlCLE9BQU9oQixxRUFBaUI7UUFDeEJHO0lBQ0o7SUFFQSxPQUFPO1FBQ0hlLE9BQU87WUFBRWY7WUFBU0QsZUFBZUEsY0FBY2lCLE1BQU0sQ0FBQ0wsT0FBTyxDQUFDTSxLQUFLO1FBQUM7SUFDeEU7QUFDSixDQUFDO0FBRUQsaUVBQWVuQixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2ltcGxlLW5leHRqcy1kZW1vLy4vcGFnZXMvbmF0aXZlLmpzeD9lMjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3JhbGlzIGZyb20gJ21vcmFsaXMnO1xuaW1wb3J0IHsgRXZtQ2hhaW4gfSBmcm9tICdAbW9yYWxpc3dlYjMvZXZtLXV0aWxzJztcblxuZnVuY3Rpb24gTmF0aXZlKHsgbmF0aXZlQmFsYW5jZSwgYWRkcmVzcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz5XYWxsZXQ6IHthZGRyZXNzfTwvaDM+XG4gICAgICAgICAgICA8aDM+TmF0aXZlIEJhbGFuY2U6IHtuYXRpdmVCYWxhbmNlfSBFVEg8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgICBhd2FpdCBNb3JhbGlzLnN0YXJ0KHsgYXBpS2V5OiBwcm9jZXNzLmVudi5NT1JBTElTX0FQSV9LRVkgfSk7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gJzB4Y0E4RmE4ZjBiNjMxRWNkQjE4Q2RhNjE5QzRGYzlkMTk3YzhhRmZDYSc7XG5cbiAgICBjb25zdCBuYXRpdmVCYWxhbmNlID0gYXdhaXQgTW9yYWxpcy5Fdm1BcGkuYmFsYW5jZS5nZXROYXRpdmVCYWxhbmNlKHtcbiAgICAgICAgY2hhaW46IEV2bUNoYWluLkVUSEVSRVVNLFxuICAgICAgICBhZGRyZXNzLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgYWRkcmVzcywgbmF0aXZlQmFsYW5jZTogbmF0aXZlQmFsYW5jZS5yZXN1bHQuYmFsYW5jZS5ldGhlciB9LFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdGl2ZTsiXSwibmFtZXMiOlsiTW9yYWxpcyIsIkV2bUNoYWluIiwiTmF0aXZlIiwibmF0aXZlQmFsYW5jZSIsImFkZHJlc3MiLCJkaXYiLCJoMyIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJzdGFydCIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJNT1JBTElTX0FQSV9LRVkiLCJFdm1BcGkiLCJiYWxhbmNlIiwiZ2V0TmF0aXZlQmFsYW5jZSIsImNoYWluIiwiRVRIRVJFVU0iLCJwcm9wcyIsInJlc3VsdCIsImV0aGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/native.jsx\n");

/***/ }),

/***/ "@moralisweb3/evm-utils":
/*!*****************************************!*\
  !*** external "@moralisweb3/evm-utils" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@moralisweb3/evm-utils");

/***/ }),

/***/ "moralis":
/*!**************************!*\
  !*** external "moralis" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("moralis");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/native.jsx"));
module.exports = __webpack_exports__;

})();