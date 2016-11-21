import React from 'react';

//import { isSupported, visibility } from './visibility';

//Have visibility change (The visibility change html5 api take precedence)

//When reporting events back to the upper containers.

class ReactUserFocus extends React.Component {

	constructor(props){
		super(props);
		this.visibilityChange;
	    if (typeof document.hidden !== 'undefined') {
	        this.visibilityChange = 'visibilitychange';
	    } else if (typeof document.mozHidden !== 'undefined') {
	        this.visibilityChange = 'mozvisibilitychange';
	    } else if (typeof document.msHidden !== 'undefined') {
	        this.visibilityChange = 'msvisibilitychange';
	    } else if (typeof document.webkitHidden !== 'undefined') {
	        this.visibilityChange = 'webkitvisibilitychange';
	    }
	}

	checkFocus() {
		console.log('From focus/blur');
		console.log(document.hasFocus());
	}

	checkFocusVis() {
		console.log('From Visibility API');
		console.log(document.hasFocus());
	}

	componentWillMount() {
		console.log(this.visibilityChange);
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

export default ReactUserFocus;
