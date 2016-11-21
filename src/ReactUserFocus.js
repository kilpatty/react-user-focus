import React from 'react';

//import { isSupported, visibility } from './visibility';

//Have visibility change (The visibility change html5 api take precedence)

//When reporting events back to the upper containers.

class ReactUserFocus extends React.Component {

	constructor(props){
		super(props);
		// Set the visibility change event based on the browser.
		this.isHidden;
		this.visibilityChange;
		if (typeof document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support
    		hidden = 'hidden';
    		visibilityChange = 'visibilitychange';
		} else if (typeof document.mozHidden !== 'undefined') {
		    hidden = 'mozHidden';
		    visibilityChange = 'mozvisibilitychange';
		} else if (typeof document.msHidden !== 'undefined') {
		    hidden = 'msHidden';
		    visibilityChange = 'msvisibilitychange';
		} else if (typeof document.webkitHidden !== 'undefined') {
		    hidden = 'webkitHidden';
		    visibilityChange = 'webkitvisibilitychange';
		}

		this.checkFocusVis = this.checkFocusVis.bind(this);
	}

	checkFocus() {
		// console.log('From focus/blur');
		// console.log(document.hasFocus());
	}

	checkFocusVis() {
		console.log('From Visibility API');
		console.log(document[this.isHidden]);
		console.log(document.hasFocus());
		if (document[this.isHidden] || document.hasFocus()) {
			this.props.onChange(true);
  		} else {
    		this.props.onChange(false);
  		}
	}

	componentWillMount() {
		document.addEventListener(this.visibilityChange, this.checkFocusVis);
		window.addEventListener('focus', this.checkFocus);
		window.addEventListener('blur', this.checkFocus);
    }

	componentWillUnmount() {
		document.removeEventListener(this.visibilityChange, this.checkFocusVis);
		window.removeEventListener('focus', this.checkFocus);
		window.removeEventListener('blur', this.checkFocus);
    }

	render() {
	        if (!this.props.children) {
	            return null;
	        }
	        const child = React.Children.only(this.props.children);
	        return React.cloneElement(child);
	    }

}

ReactUserFocus.defaultProps = {
	onChange: function(isHidden) { console.log(isHidden);},
};

ReactUserFocus.propTypes = {
	onChange: React.PropTypes.func.isRequired,
};

export default ReactUserFocus;
