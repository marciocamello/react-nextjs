'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

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