webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Project_Project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Project/Project */ \"./components/Project/Project.js\");\n/* harmony import */ var _components_NavList_NavList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavList/NavList */ \"./components/NavList/NavList.js\");\n/* harmony import */ var _components_FooterList_FooterList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FooterList/FooterList.js */ \"./components/FooterList/FooterList.js\");\n/* harmony import */ var _components_Contact_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Contact/Contact */ \"./components/Contact/Contact.js\");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction indexPage(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(['react, hooks, redux, firebase', 'html + css', ' Node.Js + PUG', 'React Hooks App with socket.io', ' NodeJs express handlebar', 'MERN Stack ', 'tinder app created with vanilla Js', ' canvas and vanilla js']),\n      project = _useState[0],\n      setProject = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      searched = _useState2[0],\n      setSearched = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var background = document.getElementsByTagName('html')[0];\n    background.style.backgroundColor = '#4a4f9b';\n    var body = document.getElementsByTagName('body')[0];\n    body.style.backgroundColor = '#fff';\n    var nextId = document.getElementById('__next');\n    nextId.style.padding = '3rem';\n  }, []); // const searchHandler = (event) => {\n  //   const result = event.target.value;\n  //   const filteredProject = project.filter((p) =>\n  //     p.toLowerCase().includes(result)\n  //   );\n  //   setSearched(true);\n  //   console.log(filteredProject);\n  //   console.log(searched);\n  // };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"header\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Header\n  }, __jsx(\"h1\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Title\n  }, \"Lu Ye Zhan's personal page\"), __jsx(\"nav\", null, __jsx(\"ul\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Ul\n  }, __jsx(_components_NavList_NavList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    navContent: \"About Lu\",\n    href: \"\",\n    link: \"#about\"\n  }), __jsx(_components_NavList_NavList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    navContent: \"Contact\",\n    href: \"\",\n    link: \"#contact\"\n  }), __jsx(_components_NavList_NavList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    navContent: \"Blog\",\n    href: \"\",\n    link: \"/blog\"\n  })))), __jsx(\"div\", {\n    id: \"about\"\n  }, __jsx(\"h2\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Title\n  }, \"About Lu\"), __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.About\n  }, __jsx(\"p\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.AboutContent\n  }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt delectus porro aliquid, doloribus quo et! Autem, magni, dicta ab beatae sint suscipit facilis eveniet consectetur assumenda provident incidunt quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt delectus porro aliquid, doloribus quo et! Autem, magni, dicta ab beatae sint suscipit facilis eveniet consectetur assumenda provident incidunt quo.\"), __jsx(\"img\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Img,\n    src: \"../assets/personal.jpeg\",\n    alt: \"photo of Lu\"\n  }))), __jsx(\"h2\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Title\n  }, \"Projects\"), __jsx(\"div\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.Container\n  }, __jsx(_components_Project_Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    name: \"Burger App\",\n    url: \"https://react-my-burger-75352.web.app/\",\n    description: project[0],\n    image: \"../assets/burger.jpg\",\n    alt: \"burger project\"\n  }), __jsx(_components_Project_Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    name: \"Natours App\",\n    url: \"https://luyezhan.github.io/Natours/\",\n    description: project[1],\n    image: \"../assets/natours.png\",\n    alt: \"natours front project\"\n  }), __jsx(_components_Project_Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    name: \"Natours Api\",\n    url: \"https://natours11api.herokuapp.com/\",\n    description: project[2],\n    image: \"../assets/natoursApi.png\",\n    alt: \"natours Api project\"\n  }), __jsx(_components_Project_Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    name: \"Kiwi-Me App\",\n    url: \"https://kiwi-me.firebaseapp.com/\",\n    description: project[3],\n    image: \"../assets/kiwi.png\",\n    alt: \"Kiwi project\"\n  }), __jsx(_components_Project_Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    name: \"Tomeu bnb app\",\n    url: \"https://tomeu.herokuapp.com/\",\n    description: project[4],\n    image: \"../assets/tomeu.png\",\n    alt: \"Tomeu project\"\n  }), __jsx(_components_Project_Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    name: \"Social Network App\",\n    url: \"https://listenandtalk-a3074.firebaseapp.com/\",\n    description: project[5],\n    image: \"../assets/listenandtalk.png\",\n    alt: \"listen & talk  project\"\n  }), __jsx(_components_Project_Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    name: \"My tinder app\",\n    url: \"https://luyezhan.github.io/Loveweb/\",\n    description: project[6],\n    image: \"../assets/loveapp.png\",\n    alt: \"tinder  project\"\n  }), __jsx(_components_Project_Project__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    url: \"https://luyezhan.github.io/Code-Invader//\",\n    description: project[7],\n    image: \"../assets/codeinvader.png\",\n    alt: \"Game project \"\n  })), __jsx(_components_Contact_Contact__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), __jsx(\"footer\", {\n    className: _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.FooterContainer\n  }, __jsx(_components_FooterList_FooterList_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    icon: \"../icons/githubicon.png\",\n    redirect: \"https://github.com/luyezhan\"\n  }), __jsx(_components_FooterList_FooterList_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    icon: \"../icons/linkedinicon.png\",\n    redirect: \"https://www.linkedin.com/in/luyezhan/\"\n  }), __jsx(_components_FooterList_FooterList_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    icon: \"../icons/InstagramIcon.png\",\n    redirect: \"https://www.instagram.com/luyezhan/\"\n  })));\n}\n\n_s(indexPage, \"GJ+qBWoY0LYcCP/nayKryKH8ytc=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (indexPage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJpbmRleFBhZ2UiLCJwcm9wcyIsInVzZVN0YXRlIiwicHJvamVjdCIsInNldFByb2plY3QiLCJzZWFyY2hlZCIsInNldFNlYXJjaGVkIiwidXNlRWZmZWN0IiwiYmFja2dyb3VuZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvZHkiLCJuZXh0SWQiLCJnZXRFbGVtZW50QnlJZCIsInBhZGRpbmciLCJjbGFzc2VzIiwiSGVhZGVyIiwiVGl0bGUiLCJVbCIsIkFib3V0IiwiQWJvdXRDb250ZW50IiwiSW1nIiwiQ29udGFpbmVyIiwiRm9vdGVyQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsQ0FDckMsK0JBRHFDLEVBRXJDLFlBRnFDLEVBR3JDLGdCQUhxQyxFQUlyQyxnQ0FKcUMsRUFLckMsMkJBTHFDLEVBTXJDLGFBTnFDLEVBT3JDLG9DQVBxQyxFQVFyQyx3QkFScUMsQ0FBRCxDQURkO0FBQUEsTUFDakJDLE9BRGlCO0FBQUEsTUFDUkMsVUFEUTs7QUFBQSxtQkFZUUYsc0RBQVEsQ0FBQyxLQUFELENBWmhCO0FBQUEsTUFZakJHLFFBWmlCO0FBQUEsTUFZUEMsV0FaTzs7QUFjeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFuQjtBQUNBRixjQUFVLENBQUNHLEtBQVgsQ0FBaUJDLGVBQWpCLEdBQW1DLFNBQW5DO0FBQ0EsUUFBTUMsSUFBSSxHQUFHSixRQUFRLENBQUNDLG9CQUFULENBQThCLE1B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U0FBSyxFQUFDLDZCQUpSO0FBS0UsT0FBRyxFQUFDO0FBTE4sSUFwQ0YsRUEyQ0UsTUFBQyxtRUFBRDtBQUNFLFFBQUksRUFBQyxlQURQO0FBRUUsT0FBRyxFQUFDLHFDQUZOO0FBR0UsZUFBVyxFQUFFQSxPQUFPLENBQUMsQ0FBRCxDQUh0QjtBQUlFLFNBQUssRUFBQyx1QkFKUjtBQUtFLE9BQUcsRUFBQztBQUxOLElBM0NGLEVBa0RFLE1BQUMsbUVBQUQ7QUFDRSxPQUFHLEVBQUMsMkNBRE47QUFFRSxlQUFXLEVBQUVBLE9BQU8sQ0FBQyxDQUFELENBRnRCO0FBR0UsU0FBSyxFQUFDLDJCQUhSO0FBSUUsT0FBRyxFQUFDO0FBSk4sSUFsREYsQ0FsQ0YsRUE0RkUsTUFBQyxtRUFBRCxPQTVGRixFQThGRTtBQUFRLGFBQVMsRUFBRWMsd0RBQU8sQ0FBQ1E7QUFBM0IsS0FDRSxNQUFDLDRFQUFEO0FBQ0UsUUFBSSxFQUFDLHlCQURQO0FBRUUsWUFBUSxFQUFDO0FBRlgsSUFERixFQUtFLE1BQUMsNEVBQUQ7QUFDRSxRQUFJLEVBQUMsMkJBRFA7QUFFRSxZQUFRLEVBQUM7QUFGWCxJQUxGLEVBU0UsTUFBQyw0RUFBRDtBQUNFLFFBQUksRUFBQyw0QkFEUDtBQUVFLFlBQVEsRUFBQztBQUZYLElBVEYsQ0E5RkYsQ0FERjtBQStHRDs7R0FoSlF6QixTOztBQWtKTUEsd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3QvUHJvamVjdCc7XG5pbXBvcnQgTmF2TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL05hdkxpc3QvTmF2TGlzdCc7XG5pbXBvcnQgRm9vdGVyTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlckxpc3QvRm9vdGVyTGlzdC5qcyc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRhY3QvQ29udGFjdCc7XG5cbmZ1bmN0aW9uIGluZGV4UGFnZShwcm9wcykge1xuICBjb25zdCBbcHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZShbXG4gICAgJ3JlYWN0LCBob29rcywgcmVkdXgsIGZpcmViYXNlJyxcbiAgICAnaHRtbCArIGNzcycsXG4gICAgJyBOb2RlLkpzICsgUFVHJyxcbiAgICAnUmVhY3QgSG9va3MgQXBwIHdpdGggc29ja2V0LmlvJyxcbiAgICAnIE5vZGVKcyBleHByZXNzIGhhbmRsZWJhcicsXG4gICAgJ01FUk4gU3RhY2sgJyxcbiAgICAndGluZGVyIGFwcCBjcmVhdGVkIHdpdGggdmFuaWxsYSBKcycsXG4gICAgJyBjYW52YXMgYW5kIHZhbmlsbGEganMnLFxuICBdKTtcblxuICBjb25zdCBbc2VhcmNoZWQsIHNldFNlYXJjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xuICAgIGJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM0YTRmOWInO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNmZmYnO1xuICAgIGNvbnN0IG5leHRJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX25leHQnKTtcbiAgICBuZXh0SWQuc3R5bGUucGFkZGluZyA9ICczcmVtJztcbiAgfSwgW10pO1xuXG4gIC8vIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgLy8gICBjb25zdCByZXN1bHQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIC8vICAgY29uc3QgZmlsdGVyZWRQcm9qZWN0ID0gcHJvamVjdC5maWx0ZXIoKHApID0+XG4gIC8vICAgICBwLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocmVzdWx0KVxuICAvLyAgICk7XG4gIC8vICAgc2V0U2VhcmNoZWQodHJ1ZSk7XG4gIC8vICAgY29uc29sZS5sb2coZmlsdGVyZWRQcm9qZWN0KTtcbiAgLy8gICBjb25zb2xlLmxvZyhzZWFyY2hlZCk7XG4gIC8vIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2NsYXNzZXMuSGVhZGVyfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy5UaXRsZX0+THUgWWUgWmhhbidzIHBlcnNvbmFsIHBhZ2U8L2gxPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMuVWx9PlxuICAgICAgICAgICAgPE5hdkxpc3QgbmF2Q29udGVudD0nQWJvdXQgTHUnIGhyZWY9JycgbGluaz0nI2Fib3V0JyAvPlxuICAgICAgICAgICAgPE5hdkxpc3QgbmF2Q29udGVudD0nQ29udGFjdCcgaHJlZj0nJyBsaW5rPScjY29udGFjdCcgLz5cbiAgICAgICAgICAgIDxOYXZMaXN0IG5hdkNvbnRlbnQ9J0Jsb2cnIGhyZWY9JycgbGluaz0nL2Jsb2cnIC8+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPGRpdiBpZD0nYWJvdXQnPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLlRpdGxlfT5BYm91dCBMdTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkFib3V0fT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuQWJvdXRDb250ZW50fT5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFtZXRcbiAgICAgICAgICAgIGRlc2VydW50IGRlbGVjdHVzIHBvcnJvIGFsaXF1aWQsIGRvbG9yaWJ1cyBxdW8gZXQhIEF1dGVtLCBtYWduaSxcbiAgICAgICAgICAgIGRpY3RhIGFiIGJlYXRhZSBzaW50IHN1c2NpcGl0IGZhY2lsaXMgZXZlbmlldCBjb25zZWN0ZXR1ciBhc3N1bWVuZGFcbiAgICAgICAgICAgIHByb3ZpZGVudCBpbmNpZHVudCBxdW8uIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyXG4gICAgICAgICAgICBhZGlwaXNpY2luZyBlbGl0LiBBbWV0IGRlc2VydW50IGRlbGVjdHVzIHBvcnJvIGFsaXF1aWQsIGRvbG9yaWJ1c1xuICAgICAgICAgICAgcXVvIGV0ISBBdXRlbSwgbWFnbmksIGRpY3RhIGFiIGJlYXRhZSBzaW50IHN1c2NpcGl0IGZhY2lsaXMgZXZlbmlldFxuICAgICAgICAgICAgY29uc2VjdGV0dXIgYXNzdW1lbmRhIHByb3ZpZGVudCBpbmNpZHVudCBxdW8uXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLkltZ31cbiAgICAgICAgICAgIHNyYz0nLi4vYXNzZXRzL3BlcnNvbmFsLmpwZWcnXG4gICAgICAgICAgICBhbHQ9J3Bob3RvIG9mIEx1J1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtjbGFzc2VzLlRpdGxlfT5Qcm9qZWN0czwvaDI+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkNvbnRhaW5lcn0+XG4gICAgICAgIDxQcm9qZWN0XG4gICAgICAgICAgbmFtZT0nQnVyZ2VyIEFwcCdcbiAgICAgICAgICB1cmw9J2h0dHBzOi8vcmVhY3QtbXktYnVyZ2VyLTc1MzUyLndlYi5hcHAvJ1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0WzBdfVxuICAgICAgICAgIGltYWdlPScuLi9hc3NldHMvYnVyZ2VyLmpwZydcbiAgICAgICAgICBhbHQ9J2J1cmdlciBwcm9qZWN0J1xuICAgICAgICAvPlxuICAgICAgICA8UHJvamVjdFxuICAgICAgICAgIG5hbWU9J05hdG91cnMgQXBwJ1xuICAgICAgICAgIHVybD0naHR0cHM6Ly9sdXllemhhbi5naXRodWIuaW8vTmF0b3Vycy8nXG4gICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3RbMV19XG4gICAgICAgICAgaW1hZ2U9Jy4uL2Fzc2V0cy9uYXRvdXJzLnBuZydcbiAgICAgICAgICBhbHQ9J25hdG91cnMgZnJvbnQgcHJvamVjdCdcbiAgICAgICAgLz5cbiAgICAgICAgPFByb2plY3RcbiAgICAgICAgICBuYW1lPSdOYXRvdXJzIEFwaSdcbiAgICAgICAgICB1cmw9J2h0dHBzOi8vbmF0b3VyczExYXBpLmhlcm9rdWFwcC5jb20vJ1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0WzJdfVxuICAgICAgICAgIGltYWdlPScuLi9hc3NldHMvbmF0b3Vyc0FwaS5wbmcnXG4gICAgICAgICAgYWx0PSduYXRvdXJzIEFwaSBwcm9qZWN0J1xuICAgICAgICAvPlxuICAgICAgICA8UHJvamVjdFxuICAgICAgICAgIG5hbWU9J0tpd2ktTWUgQXBwJ1xuICAgICAgICAgIHVybD0naHR0cHM6Ly9raXdpLW1lLmZpcmViYXNlYXBwLmNvbS8nXG4gICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3RbM119XG4gICAgICAgICAgaW1hZ2U9Jy4uL2Fzc2V0cy9raXdpLnBuZydcbiAgICAgICAgICBhbHQ9J0tpd2kgcHJvamVjdCdcbiAgICAgICAgLz5cbiAgICAgICAgPFByb2plY3RcbiAgICAgICAgICBuYW1lPSdUb21ldSBibmIgYXBwJ1xuICAgICAgICAgIHVybD0naHR0cHM6Ly90b21ldS5oZXJva3VhcHAuY29tLydcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdFs0XX1cbiAgICAgICAgICBpbWFnZT0nLi4vYXNzZXRzL3RvbWV1LnBuZydcbiAgICAgICAgICBhbHQ9J1RvbWV1IHByb2plY3QnXG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0XG4gICAgICAgICAgbmFtZT0nU29jaWFsIE5ldHdvcmsgQXBwJ1xuICAgICAgICAgIHVybD0naHR0cHM6Ly9saXN0ZW5hbmR0YWxrLWEzMDc0LmZpcmViYXNlYXBwLmNvbS8nXG4gICAgICAgICAgZGVzY3JpcHRpb249e3Byb2plY3RbNV19XG4gICAgICAgICAgaW1hZ2U9Jy4uL2Fzc2V0cy9saXN0ZW5hbmR0YWxrLnBuZydcbiAgICAgICAgICBhbHQ9J2xpc3RlbiAmIHRhbGsgIHByb2plY3QnXG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0XG4gICAgICAgICAgbmFtZT0nTXkgdGluZGVyIGFwcCdcbiAgICAgICAgICB1cmw9J2h0dHBzOi8vbHV5ZXpoYW4uZ2l0aHViLmlvL0xvdmV3ZWIvJ1xuICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0WzZdfVxuICAgICAgICAgIGltYWdlPScuLi9hc3NldHMvbG92ZWFwcC5wbmcnXG4gICAgICAgICAgYWx0PSd0aW5kZXIgIHByb2plY3QnXG4gICAgICAgIC8+XG4gICAgICAgIDxQcm9qZWN0XG4gICAgICAgICAgdXJsPSdodHRwczovL2x1eWV6aGFuLmdpdGh1Yi5pby9Db2RlLUludmFkZXIvLydcbiAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdFs3XX1cbiAgICAgICAgICBpbWFnZT0nLi4vYXNzZXRzL2NvZGVpbnZhZGVyLnBuZydcbiAgICAgICAgICBhbHQ9J0dhbWUgcHJvamVjdCAnXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENvbnRhY3QgLz5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuRm9vdGVyQ29udGFpbmVyfT5cbiAgICAgICAgPEZvb3Rlckxpc3RcbiAgICAgICAgICBpY29uPScuLi9pY29ucy9naXRodWJpY29uLnBuZydcbiAgICAgICAgICByZWRpcmVjdD0naHR0cHM6Ly9naXRodWIuY29tL2x1eWV6aGFuJ1xuICAgICAgICAvPlxuICAgICAgICA8Rm9vdGVyTGlzdFxuICAgICAgICAgIGljb249Jy4uL2ljb25zL2xpbmtlZGluaWNvbi5wbmcnXG4gICAgICAgICAgcmVkaXJlY3Q9J2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9sdXllemhhbi8nXG4gICAgICAgIC8+XG4gICAgICAgIDxGb290ZXJMaXN0XG4gICAgICAgICAgaWNvbj0nLi4vaWNvbnMvSW5zdGFncmFtSWNvbi5wbmcnXG4gICAgICAgICAgcmVkaXJlY3Q9J2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vbHV5ZXpoYW4vJ1xuICAgICAgICAvPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4UGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})