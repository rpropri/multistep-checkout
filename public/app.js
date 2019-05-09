'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      phase: 0,
      fullname: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      CC: '',
      expiry: '',
      CVV: '',
      billZip: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.nextStep = _this.nextStep.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.phase === 0 ? React.createElement('div', null) : this.state.phase === 1 ? React.createElement(F1, { handleChange: this.handleChange }) : this.state.phase === 2 ? React.createElement(F2, { handleChange: this.handleChange }) : this.state.phase === 3 ? React.createElement(F3, { handleChange: this.handleChange }) : React.createElement('div', null),
        React.createElement('input', { type: 'submit', value: this.state.phase === 0 ? "Purchase" : "continue", onClick: this.nextStep })
      );
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      e.preventDefault();
      var target = e.target;
      var value = target.value;
      var name = target.name;

      // console.log(name, value);
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'nextStep',
    value: function nextStep(e) {
      // console.log('event ');
      e.preventDefault();
      var phase = this.state.phase + 1;
      this.setState({ phase: phase });
      console.log(this.state);
    }
  }]);

  return App;
}(React.Component);

;

var F1 = function F1(props) {
  return React.createElement(
    'form',
    { name: 'f1' },
    React.createElement(
      'label',
      null,
      'full name:'
    ),
    React.createElement('input', {
      type: 'text',
      name: 'fullname',
      onChange: props.handleChange }),
    React.createElement('br', null),
    React.createElement(
      'label',
      null,
      'email address:'
    ),
    React.createElement('input', {
      type: 'email',
      name: 'email',
      onChange: props.handleChange }),
    React.createElement('br', null),
    React.createElement(
      'label',
      null,
      'password:'
    ),
    React.createElement('input', {
      type: 'password',
      name: 'password',
      onChange: props.handleChange }),
    React.createElement('br', null)
  );
};

var F2 = function F2(props) {
  return React.createElement(
    'form',
    { name: 'f2' },
    React.createElement(
      'p',
      null,
      'ship-to address:'
    ),
    React.createElement('br', null),
    React.createElement(
      'label',
      null,
      'line 1:'
    ),
    React.createElement('input', {
      type: 'text',
      name: 'line1',
      onChange: props.handleChange }),
    React.createElement('br', null),
    React.createElement(
      'label',
      null,
      'line 2:'
    ),
    React.createElement('input', {
      type: 'text',
      name: 'line2',
      onChange: props.handleChange }),
    React.createElement('br', null),
    React.createElement(
      'label',
      null,
      'city:'
    ),
    React.createElement('input', {
      type: 'text',
      name: 'city',
      onChange: props.handleChange }),
    React.createElement('br', null),
    React.createElement(
      'label',
      null,
      'state:'
    ),
    React.createElement('input', {
      type: 'text',
      name: 'state',
      onChange: props.handleChange }),
    React.createElement('br', null),
    React.createElement(
      'label',
      null,
      'zip code:'
    ),
    React.createElement('input', {
      type: 'text',
      name: 'zip',
      onChange: props.handleChange }),
    React.createElement('br', null),
    React.createElement(
      'label',
      null,
      'phone number:'
    ),
    React.createElement('input', {
      type: 'text',
      name: 'phone',
      onChange: props.handleChange }),
    React.createElement('br', null)
  );
};

var F3 = function F3(props) {
  return React.createElement(
    'form',
    { name: 'f3' },
    React.createElement(
      'label',
      null,
      'credit card number:'
    ),
    React.createElement('input', {
      type: 'text',
      name: 'CC',
      onChange: props.handleChange }),
    React.createElement('br', null),
    React.createElement(
      'label',
      null,
      'expiration date:'
    ),
    React.createElement('input', {
      type: 'date',
      name: 'expiry',
      onChange: props.handleChange }),
    React.createElement('br', null),
    React.createElement(
      'label',
      null,
      'CVV code:'
    ),
    React.createElement('input', {
      type: 'text',
      name: 'cvv',
      onChange: props.handleChange }),
    React.createElement('br', null),
    React.createElement(
      'label',
      null,
      'billing zip code:'
    ),
    React.createElement('input', {
      type: 'text',
      name: 'bill-zip',
      onChange: props.handleChange }),
    React.createElement('br', null)
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJwaGFzZSIsImZ1bGxuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImxpbmUxIiwibGluZTIiLCJjaXR5IiwiemlwIiwicGhvbmUiLCJDQyIsImV4cGlyeSIsIkNWViIsImJpbGxaaXAiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwibmV4dFN0ZXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCIsIkYxIiwiRjIiLCJGMyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQ01BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sQ0FESTtBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLGFBQU8sRUFISTtBQUlYQyxnQkFBVSxFQUpDO0FBS1hDLGFBQU8sRUFMSTtBQU1YQyxhQUFPLEVBTkk7QUFPWEMsWUFBTSxFQVBLO0FBUVhQLGFBQU8sRUFSSTtBQVNYUSxXQUFLLEVBVE07QUFVWEMsYUFBTyxFQVZJO0FBV1hDLFVBQUksRUFYTztBQVlYQyxjQUFRLEVBWkc7QUFhWEMsV0FBSyxFQWJNO0FBY1hDLGVBQVM7QUFkRSxLQUFiO0FBZ0JBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0QsSUFBZCxPQUFoQjtBQW5CaUI7QUFvQmxCOzs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRyxhQUFLZixLQUFMLENBQVdDLEtBQVgsS0FBcUIsQ0FBckIsR0FBeUIsZ0NBQXpC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QUdFLGdCQUFVZixNQUFNZSxZQUhsQixHQTNCSjtBQStCWSxtQ0EvQlo7QUFnQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWhDSjtBQWlDSTtBQUNFLFlBQUssTUFEUDtBQUVFLFlBQUssT0FGUDtBQUdFLGdCQUFVZixNQUFNZSxZQUhsQixHQWpDSjtBQXFDWTtBQXJDWixHQURBO0FBd0NBLENBekNGOztBQTJDQSxJQUFNZSxLQUFLLFNBQUxBLEVBQUssQ0FBQzlCLEtBQUQsRUFBVztBQUNwQixTQUNBO0FBQUE7QUFBQSxNQUFNLE1BQUssSUFBWDtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESjtBQUVJO0FBQ0UsWUFBSyxNQURQO0FBRUUsWUFBSyxJQUZQO0FBR0UsZ0JBQVVBLE1BQU1lLFlBSGxCLEdBRko7QUFNWSxtQ0FOWjtBQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQSjtBQVFJO0FBQ0UsWUFBSyxNQURQO0FBRUUsWUFBSyxRQUZQO0FBR0UsZ0JBQVVmLE1BQU1lLFlBSGxCLEdBUko7QUFZWSxtQ0FaWjtBQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FiSjtBQWNJO0FBQ0UsWUFBSyxNQURQO0FBRUUsWUFBSyxLQUZQO0FBR0UsZ0JBQVVmLE1BQU1lLFlBSGxCLEdBZEo7QUFrQmMsbUNBbEJkO0FBbUJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FuQko7QUFvQkk7QUFDRSxZQUFLLE1BRFA7QUFFRSxZQUFLLFVBRlA7QUFHRSxnQkFBVWYsTUFBTWUsWUFIbEIsR0FwQko7QUF3Qlk7QUF4QlosR0FEQTtBQTJCQSxDQTVCRjs7QUE4QkFnQixTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGhhc2U6IDAsXG4gICAgICBmdWxsbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBsaW5lMTogJycsXG4gICAgICBsaW5lMjogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHppcDogJycsXG4gICAgICBwaG9uZTogJycsXG4gICAgICBDQzogJycsXG4gICAgICBleHBpcnk6ICcnLFxuICAgICAgQ1ZWOiAnJyxcbiAgICAgIGJpbGxaaXA6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5uZXh0U3RlcCA9IHRoaXMubmV4dFN0ZXAuYmluZCh0aGlzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLnBoYXNlID09PSAwID8gPGRpdiAvPiA6XG4gICAgICAgIHRoaXMuc3RhdGUucGhhc2UgPT09IDEgPyA8RjEgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz4gOlxuICAgICAgICB0aGlzLnN0YXRlLnBoYXNlID09PSAyID8gPEYyIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+IDpcbiAgICAgICAgdGhpcy5zdGF0ZS5waGFzZSA9PT0gMyA/IDxGMyBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPiA6IDxkaXYgLz59XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9e3RoaXMuc3RhdGUucGhhc2UgPT09IDAgPyBcIlB1cmNoYXNlXCIgOiBcImNvbnRpbnVlXCJ9IG9uQ2xpY2s9e3RoaXMubmV4dFN0ZXB9PjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhuYW1lLCB2YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7W25hbWVdOiB2YWx1ZX0pO1xuICB9XG4gIG5leHRTdGVwKGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZXZlbnQgJyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBwaGFzZSA9IHRoaXMuc3RhdGUucGhhc2UgKyAxO1xuICAgIHRoaXMuc2V0U3RhdGUoe3BoYXNlfSk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgfVxufTtcbiAgXG5jb25zdCBGMSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICA8Zm9ybSBuYW1lPVwiZjFcIj5cbiAgICA8bGFiZWw+ZnVsbCBuYW1lOjwvbGFiZWw+XG4gICAgPGlucHV0IFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgbmFtZT1cImZ1bGxuYW1lXCJcbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PlxuICAgIDwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgPGxhYmVsPmVtYWlsIGFkZHJlc3M6PC9sYWJlbD5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgbmFtZT1cImVtYWlsXCIgXG4gICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT5cbiAgICA8L2lucHV0Pjxicj48L2JyPlxuICAgIDxsYWJlbD5wYXNzd29yZDo8L2xhYmVsPlxuICAgIDxpbnB1dCBcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgbmFtZT1cInBhc3N3b3JkXCIgXG4gICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT5cbiAgICA8L2lucHV0Pjxicj48L2JyPlxuICA8L2Zvcm0+XG4pfTtcblxuY29uc3QgRjIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgPGZvcm0gbmFtZT1cImYyXCI+XG4gICAgPHA+c2hpcC10byBhZGRyZXNzOjwvcD48YnI+PC9icj5cbiAgICAgIDxsYWJlbD5saW5lIDE6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgbmFtZT1cImxpbmUxXCJcbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0+XG4gICAgICA8L2lucHV0Pjxicj48L2JyPlxuICAgICAgPGxhYmVsPmxpbmUgMjo8L2xhYmVsPlxuICAgICAgPGlucHV0IFxuICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICBuYW1lPVwibGluZTJcIlxuICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgIDwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgICA8bGFiZWw+Y2l0eTo8L2xhYmVsPlxuICAgICAgPGlucHV0IFxuICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgPC9pbnB1dD48YnI+PC9icj5cbiAgICAgIDxsYWJlbD5zdGF0ZTo8L2xhYmVsPlxuICAgICAgPGlucHV0IFxuICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgIDwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgICA8bGFiZWw+emlwIGNvZGU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgbmFtZT1cInppcFwiXG4gICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgPC9pbnB1dD48YnI+PC9icj5cbiAgICAgIDxsYWJlbD5waG9uZSBudW1iZXI6PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgPC9pbnB1dD48YnI+PC9icj5cbiAgPC9mb3JtID5cbil9O1xuXG5jb25zdCBGMyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICA8Zm9ybSBuYW1lPVwiZjNcIj5cbiAgICAgIDxsYWJlbD5jcmVkaXQgY2FyZCBudW1iZXI6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgbmFtZT1cIkNDXCJcbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0+XG4gICAgICA8L2lucHV0Pjxicj48L2JyPlxuICAgICAgPGxhYmVsPmV4cGlyYXRpb24gZGF0ZTo8L2xhYmVsPlxuICAgICAgPGlucHV0IFxuICAgICAgICB0eXBlPVwiZGF0ZVwiIFxuICAgICAgICBuYW1lPVwiZXhwaXJ5XCJcbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0+XG4gICAgICA8L2lucHV0Pjxicj48L2JyPlxuICAgICAgPGxhYmVsPkNWViBjb2RlOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImN2dlwiXG4gICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICA8L2lucHV0Pjxicj48L2JyPlxuICAgICAgPGxhYmVsPmJpbGxpbmcgemlwIGNvZGU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgbmFtZT1cImJpbGwtemlwXCJcbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0+XG4gICAgICA8L2lucHV0Pjxicj48L2JyPlxuICA8L2Zvcm0+XG4pfTtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19