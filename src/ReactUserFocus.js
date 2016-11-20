import React from 'react';

//import { isSupported, visibility } from './visibility';

class ReactUserFocus extends React.Component {

	constructor(props){
		super(props);
		this.isSupported = typeof document !== 'undefined' && Boolean(document.addEventListener);
		console.log(document.hasFocus());
	}

	checkFocus() {
		console.log(document.hasFocus());
	}

	componentWillMount() {
		var visibilityChange;
	    if (typeof document.hidden !== 'undefined') {
	        visibilityChange = 'visibilitychange';
	    } else if (typeof document.mozHidden !== 'undefined') {
	        visibilityChange = 'mozvisibilitychange';
	    } else if (typeof document.msHidden !== 'undefined') {
	        visibilityChange = 'msvisibilitychange';
	    } else if (typeof document.webkitHidden !== 'undefined') {
	        visibilityChange = 'webkitvisibilitychange';
	    }
		document.addEventListener(visibilityChange, this.checkFocus);
		window.addEventListener('focus', this.checkFocus);
		window.addEventListener('blur', this.checkFocus);
    }

	componentWillUnmount() {
        if (!this.isListening) {
            return;
        }
        document.removeEventListener(visibility.event, this.handleVisibilityChange);
		console.log('Remove visiability listener');
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
