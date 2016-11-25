import React from 'react';

 export default class ReactUserFocus extends React.Component {

	constructor(props){
		super(props);

    // State Variables
    this.state.idle = false;

		// Instance Variables
		this.isHidden;
		this.visibilityChange;
    this.timer;
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
document.onload = resetTimer;
document.onmousemove = resetTimer;
document.onmousedown = resetTimer; // touchscreen presses
document.ontouchstart = resetTimer;
document.onclick = resetTimer;     // touchpad clicks
document.onscroll = resetTimer;    // scrolling with arrow keys
document.onkeypress = resetTimer;

		this.checkFocus = this.checkFocus.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
	}

  resetTimer() {
    clearTimeout(this.timer)
    this.timer = setTimeout(setIdle, (this.props.idleTime*1000))
  }

  setIdle() {
    this.setState({
      idle: true;
    })
  }

	checkFocus() {
		if (document[this.isHidden]) {
			this.props.onChange(true);
  		} else {
    		this.props.onChange(false);
  		}
	}

	componentWillMount() {
    //Visibility change listeners
		document.addEventListener(this.visibilityChange, this.checkFocus);

    //Idleness change listeners
    document.addEventListener('load', resetTimer);
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('mousedown', resetTimer);
    document.addEventListener('touchstart', resetTimer);
    document.addEventListener('click', resetTimer);
    document.addEventListener('scroll', resetTimer);
    document.addEventListener('keypress', resetTimer);
    }

  componentDidMount() {
    this.timer = setTimeout(idkyet, (this.props.idleTime*1000))
  }

	componentWillUnmount() {
    //Visibility change listeners
		document.removeEventListener(this.visibilityChange, this.checkFocus);

    //Idleness change listeners
    document.removeEventListener('load', resetTimer);
    document.removeEventListener('mousemove', resetTimer);
    document.removeEventListener('mousedown', resetTimer);
    document.removeEventListener('touchstart', resetTimer);
    document.removeEventListener('click', resetTimer);
    document.removeEventListener('scroll', resetTimer);
    document.removeEventListener('keypress', resetTimer);
    }

	render() {
	        return null;
	    }
}

// if (!this.props.children) {
//     return null;
// }
// return this.props.children;

ReactUserFocus.defaultProps = {
	onChange: function(isHidden) { console.log(isHidden);},
};

ReactUserFocus.propTypes = {
	onChange: React.PropTypes.func.isRequired,
  idleTime: React.PropTypes.number,
  children: React.PropTypes.node,
};
