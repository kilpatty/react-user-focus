!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):"object"==typeof exports?exports.ReactUserFocus=n(require("react")):e.ReactUserFocus=n(e.react)}(this,function(e){return function(e){function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,n,t){Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=1)}([function(n,t){n.exports=e},function(e,n,t){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var c=t(0),u=t.n(c),s=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=function(e){function n(e){i(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.isHidden,t.visibilityChange,"undefined"!=typeof document.hidden?(t.isHidden="hidden",t.visibilityChange="visibilitychange"):"undefined"!=typeof document.mozHidden?(t.isHidden="mozHidden",t.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(t.isHidden="msHidden",t.visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(t.isHidden="webkitHidden",t.visibilityChange="webkitvisibilitychange"),t.checkFocus=t.checkFocus.bind(t),t}return r(n,e),s(n,[{key:"checkFocus",value:function(){document[this.isHidden]?this.props.onChange(!0):this.props.onChange(!1)}},{key:"componentWillMount",value:function(){document.addEventListener(this.visibilityChange,this.checkFocus)}},{key:"componentWillUnmount",value:function(){document.removeEventListener(this.visibilityChange,this.checkFocus)}},{key:"render",value:function(){return this.props.children?this.props.children:null}}]),n}(u.a.Component);a.defaultProps={onChange:function(e){console.log(e)}},a.propTypes={onChange:u.a.PropTypes.func.isRequired,children:u.a.PropTypes.node},n.default=a}])});