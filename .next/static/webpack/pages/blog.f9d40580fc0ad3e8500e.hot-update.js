webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Blog_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blog.module.css */ \"./pages/blog/Blog.module.css\");\n/* harmony import */ var _Blog_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Blog_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavList_NavList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/NavList/NavList */ \"./components/NavList/NavList.js\");\nvar _jsxFileName = \"/Users/SissyXia11/Desktop/reacthomework/next-js-app/pages/blog/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction blog(props) {\n  _s();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var background = document.getElementsByTagName('html')[0];\n    background.style.backgroundColor = '#4a4f9b';\n    var body = document.getElementsByTagName('body')[0];\n    body.style.backgroundColor = '#fff';\n    var nextId = document.getElementById('__next');\n    nextId.style.padding = '3rem';\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"header\", {\n    className: _Blog_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: _Blog_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, props.appName, \" page\"), __jsx(\"nav\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(\"ul\", {\n    className: _Blog_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.Ul,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 11\n    }\n  }, __jsx(_components_NavList_NavList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    navContent: \"About Lu\",\n    href: \"\",\n    link: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }), __jsx(_components_NavList_NavList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    navContent: \"Contact\",\n    href: \"\",\n    link: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }), __jsx(_components_NavList_NavList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    navContent: \"Blog\",\n    href: \"\",\n    link: \"/blog\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  })))), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"Blog\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt delectus porro aliquid, doloribus quo et! Autem, magni, dicta ab beatae sint suscipit facilis eveniet consectetur assumenda provident incidunt quo.\"));\n}\n\n_s(blog, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nblog.getInitialProps = function (context) {\n  var promise = new Promise(function (resolve, reject) {\n    setTimeout(function () {\n      resolve({\n        appName: 'Blog'\n      });\n    }, 1000);\n  });\n  return promise;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (blog);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC5qcz9mZjI4Il0sIm5hbWVzIjpbImJsb2ciLCJwcm9wcyIsInVzZUVmZmVjdCIsImJhY2tncm91bmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib2R5IiwibmV4dElkIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYWRkaW5nIiwiY2xhc3NlcyIsIkhlYWRlciIsIlRpdGxlIiwiYXBwTmFtZSIsIlVsIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQ25CQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0Msb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBbkI7QUFDQUYsY0FBVSxDQUFDRyxLQUFYLENBQWlCQyxlQUFqQixHQUFtQyxTQUFuQztBQUNBLFFBQU1DLElBQUksR0FBR0osUUFBUSxDQUFDQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFiO0FBQ0FHLFFBQUksQ0FBQ0YsS0FBTCxDQUFXQyxlQUFYLEdBQTZCLE1BQTdCO0FBQ0EsUUFBTUUsTUFBTSxHQUFHTCxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBRCxVQUFNLENBQUNILEtBQVAsQ0FBYUssT0FBYixHQUF1QixNQUF2QjtBQUNELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFRQSxTQUNFLG1FQUNFO0FBQVEsYUFBUyxFQUFFQyx1REFBTyxDQUFDQyxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVELHVEQUFPLENBQUNFLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JiLEtBQUssQ0FBQ2MsT0FBckMsVUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUgsdURBQU8sQ0FBQ0ksRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFBUyxjQUFVLEVBQUMsVUFBcEI7QUFBK0IsUUFBSSxFQUFDLEVBQXBDO0FBQXVDLFFBQUksRUFBQyxHQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLG1FQUFEO0FBQVMsY0FBVSxFQUFDLFNBQXBCO0FBQThCLFFBQUksRUFBQyxFQUFuQztBQUFzQyxRQUFJLEVBQUMsR0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxtRUFBRDtBQUFTLGNBQVUsRUFBQyxNQUFwQjtBQUEyQixRQUFJLEVBQUMsRUFBaEM7QUFBbUMsUUFBSSxFQUFDLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGLENBRkYsQ0FERixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa09BWkYsQ0FERjtBQXFCRDs7R0E5QlFoQixJOztBQWdDVEEsSUFBSSxDQUFDaUIsZUFBTCxHQUF1QixVQUFDQyxPQUFELEVBQWE7QUFDbEMsTUFBTUMsT0FBTyxHQUFHLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDL0NDLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZGLGFBQU8sQ0FBQztBQUFFTixlQUFPLEVBQUU7QUFBWCxPQUFELENBQVA7QUFDRCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0QsR0FKZSxDQUFoQjtBQUtBLFNBQU9JLE9BQVA7QUFDRCxDQVBEOztBQVNlbkIsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vQmxvZy5tb2R1bGUuY3NzJztcbmltcG9ydCBOYXZMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2TGlzdC9OYXZMaXN0JztcblxuZnVuY3Rpb24gYmxvZyhwcm9wcykge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xuICAgIGJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YTRmOWInO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICAgIGNvbnN0IG5leHRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX25leHQnKTtcbiAgICBuZXh0SWQuc3R5bGUucGFkZGluZyA9ICczcmVtJztcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5IZWFkZXJ9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLlRpdGxlfT57cHJvcHMuYXBwTmFtZX0gcGFnZTwvaDE+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5VbH0+XG4gICAgICAgICAgICA8TmF2TGlzdCBuYXZDb250ZW50PSdBYm91dCBMdScgaHJlZj0nJyBsaW5rPScvJyAvPlxuICAgICAgICAgICAgPE5hdkxpc3QgbmF2Q29udGVudD0nQ29udGFjdCcgaHJlZj0nJyBsaW5rPScvJyAvPlxuICAgICAgICAgICAgPE5hdkxpc3QgbmF2Q29udGVudD0nQmxvZycgaHJlZj0nJyBsaW5rPScvYmxvZycgLz5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGgyPkJsb2c8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFtZXQgZGVzZXJ1bnRcbiAgICAgICAgZGVsZWN0dXMgcG9ycm8gYWxpcXVpZCwgZG9sb3JpYnVzIHF1byBldCEgQXV0ZW0sIG1hZ25pLCBkaWN0YSBhYiBiZWF0YWVcbiAgICAgICAgc2ludCBzdXNjaXBpdCBmYWNpbGlzIGV2ZW5pZXQgY29uc2VjdGV0dXIgYXNzdW1lbmRhIHByb3ZpZGVudCBpbmNpZHVudFxuICAgICAgICBxdW8uXG4gICAgICA8L3A+XG4gICAgPC8+XG4gICk7XG59XG5cbmJsb2cuZ2V0SW5pdGlhbFByb3BzID0gKGNvbnRleHQpID0+IHtcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUoeyBhcHBOYW1lOiAnQmxvZycgfSk7XG4gICAgfSwgMTAwMCk7XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJsb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/index.js\n");

/***/ })

})