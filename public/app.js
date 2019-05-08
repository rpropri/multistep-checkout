'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'p',
        null,
        'hi'
      );
    }
  }]);

  return App;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHFHQUNYQSxLQURXO0FBRWxCOzs7OzZCQUNRO0FBQ1AsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVA7QUFDRDs7OztFQU5lQyxNQUFNQyxTOztBQU92Qjs7QUFFREMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8cD5oaTwvcD47XG4gIH1cbn07XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==