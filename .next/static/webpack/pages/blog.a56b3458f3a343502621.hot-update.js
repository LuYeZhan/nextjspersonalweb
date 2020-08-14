webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/CommentsWidget/CommentsWidget.js":
/*!*****************************************************!*\
  !*** ./components/CommentsWidget/CommentsWidget.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pusher-js */ \"./node_modules/pusher-js/dist/web/pusher.js\");\n/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _Comment_Comment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Comment/Comment */ \"./components/Comment/Comment.js\");\n\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar SAD_EMOJI = [55357, 56864];\nvar HAPPY_EMOJI = [55357, 56832];\nvar NEUTRAL_EMOJI = [55357, 56848];\n\nvar CommentsWidget = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(CommentsWidget, _Component);\n\n  var _super = _createSuper(CommentsWidget);\n\n  function CommentsWidget() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, CommentsWidget);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"state\", {\n      comments: [],\n      person: null\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"handleKeyUp\", function (evt) {\n      var value = evt.target.value;\n\n      if (evt.keyCode === 13 && !evt.shiftKey) {\n        var person = _this.state.person;\n        var comment = {\n          person: person,\n          comment: value,\n          timestamp: +new Date()\n        };\n        evt.target.value = '';\n\n        _this.setState({\n          person: null\n        }, function () {\n          return axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('/comment', comment);\n        });\n      }\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CommentsWidget, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      this.pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_10___default.a(\"5de7312a5af2644bd064\", {\n        cluster: \"eu\",\n        encrypted: true\n      });\n      this.channel = this.pusher.subscribe('post-comments');\n      this.channel.bind('new-comment', function (_ref) {\n        var _ref$comment = _ref.comment,\n            comment = _ref$comment === void 0 ? null : _ref$comment;\n        var comments = _this2.state.comments;\n        comment && comments.push(comment);\n\n        _this2.setState({\n          comments: comments\n        });\n      });\n      this.pusher.connection.bind('connected', function () {\n        axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('/comments').then(function (response) {\n          var comments = response.data.comments;\n\n          _this2.setState({\n            comments: comments\n          });\n        })[\"catch\"](function (error) {\n          console.log(error);\n        });\n      });\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      this.pusher.disconnect();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var people = ['Stephanie', 'John', 'Steve', 'Anna', 'Margaret', 'Felix', 'Chris', 'Jamie', 'Rose', 'Bob', 'Vanessa', '9lad', 'Bridget', 'Sebastian', 'Richard'];\n      var nameBadgeStyles = {\n        fontSize: '0.8rem',\n        height: 40,\n        borderRadius: 20,\n        cursor: 'pointer'\n      };\n\n      var choosePersona = function choosePersona(person) {\n        return function (evt) {\n          return _this3.setState({\n            person: person\n          });\n        };\n      };\n\n      var randomPeople = function randomPeople(count) {\n        var selected = [];\n        var i = 0;\n        count = Math.max(0, Math.min(count, people.length));\n\n        while (i < count) {\n          var index = Math.floor(Math.random() * people.length);\n          if (selected.includes(index)) continue;\n          ++i && selected.push(index);\n        }\n\n        return selected.map(function (index) {\n          var person = people[index];\n          var className = 'd-block d-flex align-items-center text-center text-white bg-secondary font-weight-bold py-2 px-4 mr-3';\n          return __jsx(\"span\", {\n            key: index,\n            className: className,\n            style: nameBadgeStyles,\n            title: person,\n            onClick: choosePersona(person)\n          }, person);\n        });\n      };\n\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(\"div\", {\n        className: \"border-bottom border-gray w-100 px-2 d-flex align-items-center bg-white justify-content-between\",\n        style: {\n          height: 90\n        }\n      }, __jsx(\"h2\", {\n        className: \"text-dark mb-0 mx-4\"\n      }, \"Comments\"), __jsx(\"span\", {\n        className: \"badge badge-pill badge-primary mx-4\",\n        style: {\n          fontSize: '1.2rem'\n        }\n      }, this.state.comments.length)), __jsx(\"div\", {\n        className: \"px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start align-content-start position-relative\",\n        style: {\n          height: 'calc(100% - 250px)',\n          overflowY: 'scroll'\n        }\n      }, this.state.comments.map(function (comment, index) {\n        var mood = comment.sentiment > 0 ? HAPPY_EMOJI : comment.sentiment === 0 ? NEUTRAL_EMOJI : SAD_EMOJI;\n        return __jsx(react__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], {\n          key: index\n        }, __jsx(\"div\", {\n          className: \"d-flex justify-content-start align-items-center w-100 font-weight-bold text-dark mt-4 pb-1 px-1\",\n          style: {\n            fontSize: '0.9rem'\n          }\n        }, __jsx(\"span\", {\n          className: \"d-inline-block pr-1\",\n          style: {\n            fontSize: '1.25rem'\n          }\n        }, String.fromCodePoint.apply(String, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mood))), __jsx(\"span\", {\n          className: \"align-middle\",\n          style: {\n            lineHeight: '1.25rem'\n          }\n        }, comment.person || 'Anonymous')), __jsx(_Comment_Comment__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n          text: comment.comment\n        }));\n      })), __jsx(\"div\", {\n        className: \"border-top border-gray w-100 px-4 d-flex flex-wrap align-items-center align-content-center bg-light\",\n        style: {\n          height: 160\n        }\n      }, !this.state.person && __jsx(\"span\", {\n        className: \"text-dark py-2\",\n        style: {\n          fontSize: '1.5rem',\n          fontWeight: 500\n        }\n      }, \"Choose your Persona\"), __jsx(\"div\", {\n        className: \"w-100 py-2 pb-3 d-flex justify-content-start\"\n      }, this.state.person ? __jsx(\"span\", {\n        className: \"d-block d-flex align-items-center text-center text-white bg-primary font-weight-bold py-2 px-4 mr-3\",\n        style: nameBadgeStyles,\n        title: this.state.person\n      }, this.state.person) : randomPeople(4)), this.state.person && __jsx(\"textarea\", {\n        className: \"form-control px-3 py-2\",\n        onKeyUp: this.handleKeyUp,\n        placeholder: \"Make a comment\",\n        style: {\n          resize: 'none'\n        }\n      })));\n    }\n  }]);\n\n  return CommentsWidget;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentsWidget);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50c1dpZGdldC9Db21tZW50c1dpZGdldC5qcz9jNTc2Il0sIm5hbWVzIjpbIlNBRF9FTU9KSSIsIkhBUFBZX0VNT0pJIiwiTkVVVFJBTF9FTU9KSSIsIkNvbW1lbnRzV2lkZ2V0IiwiY29tbWVudHMiLCJwZXJzb24iLCJldnQiLCJ2YWx1ZSIsInRhcmdldCIsImtleUNvZGUiLCJzaGlmdEtleSIsInN0YXRlIiwiY29tbWVudCIsInRpbWVzdGFtcCIsIkRhdGUiLCJzZXRTdGF0ZSIsImF4aW9zIiwicG9zdCIsInB1c2hlciIsIlB1c2hlciIsInByb2Nlc3MiLCJjbHVzdGVyIiwiZW5jcnlwdGVkIiwiY2hhbm5lbCIsInN1YnNjcmliZSIsImJpbmQiLCJwdXNoIiwiY29ubmVjdGlvbiIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXNjb25uZWN0IiwicGVvcGxlIiwibmFtZUJhZGdlU3R5bGVzIiwiZm9udFNpemUiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJjaG9vc2VQZXJzb25hIiwicmFuZG9tUGVvcGxlIiwiY291bnQiLCJzZWxlY3RlZCIsImkiLCJNYXRoIiwibWF4IiwibWluIiwibGVuZ3RoIiwiaW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImluY2x1ZGVzIiwibWFwIiwiY2xhc3NOYW1lIiwib3ZlcmZsb3dZIiwibW9vZCIsInNlbnRpbWVudCIsIlN0cmluZyIsImZyb21Db2RlUG9pbnQiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsImhhbmRsZUtleVVwIiwicmVzaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLENBQWxCO0FBQ0EsSUFBTUMsV0FBVyxH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QUFTLGNBQUksRUFBRU8sT0FBTyxDQUFDQTtBQUF2QixVQW5CRixDQURGO0FBdUJELE9BL0JBLENBSkgsQ0FkRixFQW9ERTtBQUNFLGlCQUFTLEVBQUMscUdBRFo7QUFFRSxhQUFLLEVBQUU7QUFBRTBCLGdCQUFNLEVBQUU7QUFBVjtBQUZULFNBSUcsQ0FBQyxLQUFLM0IsS0FBTCxDQUFXTixNQUFaLElBQ0M7QUFDRSxpQkFBUyxFQUFDLGdCQURaO0FBRUUsYUFBSyxFQUFFO0FBQUVnQyxrQkFBUSxFQUFFLFFBQVo7QUFBc0J5QixvQkFBVSxFQUFFO0FBQWxDO0FBRlQsK0JBTEosRUFhRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNHLEtBQUtuRCxLQUFMLENBQVdOLE1BQVgsR0FDQztBQUNFLGlCQUFTLEVBQUMscUdBRFo7QUFFRSxhQUFLLEVBQUUrQixlQUZUO0FBR0UsYUFBSyxFQUFFLEtBQUt6QixLQUFMLENBQVdOO0FBSHBCLFNBS0csS0FBS00sS0FBTCxDQUFXTixNQUxkLENBREQsR0FTQ3FDLFlBQVksQ0FBQyxDQUFELENBVmhCLENBYkYsRUEyQkcsS0FBSy9CLEtBQUwsQ0FBV04sTUFBWCxJQUNDO0FBQ0UsaUJBQVMsRUFBQyx3QkFEWjtBQUVFLGVBQU8sRUFBRSxLQUFLMEQsV0FGaEI7QUFHRSxtQkFBVyxFQUFDLGdCQUhkO0FBSUUsYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUU7QUFBVjtBQUpULFFBNUJKLENBcERGLENBREY7QUEyRkQ7Ozs7RUFwTTBCQywrQzs7QUF1TWQ5RCw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbWVudHNXaWRnZXQvQ29tbWVudHNXaWRnZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUHVzaGVyIGZyb20gJ3B1c2hlci1qcyc7XG5pbXBvcnQgQ29tbWVudCBmcm9tICcuLi9Db21tZW50L0NvbW1lbnQnO1xuXG5jb25zdCBTQURfRU1PSkkgPSBbNTUzNTcsIDU2ODY0XTtcbmNvbnN0IEhBUFBZX0VNT0pJID0gWzU1MzU3LCA1NjgzMl07XG5jb25zdCBORVVUUkFMX0VNT0pJID0gWzU1MzU3LCA1Njg0OF07XG5cbmNsYXNzIENvbW1lbnRzV2lkZ2V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IGNvbW1lbnRzOiBbXSwgcGVyc29uOiBudWxsIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKHByb2Nlc3MuZW52LlBVU0hFUl9BUFBfS0VZLCB7XG4gICAgICBjbHVzdGVyOiBwcm9jZXNzLmVudi5QVVNIRVJfQVBQX0NMVVNURVIsXG4gICAgICBlbmNyeXB0ZWQ6IHRydWUsXG4gICAgfSk7XG5cbiAgICB0aGlzLmNoYW5uZWwgPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUoJ3Bvc3QtY29tbWVudHMnKTtcblxuICAgIHRoaXMuY2hhbm5lbC5iaW5kKCduZXctY29tbWVudCcsICh7IGNvbW1lbnQgPSBudWxsIH0pID0+IHtcbiAgICAgIGNvbnN0IHsgY29tbWVudHMgfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb21tZW50ICYmIGNvbW1lbnRzLnB1c2goY29tbWVudCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29tbWVudHMgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnB1c2hlci5jb25uZWN0aW9uLmJpbmQoJ2Nvbm5lY3RlZCcsICgpID0+IHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KCcvY29tbWVudHMnKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCBjb21tZW50cyA9IHJlc3BvbnNlLmRhdGEuY29tbWVudHM7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbW1lbnRzIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIGhhbmRsZUtleVVwID0gKGV2dCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZTtcblxuICAgIGlmIChldnQua2V5Q29kZSA9PT0gMTMgJiYgIWV2dC5zaGlmdEtleSkge1xuICAgICAgY29uc3QgeyBwZXJzb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCBjb21tZW50ID0geyBwZXJzb24sIGNvbW1lbnQ6IHZhbHVlLCB0aW1lc3RhbXA6ICtuZXcgRGF0ZSgpIH07XG5cbiAgICAgIGV2dC50YXJnZXQudmFsdWUgPSAnJztcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZXJzb246IG51bGwgfSwgKCkgPT4gYXhpb3MucG9zdCgnL2NvbW1lbnQnLCBjb21tZW50KSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwZW9wbGUgPSBbXG4gICAgICAnU3RlcGhhbmllJyxcbiAgICAgICdKb2huJyxcbiAgICAgICdTdGV2ZScsXG4gICAgICAnQW5uYScsXG4gICAgICAnTWFyZ2FyZXQnLFxuICAgICAgJ0ZlbGl4JyxcbiAgICAgICdDaHJpcycsXG4gICAgICAnSmFtaWUnLFxuICAgICAgJ1Jvc2UnLFxuICAgICAgJ0JvYicsXG4gICAgICAnVmFuZXNzYScsXG4gICAgICAnOWxhZCcsXG4gICAgICAnQnJpZGdldCcsXG4gICAgICAnU2ViYXN0aWFuJyxcbiAgICAgICdSaWNoYXJkJyxcbiAgICBdO1xuXG4gICAgY29uc3QgbmFtZUJhZGdlU3R5bGVzID0ge1xuICAgICAgZm9udFNpemU6ICcwLjhyZW0nLFxuICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB9O1xuXG4gICAgY29uc3QgY2hvb3NlUGVyc29uYSA9IChwZXJzb24pID0+IChldnQpID0+IHRoaXMuc2V0U3RhdGUoeyBwZXJzb24gfSk7XG5cbiAgICBjb25zdCByYW5kb21QZW9wbGUgPSAoY291bnQpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gW107XG4gICAgICBsZXQgaSA9IDA7XG5cbiAgICAgIGNvdW50ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oY291bnQsIHBlb3BsZS5sZW5ndGgpKTtcblxuICAgICAgd2hpbGUgKGkgPCBjb3VudCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBlb3BsZS5sZW5ndGgpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQuaW5jbHVkZXMoaW5kZXgpKSBjb250aW51ZTtcbiAgICAgICAgKytpICYmIHNlbGVjdGVkLnB1c2goaW5kZXgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VsZWN0ZWQubWFwKChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwZXJzb24gPSBwZW9wbGVbaW5kZXhdO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPVxuICAgICAgICAgICdkLWJsb2NrIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnkgZm9udC13ZWlnaHQtYm9sZCBweS0yIHB4LTQgbXItMyc7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e25hbWVCYWRnZVN0eWxlc31cbiAgICAgICAgICAgIHRpdGxlPXtwZXJzb259XG4gICAgICAgICAgICBvbkNsaWNrPXtjaG9vc2VQZXJzb25hKHBlcnNvbil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3BlcnNvbn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci1ib3R0b20gYm9yZGVyLWdyYXkgdy0xMDAgcHgtMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGJnLXdoaXRlIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJ1xuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogOTAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3RleHQtZGFyayBtYi0wIG14LTQnPkNvbW1lbnRzPC9oMj5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPSdiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXByaW1hcnkgbXgtNCdcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4ycmVtJyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbW1lbnRzLmxlbmd0aH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J3B4LTQgcGItNCB3LTEwMCBkLWZsZXggZmxleC1yb3cgZmxleC13cmFwIGFsaWduLWl0ZW1zLXN0YXJ0IGFsaWduLWNvbnRlbnQtc3RhcnQgcG9zaXRpb24tcmVsYXRpdmUnXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnY2FsYygxMDAlIC0gMjUwcHgpJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMuc3RhdGUuY29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9vZCA9XG4gICAgICAgICAgICAgIGNvbW1lbnQuc2VudGltZW50ID4gMFxuICAgICAgICAgICAgICAgID8gSEFQUFlfRU1PSklcbiAgICAgICAgICAgICAgICA6IGNvbW1lbnQuc2VudGltZW50ID09PSAwXG4gICAgICAgICAgICAgICAgPyBORVVUUkFMX0VNT0pJXG4gICAgICAgICAgICAgICAgOiBTQURfRU1PSkk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BkLWZsZXgganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBmb250LXdlaWdodC1ib2xkIHRleHQtZGFyayBtdC00IHBiLTEgcHgtMWB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzAuOXJlbScgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2QtaW5saW5lLWJsb2NrIHByLTEnXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMS4yNXJlbScgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1N0cmluZy5mcm9tQ29kZVBvaW50KC4uLm1vb2QpfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhbGlnbi1taWRkbGUnXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGxpbmVIZWlnaHQ6ICcxLjI1cmVtJyB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29tbWVudC5wZXJzb24gfHwgJ0Fub255bW91cyd9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Q29tbWVudCB0ZXh0PXtjb21tZW50LmNvbW1lbnR9IC8+XG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItdG9wIGJvcmRlci1ncmF5IHctMTAwIHB4LTQgZC1mbGV4IGZsZXgtd3JhcCBhbGlnbi1pdGVtcy1jZW50ZXIgYWxpZ24tY29udGVudC1jZW50ZXIgYmctbGlnaHQnXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAxNjAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHshdGhpcy5zdGF0ZS5wZXJzb24gJiYgKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWRhcmsgcHktMidcbiAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxLjVyZW0nLCBmb250V2VpZ2h0OiA1MDAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2hvb3NlIHlvdXIgUGVyc29uYVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMDAgcHktMiBwYi0zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtc3RhcnQnPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUucGVyc29uID8gKFxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZC1ibG9jayBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyIHRleHQtd2hpdGUgYmctcHJpbWFyeSBmb250LXdlaWdodC1ib2xkIHB5LTIgcHgtNCBtci0zJ1xuICAgICAgICAgICAgICAgIHN0eWxlPXtuYW1lQmFkZ2VTdHlsZXN9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUucGVyc29ufVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucGVyc29ufVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICByYW5kb21QZW9wbGUoNClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5wZXJzb24gJiYgKFxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIHB4LTMgcHktMidcbiAgICAgICAgICAgICAgb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J01ha2UgYSBjb21tZW50J1xuICAgICAgICAgICAgICBzdHlsZT17eyByZXNpemU6ICdub25lJyB9fVxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzV2lkZ2V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommentsWidget/CommentsWidget.js\n");

/***/ })

})