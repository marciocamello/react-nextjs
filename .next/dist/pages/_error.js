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