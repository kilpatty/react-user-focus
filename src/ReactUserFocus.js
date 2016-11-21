import React from 'react';

//import { isSupported, visibility } from './visibility';

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
		console.log(document.hasFocus());
	}

	componentWillMount() {
		console.log(this.visibilityChange);
		document.addEventListener(this.visibilityChange, this.checkFocus);
		window.addEventListener('focus', this.checkFocus);
		window.addEventListener('blur', this.checkFocus);
    }

	componentWillUnmount() {
		document.removeEventListener(this.visibilityChange, this.checkFocus);
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
