import React from 'react';

class ReactUserFocus extends React.Component {

	constructor(props){
		super(props);
		// Set the visibility change event based on the browser.
		this.isHidden;
		this.visibilityChange;
		if (typeof document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support
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

	checkFocus() {
		if (document[this.isHidden]) {
			this.props.onChange(true);
  		} else {
    		this.props.onChange(false);
  		}
	}

	componentWillMount() {
		document.addEventListener(this.visibilityChange, this.checkFocus);
    }

	componentWillUnmount() {
		document.removeEventListener(this.visibilityChange, this.checkFocus);
    }

	render() {
	        if (!this.props.children) {
	            return null;
	        }
	        return this.props.children;
	    }

}

ReactUserFocus.defaultProps = {
	onChange: function(isHidden) { console.log(isHidden);},
};

ReactUserFocus.propTypes = {
	onChange: React.PropTypes.func.isRequired,
};

export default ReactUserFocus;
