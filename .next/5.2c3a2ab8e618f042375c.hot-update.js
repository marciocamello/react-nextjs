webpackHotUpdate(5,{

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _jsxFileName = 'I:\\developer\\www\\jobs\\react\\crash-nextjs\\components\\Prices.js';


var Prices = function (_React$Component) {
    (0, _inherits3.default)(Prices, _React$Component);

    function Prices() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Prices);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Prices.__proto__ || (0, _getPrototypeOf2.default)(Prices)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currency: 'USD'
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Prices, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var list = '';

            if (this.state.currency === 'USD') {
                list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                    }
                }, 'Bitcoin rate for ', this.props.bpi.USD.description, ' : ', _react2.default.createElement('span', { 'class': 'badge badge-primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 11
                    }
                }, ' ', this.props.bpi.USD.code, ' '), _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 12
                    }
                }, ' ', this.props.bpi.USD.rate, ' '));
            } else if (this.state.currency === 'GBP') {
                list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                    }
                }, 'Bitcoin rate for ', this.props.bpi.USD.description, ' : ', _react2.default.createElement('span', { 'class': 'badge badge-primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                }, ' ', this.props.bpi.GBP.code, ' '), _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                }, ' ', this.props.bpi.GBP.rate, ' '));
            } else if (this.state.currency === 'EUR') {
                list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }, 'Bitcoin rate for ', this.props.bpi.EUR.description, ' : ', _react2.default.createElement('span', { 'class': 'badge badge-primary', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                    }
                }, ' ', this.props.bpi.EUR.code, ' '), _react2.default.createElement('strong', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                    }
                }, ' ', this.props.bpi.EUR.rate, ' '));
            }

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement('ul', { className: 'list-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, list), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }), _react2.default.createElement('select', { onChange: function onChange(e) {
                    return _this2.setState({ currency: e.target.value });
                }, className: 'form-control', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('option', { value: 'USD', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, 'USD'), _react2.default.createElement('option', { value: 'GBP', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'GBP'), _react2.default.createElement('option', { value: 'EUR', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'EUR')));
        }
    }]);

    return Prices;
}(_react2.default.Component);

exports.default = Prices;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFByaWNlcy5qcyJdLCJuYW1lcyI6WyJQcmljZXMiLCJzdGF0ZSIsImN1cnJlbmN5IiwibGlzdCIsInByb3BzIiwiYnBpIiwiVVNEIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsIkdCUCIsIkVVUiIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU0sQTs7Ozs7Ozs7Ozs7Ozs7Z04sQUFDRjtzQkFBUSxBLEFBQ007QUFETixBQUNKOzs7OztpQ0FHSzt5QkFDTDs7Z0JBQUksT0FBSixBQUFXLEFBRVg7O2dCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBZCxBQUEyQixPQUFPLEFBQzlCO3VDQUFPLGNBQUEsUUFBSSxXQUFKLEFBQWM7a0NBQWQ7b0NBQUE7QUFBQTtpQkFBQSxFQUNlLDBCQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUQ5QixBQUNrQyxhQUFlLHVCQUFBLGNBQUEsVUFBTSxTQUFOLEFBQVk7a0NBQVo7b0NBQUE7QUFBQTttQkFBb0MsVUFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFBbkQsQUFBdUQsTUFEeEcsQUFDaUQsQUFDcEQsc0JBQUEsY0FBQTs7a0NBQUE7b0NBQUE7QUFBQTtBQUFBLG1CQUFVLFVBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBQXpCLEFBQTZCLE1BRmpDLEFBQU8sQUFFSCxBQUVQO0FBTEQsdUJBS1UsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFkLEFBQTJCLE9BQU8sQUFDckM7dUNBQU8sY0FBQSxRQUFJLFdBQUosQUFBYztrQ0FBZDtvQ0FBQTtBQUFBO2lCQUFBLEVBQ2UsMEJBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBRDlCLEFBQ2tDLGFBQWUsdUJBQUEsY0FBQSxVQUFNLFNBQU4sQUFBWTtrQ0FBWjtvQ0FBQTtBQUFBO21CQUFvQyxVQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUFuRCxBQUF1RCxNQUR4RyxBQUNpRCxBQUNwRCxzQkFBQSxjQUFBOztrQ0FBQTtvQ0FBQTtBQUFBO0FBQUEsbUJBQVUsVUFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFBekIsQUFBNkIsTUFGakMsQUFBTyxBQUVILEFBRVA7QUFMTSxhQUFBLE1BS0EsSUFBRyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWQsQUFBMkIsT0FBTyxBQUNyQzt1Q0FBTyxjQUFBLFFBQUksV0FBSixBQUFjO2tDQUFkO29DQUFBO0FBQUE7aUJBQUEsRUFDZSwwQkFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFEOUIsQUFDa0MsYUFBZSx1QkFBQSxjQUFBLFVBQU0sU0FBTixBQUFZO2tDQUFaO29DQUFBO0FBQUE7bUJBQW9DLFVBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBQW5ELEFBQXVELE1BRHhHLEFBQ2lELEFBQ3BELHNCQUFBLGNBQUE7O2tDQUFBO29DQUFBO0FBQUE7QUFBQSxtQkFBVSxVQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUF6QixBQUE2QixNQUZqQyxBQUFPLEFBRUgsQUFFUDtBQUVEOzttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUEsUUFBSSxXQUFKLEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSztBQURMO2VBREosQUFDSSxBQUdBOzs4QkFBQTtnQ0FKSixBQUlJLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLGNBQUEsWUFBUSxVQUFVLHFCQUFBOzJCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUMsVUFBVSxFQUFBLEFBQUUsT0FBaEMsQUFBSyxBQUFjLEFBQW9CO0FBQXpELG1CQUFrRSxXQUFsRSxBQUE0RTs4QkFBNUU7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsWUFBUSxPQUFSLEFBQWM7OEJBQWQ7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSx3QkFBQSxjQUFBLFlBQVEsT0FBUixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFGSixBQUVJLEFBQ0Esd0JBQUEsY0FBQSxZQUFRLE9BQVIsQUFBYzs4QkFBZDtnQ0FBQTtBQUFBO2VBVFosQUFDSSxBQUtJLEFBR0ksQUFJZjs7Ozs7RUF0Q2dCLGdCQUFNLEEsQUF5QzNCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlByaWNlcy5qcyIsInNvdXJjZVJvb3QiOiJJOi9kZXZlbG9wZXIvd3d3L2pvYnMvcmVhY3QvY3Jhc2gtbmV4dGpzIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "I:\\developer\\www\\jobs\\react\\crash-nextjs\\components\\Prices.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "I:\\developer\\www\\jobs\\react\\crash-nextjs\\components\\Prices.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yYzNhMmFiOGU2MThmMDQyMzc1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QcmljZXMuanM/ZjUyNmM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcmljZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgY3VycmVuY3k6ICdVU0QnXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBsaXN0ID0gJyc7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdVU0QnKSB7XHJcbiAgICAgICAgICAgIGxpc3QgPSA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5VU0QuZGVzY3JpcHRpb259IDogPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+IHt0aGlzLnByb3BzLmJwaS5VU0QuY29kZX0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz4ge3RoaXMucHJvcHMuYnBpLlVTRC5yYXRlfSA8L3N0cm9uZz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0dCUCcpIHtcclxuICAgICAgICAgICAgbGlzdCA9IDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLlVTRC5kZXNjcmlwdGlvbn0gOiA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj4ge3RoaXMucHJvcHMuYnBpLkdCUC5jb2RlfSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPiB7dGhpcy5wcm9wcy5icGkuR0JQLnJhdGV9IDwvc3Ryb25nPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnN0YXRlLmN1cnJlbmN5ID09PSAnRVVSJykge1xyXG4gICAgICAgICAgICBsaXN0ID0gPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuRVVSLmRlc2NyaXB0aW9ufSA6IDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPiB7dGhpcy5wcm9wcy5icGkuRVVSLmNvZGV9IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+IHt0aGlzLnByb3BzLmJwaS5FVVIucmF0ZX0gPC9zdHJvbmc+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtjdXJyZW5jeTogZS50YXJnZXQudmFsdWV9KX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVTRFwiPlVTRDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJHQlBcIj5HQlA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRVVSXCI+RVVSPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUHJpY2VzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7O0FBdENBO0FBQ0E7QUF3Q0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==