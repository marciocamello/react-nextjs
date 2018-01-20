webpackHotUpdate(1,{

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'I:\\developer\\www\\jobs\\react\\crash-nextjs\\pages\\_error.js?entry';


var Error = function (_React$Component) {
    (0, _inherits3.default)(Error, _React$Component);

    function Error() {
        (0, _classCallCheck3.default)(this, Error);

        return (0, _possibleConstructorReturn3.default)(this, (Error.__proto__ || (0, _getPrototypeOf2.default)(Error)).apply(this, arguments));
    }

    (0, _createClass3.default)(Error, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, this.props.statusCode ? 'An error ' + this.props.statusCode + ' occurred on server' : 'An error occurred on client');
        }
    }], [{
        key: 'getInitialProps',
        value: function getInitialProps(_ref) {
            var res = _ref.res,
                err = _ref.err;

            var statusCode = res ? res.statusCode : err ? err.statusCode : null;
            return { statusCode: statusCode };
        }
    }]);

    return Error;
}(_react2.default.Component);

exports.default = Error;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfZXJyb3IuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJFcnJvciIsInByb3BzIiwic3RhdHVzQ29kZSIsInJlcyIsImVyciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7OztpQ0FNTyxBQUNMO21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLGFBQUEsT0FDSyxBQUFLLE1BQUwsQUFBVywyQkFDTSxLQUFBLEFBQUssTUFEdEIsQUFDNEIscUNBSHJDLEFBQ0ksQUFHVSxBQUdqQjs7Ozs4Q0Fib0M7Z0JBQVosQUFBWSxXQUFaLEFBQVk7Z0JBQVAsQUFBTyxXQUFQLEFBQU8sQUFDakM7O2dCQUFNLGFBQWEsTUFBTSxJQUFOLEFBQVUsYUFBYSxNQUFNLElBQU4sQUFBVSxhQUFwRCxBQUFpRSxBQUNqRTttQkFBTyxFQUFFLFlBQVQsQUFBTyxBQUNWOzs7OztFQUplLGdCQUFNLEEsQUFpQjFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Il9lcnJvci5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJJOi9kZXZlbG9wZXIvd3d3L2pvYnMvcmVhY3QvY3Jhc2gtbmV4dGpzIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "I:\\developer\\www\\jobs\\react\\crash-nextjs\\pages\\_error.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "I:\\developer\\www\\jobs\\react\\crash-nextjs\\pages\\_error.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_error")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS40M2Q0NjU0YjRmNGRkNDI2YmVkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2Vycm9yLmpzPzNhYTU3OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY2xhc3MgRXJyb3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlcywgZXJyIH0pIHtcclxuICAgICAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3RhdHVzQ29kZVxyXG4gICAgICAgICAgICAgICAgICAgID8gYEFuIGVycm9yICR7dGhpcy5wcm9wcy5zdGF0dXNDb2RlfSBvY2N1cnJlZCBvbiBzZXJ2ZXJgXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnQW4gZXJyb3Igb2NjdXJyZWQgb24gY2xpZW50J31cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvX2Vycm9yLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBUEE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUhBO0FBQ0E7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==