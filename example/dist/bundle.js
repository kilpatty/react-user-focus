require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-user-focus":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ReactUserFocus = (function (_React$Component) {
	_inherits(ReactUserFocus, _React$Component);

	function ReactUserFocus(props) {
		_classCallCheck(this, ReactUserFocus);

		_get(Object.getPrototypeOf(ReactUserFocus.prototype), 'constructor', this).call(this, props);
		// Set the visibility change event based on the browser.
		this.isHidden;
		this.visibilityChange;
		if (typeof document.hidden !== 'undefined') {
			// Opera 12.10 and Firefox 18 and later support
			this.isHidden = 'hidden';
			this.visibilityChange = 'visibilitychange';
		} else if (typeof document.mozHidden !== 'undefined') {
			this.isHidden = 'mozHidden';
			this.visibilityChange = 'mozvisibilitychange';
		} else if (typeof document.msHidden !== 'undefined') {
			this.isHidden = 'msHidden';
			this.visibilityChange = 'msvisibilitychange';
		} else if (typeof document.webkitHidden !== 'undefined') {
			this.isHidden = 'webkitHidden';
			this.visibilityChange = 'webkitvisibilitychange';
		}

		this.checkFocus = this.checkFocus.bind(this);
	}

	_createClass(ReactUserFocus, [{
		key: 'checkFocus',
		value: function checkFocus() {
			if (document[this.isHidden]) {
				this.props.onChange(true);
			} else {
				this.props.onChange(false);
			}
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			document.addEventListener(this.visibilityChange, this.checkFocus);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.removeEventListener(this.visibilityChange, this.checkFocus);
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.children) {
				return null;
			}
			return this.props.children;
		}
	}]);

	return ReactUserFocus;
})(_react2['default'].Component);

ReactUserFocus.defaultProps = {
	onChange: function onChange(isHidden) {
		console.log(isHidden);
	}
};

ReactUserFocus.propTypes = {
	onChange: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = ReactUserFocus;
module.exports = exports['default'];

},{"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvU2Vhbi9EZXZlbG9wZXIvcmVhY3QtdXNlci1mb2N1cy9zcmMvUmVhY3RVc2VyRm9jdXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FrQixPQUFPOzs7O0lBRW5CLGNBQWM7V0FBZCxjQUFjOztBQUVSLFVBRk4sY0FBYyxDQUVQLEtBQUssRUFBQzt3QkFGYixjQUFjOztBQUdsQiw2QkFISSxjQUFjLDZDQUdaLEtBQUssRUFBRTs7QUFFYixNQUFJLENBQUMsUUFBUSxDQUFDO0FBQ2QsTUFBSSxDQUFDLGdCQUFnQixDQUFDO0FBQ3RCLE1BQUksT0FBTyxRQUFRLENBQUMsTUFBTSxLQUFLLFdBQVcsRUFBRTs7QUFDeEMsT0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsT0FBSSxDQUFDLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO0dBQzlDLE1BQU0sSUFBSSxPQUFPLFFBQVEsQ0FBQyxTQUFTLEtBQUssV0FBVyxFQUFFO0FBQ2xELE9BQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO0FBQzVCLE9BQUksQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQztHQUNqRCxNQUFNLElBQUksT0FBTyxRQUFRLENBQUMsUUFBUSxLQUFLLFdBQVcsRUFBRTtBQUNqRCxPQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztBQUMzQixPQUFJLENBQUMsZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUM7R0FDaEQsTUFBTSxJQUFJLE9BQU8sUUFBUSxDQUFDLFlBQVksS0FBSyxXQUFXLEVBQUU7QUFDckQsT0FBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7QUFDL0IsT0FBSSxDQUFDLGdCQUFnQixHQUFHLHdCQUF3QixDQUFDO0dBQ3BEOztBQUVELE1BQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDN0M7O2NBdEJJLGNBQWM7O1NBd0JULHNCQUFHO0FBQ1osT0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzVCLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLE1BQU07QUFDTCxRQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QjtHQUNIOzs7U0FFaUIsOEJBQUc7QUFDcEIsV0FBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7R0FDL0Q7OztTQUVnQixnQ0FBRztBQUN0QixXQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztHQUNsRTs7O1NBRUUsa0JBQUc7QUFDRCxPQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDdEIsV0FBTyxJQUFJLENBQUM7SUFDZjtBQUNELFVBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7R0FDOUI7OztRQTdDQSxjQUFjO0dBQVMsbUJBQU0sU0FBUzs7QUFnRDVDLGNBQWMsQ0FBQyxZQUFZLEdBQUc7QUFDN0IsU0FBUSxFQUFFLGtCQUFTLFFBQVEsRUFBRTtBQUFFLFNBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7RUFBQztDQUN0RCxDQUFDOztBQUVGLGNBQWMsQ0FBQyxTQUFTLEdBQUc7QUFDMUIsU0FBUSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVTtDQUN6QyxDQUFDOztxQkFFYSxjQUFjIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFJlYWN0VXNlckZvY3VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdC8vIFNldCB0aGUgdmlzaWJpbGl0eSBjaGFuZ2UgZXZlbnQgYmFzZWQgb24gdGhlIGJyb3dzZXIuXG5cdFx0dGhpcy5pc0hpZGRlbjtcblx0XHR0aGlzLnZpc2liaWxpdHlDaGFuZ2U7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudC5oaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7IC8vIE9wZXJhIDEyLjEwIGFuZCBGaXJlZm94IDE4IGFuZCBsYXRlciBzdXBwb3J0XG4gICAgXHRcdHRoaXMuaXNIaWRkZW4gPSAnaGlkZGVuJztcbiAgICBcdFx0dGhpcy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHQgICAgdGhpcy5pc0hpZGRlbiA9ICdtb3pIaWRkZW4nO1xuXHRcdCAgICB0aGlzLnZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQubXNIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0ICAgIHRoaXMuaXNIaWRkZW4gPSAnbXNIaWRkZW4nO1xuXHRcdCAgICB0aGlzLnZpc2liaWxpdHlDaGFuZ2UgPSAnbXN2aXNpYmlsaXR5Y2hhbmdlJztcblx0XHR9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0ICAgIHRoaXMuaXNIaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcblx0XHQgICAgdGhpcy52aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnO1xuXHRcdH1cblxuXHRcdHRoaXMuY2hlY2tGb2N1cyA9IHRoaXMuY2hlY2tGb2N1cy5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y2hlY2tGb2N1cygpIHtcblx0XHRpZiAoZG9jdW1lbnRbdGhpcy5pc0hpZGRlbl0pIHtcblx0XHRcdHRoaXMucHJvcHMub25DaGFuZ2UodHJ1ZSk7XG4gIFx0XHR9IGVsc2Uge1xuICAgIFx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKGZhbHNlKTtcbiAgXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMudmlzaWJpbGl0eUNoYW5nZSwgdGhpcy5jaGVja0ZvY3VzKTtcbiAgICB9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLnZpc2liaWxpdHlDaGFuZ2UsIHRoaXMuY2hlY2tGb2N1cyk7XG4gICAgfVxuXG5cdHJlbmRlcigpIHtcblx0ICAgICAgICBpZiAoIXRoaXMucHJvcHMuY2hpbGRyZW4pIHtcblx0ICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXHQgICAgfVxufVxuXG5SZWFjdFVzZXJGb2N1cy5kZWZhdWx0UHJvcHMgPSB7XG5cdG9uQ2hhbmdlOiBmdW5jdGlvbihpc0hpZGRlbikgeyBjb25zb2xlLmxvZyhpc0hpZGRlbik7fSxcbn07XG5cblJlYWN0VXNlckZvY3VzLnByb3BUeXBlcyA9IHtcblx0b25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdFVzZXJGb2N1cztcbiJdfQ==
