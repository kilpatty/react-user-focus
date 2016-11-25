import React from 'react';

 export default class ReactUserFocus extends React.Component {

	constructor(props){
		super(props);

		// Instance Variables
		this.isHidden;
    this.isIdle;
		this.visibilityChange;
    this.timer;

    //Determine the type of visibilty change to listen to for browser support.
		if (typeof document.hidden !== 'undefined') {
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

    //Bind this to the component functions
		this.checkFocus = this.checkFocus.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.setIdle = this.setidle.bind(this);
	}

  resetTimer() {
    this.isIdle = false;
    clearTimeout(this.timer);
    this.timer = setTimeout(setIdle, (this.props.idleTime*1000));
  }

  setIdle() {
    this.isIdle = true;
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
    this.timer = setTimeout(idkyet, (this.props.idleTime*1000));
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
    if (!this.props.children) {
        return null;
    }
    return this.props.children;
	}
}

ReactUserFocus.defaultProps = {
	onChange: function(isHidden) { console.log(isHidden);},
  onIdleChange: function(isIdle) { console.log(isIdle);},
  idleTime: 60, //Default time is set to 60 seconds
};

ReactUserFocus.propTypes = {
	onFocusChange: React.PropTypes.func,
  onIdleChange: React.PropTypes.func,
  idleTime: React.PropTypes.number,
  children: React.PropTypes.node,
};
