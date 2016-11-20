var React = require('react');
var ReactDOM = require('react-dom');
var ReactUserFocus = require('react-user-focus');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactUserFocus />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
