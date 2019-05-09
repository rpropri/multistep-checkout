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
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      cc: '',
      expiry: '',
      cvv: '',
      billZip: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.nextStep = _this.nextStep.bind(_this);
    _this.createPurchase = _this.createPurchase.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var phase = this.state.phase;
      return React.createElement(
        'div',
        null,
        phase === 0 ? React.createElement('div', null) : phase === 1 ? React.createElement(F1, { handleChange: this.handleChange }) : phase === 2 ? React.createElement(F2, { handleChange: this.handleChange }) : phase === 3 ? React.createElement(F3, { handleChange: this.handleChange }) : phase === 4 ? React.createElement(F4, { state: this.state, createPurchase: this.createPurchase }) : React.createElement('div', null),
        React.createElement('input', {
          type: 'submit',
          value: phase === 0 ? "Checkout" : phase <= 3 ? "Continue" : "Review Order", onClick: this.nextStep })
      );
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      e.preventDefault();
      var target = e.target;
      var value = target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'nextStep',
    value: function nextStep(e) {
      e.preventDefault();
      var phase = this.state.phase + 1;
      this.setState({ phase: phase });
    }
  }, {
    key: 'createPurchase',
    value: function createPurchase(e) {
      e.preventDefault();
      console.log('do database stuff');
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
      name: 'name',
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
      name: 'cc',
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
      name: 'billZip',
      onChange: props.handleChange }),
    React.createElement('br', null)
  );
};

var F4 = function F4(props) {
  var state = props.state;
  return React.createElement(
    'div',
    null,
    React.createElement(
      'ul',
      { id: 'review' },
      React.createElement(
        'li',
        null,
        React.createElement(
          'label',
          null,
          'Name: '
        ),
        state.name
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'label',
          null,
          'email: '
        ),
        state.email
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'label',
          null,
          'Etc. '
        ),
        'etc.'
      )
    ),
    React.createElement('input', {
      type: 'submit',
      onClick: props.createPurchase,
      value: 'Purchase' })
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJwaGFzZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwibGluZTEiLCJsaW5lMiIsImNpdHkiLCJ6aXAiLCJwaG9uZSIsImNjIiwiZXhwaXJ5IiwiY3Z2IiwiYmlsbFppcCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJuZXh0U3RlcCIsImNyZWF0ZVB1cmNoYXNlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCIsIkYxIiwiRjIiLCJGMyIsIkY0IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFDTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxDQURJO0FBRVhDLFlBQU0sRUFGSztBQUdYQyxhQUFPLEVBSEk7QUFJWEMsZ0JBQVUsRUFKQztBQUtYQyxhQUFPLEVBTEk7QUFNWEMsYUFBTyxFQU5JO0FBT1hDLFlBQU0sRUFQSztBQVFYUCxhQUFPLEVBUkk7QUFTWFEsV0FBSyxFQVRNO0FBVVhDLGFBQU8sRUFWSTtBQVdYQyxVQUFJLEVBWE87QUFZWEMsY0FBUSxFQVpHO0FBYVhDLFdBQUssRUFiTTtBQWNYQyxlQUFTO0FBZEUsS0FBYjtBQWdCQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNELElBQWQsT0FBaEI7QUFDQSxVQUFLRSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JGLElBQXBCLE9BQXRCO0FBcEJpQjtBQXFCbEI7Ozs7NkJBQ1E7QUFDUCxVQUFJ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QTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUksSUFBRyxRQUFQO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFKO0FBQTBCQSxjQUFNRTtBQUFoQyxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFKO0FBQTJCRixjQUFNRztBQUFqQyxPQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFKO0FBQUE7QUFBQTtBQUhGLEtBREY7QUFNRTtBQUNFLFlBQUssUUFEUDtBQUVFLGVBQVNKLE1BQU1rQixjQUZqQjtBQUdFLGFBQU0sVUFIUjtBQU5GLEdBREY7QUFjRCxDQWhCRDs7QUFrQkFjLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwaGFzZTogMCxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgbGluZTE6ICcnLFxuICAgICAgbGluZTI6ICcnLFxuICAgICAgY2l0eTogJycsXG4gICAgICBzdGF0ZTogJycsXG4gICAgICB6aXA6ICcnLFxuICAgICAgcGhvbmU6ICcnLFxuICAgICAgY2M6ICcnLFxuICAgICAgZXhwaXJ5OiAnJyxcbiAgICAgIGN2djogJycsXG4gICAgICBiaWxsWmlwOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubmV4dFN0ZXAgPSB0aGlzLm5leHRTdGVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVQdXJjaGFzZSA9IHRoaXMuY3JlYXRlUHVyY2hhc2UuYmluZCh0aGlzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IHBoYXNlID0gdGhpcy5zdGF0ZS5waGFzZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3BoYXNlID09PSAwID8gPGRpdiAvPiA6XG4gICAgICAgIHBoYXNlID09PSAxID8gPEYxIGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+IDpcbiAgICAgICAgcGhhc2UgPT09IDIgPyA8RjIgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz4gOlxuICAgICAgICBwaGFzZSA9PT0gMyA/IDxGMyBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPiA6XG4gICAgICAgIHBoYXNlID09PSA0ID8gPEY0IHN0YXRlPXt0aGlzLnN0YXRlfSBjcmVhdGVQdXJjaGFzZT17dGhpcy5jcmVhdGVQdXJjaGFzZX0vPiA6IDxkaXYgLz59XG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgdmFsdWU9e3BoYXNlID09PSAwID8gXCJDaGVja291dFwiIDpcbiAgICAgICAgcGhhc2UgPD0gMyA/IFwiQ29udGludWVcIiA6IFwiUmV2aWV3IE9yZGVyXCJ9IG9uQ2xpY2s9e3RoaXMubmV4dFN0ZXB9PjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcbiAgICB0aGlzLnNldFN0YXRlKHtbbmFtZV06IHZhbHVlfSk7XG4gIH1cbiAgbmV4dFN0ZXAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgcGhhc2UgPSB0aGlzLnN0YXRlLnBoYXNlICsgMTtcbiAgICB0aGlzLnNldFN0YXRlKHtwaGFzZX0pO1xuICB9XG4gIGNyZWF0ZVB1cmNoYXNlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJ2RvIGRhdGFiYXNlIHN0dWZmJyk7XG4gIH1cbn07XG4gIFxuY29uc3QgRjEgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgPGZvcm0gbmFtZT1cImYxXCI+XG4gICAgPGxhYmVsPmZ1bGwgbmFtZTo8L2xhYmVsPlxuICAgIDxpbnB1dCBcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PlxuICAgIDwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgPGxhYmVsPmVtYWlsIGFkZHJlc3M6PC9sYWJlbD5cbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgbmFtZT1cImVtYWlsXCIgXG4gICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT5cbiAgICA8L2lucHV0Pjxicj48L2JyPlxuICAgIDxsYWJlbD5wYXNzd29yZDo8L2xhYmVsPlxuICAgIDxpbnB1dCBcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgbmFtZT1cInBhc3N3b3JkXCIgXG4gICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT5cbiAgICA8L2lucHV0Pjxicj48L2JyPlxuICA8L2Zvcm0+XG4pfTtcblxuY29uc3QgRjIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgPGZvcm0gbmFtZT1cImYyXCI+XG4gICAgPHA+c2hpcC10byBhZGRyZXNzOjwvcD48YnI+PC9icj5cbiAgICAgIDxsYWJlbD5saW5lIDE6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgbmFtZT1cImxpbmUxXCJcbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0+XG4gICAgICA8L2lucHV0Pjxicj48L2JyPlxuICAgICAgPGxhYmVsPmxpbmUgMjo8L2xhYmVsPlxuICAgICAgPGlucHV0IFxuICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICBuYW1lPVwibGluZTJcIlxuICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgIDwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgICA8bGFiZWw+Y2l0eTo8L2xhYmVsPlxuICAgICAgPGlucHV0IFxuICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgPC9pbnB1dD48YnI+PC9icj5cbiAgICAgIDxsYWJlbD5zdGF0ZTo8L2xhYmVsPlxuICAgICAgPGlucHV0IFxuICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgIDwvaW5wdXQ+PGJyPjwvYnI+XG4gICAgICA8bGFiZWw+emlwIGNvZGU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgbmFtZT1cInppcFwiXG4gICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgPC9pbnB1dD48YnI+PC9icj5cbiAgICAgIDxsYWJlbD5waG9uZSBudW1iZXI6PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9XCJwaG9uZVwiXG4gICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgPC9pbnB1dD48YnI+PC9icj5cbiAgPC9mb3JtID5cbil9O1xuXG5jb25zdCBGMyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICA8Zm9ybSBuYW1lPVwiZjNcIj5cbiAgICAgIDxsYWJlbD5jcmVkaXQgY2FyZCBudW1iZXI6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgbmFtZT1cImNjXCJcbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0+XG4gICAgICA8L2lucHV0Pjxicj48L2JyPlxuICAgICAgPGxhYmVsPmV4cGlyYXRpb24gZGF0ZTo8L2xhYmVsPlxuICAgICAgPGlucHV0IFxuICAgICAgICB0eXBlPVwiZGF0ZVwiIFxuICAgICAgICBuYW1lPVwiZXhwaXJ5XCJcbiAgICAgICAgb25DaGFuZ2U9e3Byb3BzLmhhbmRsZUNoYW5nZX0+XG4gICAgICA8L2lucHV0Pjxicj48L2JyPlxuICAgICAgPGxhYmVsPkNWViBjb2RlOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cImN2dlwiXG4gICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVDaGFuZ2V9PlxuICAgICAgICA8L2lucHV0Pjxicj48L2JyPlxuICAgICAgPGxhYmVsPmJpbGxpbmcgemlwIGNvZGU6PC9sYWJlbD5cbiAgICAgIDxpbnB1dCBcbiAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgbmFtZT1cImJpbGxaaXBcIlxuICAgICAgICBvbkNoYW5nZT17cHJvcHMuaGFuZGxlQ2hhbmdlfT5cbiAgICAgIDwvaW5wdXQ+PGJyPjwvYnI+XG4gIDwvZm9ybT5cbil9O1xuXG5jb25zdCBGNCA9IChwcm9wcykgPT4ge1xuICBsZXQgc3RhdGUgPSBwcm9wcy5zdGF0ZTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHVsIGlkPVwicmV2aWV3XCI+XG4gICAgICAgIDxsaT48bGFiZWw+TmFtZTogPC9sYWJlbD57c3RhdGUubmFtZX08L2xpPlxuICAgICAgICA8bGk+PGxhYmVsPmVtYWlsOiA8L2xhYmVsPntzdGF0ZS5lbWFpbH08L2xpPlxuICAgICAgICA8bGk+PGxhYmVsPkV0Yy4gPC9sYWJlbD5ldGMuPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8aW5wdXQgXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgb25DbGljaz17cHJvcHMuY3JlYXRlUHVyY2hhc2V9IFxuICAgICAgICB2YWx1ZT1cIlB1cmNoYXNlXCI+XG4gICAgICA8L2lucHV0PlxuICAgIDwvZGl2PlxuICApXG59O1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=