var React = require('react');
var ReactDOM = require('react-dom');
import ReactUserFocus from '../../lib/index.js'

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
