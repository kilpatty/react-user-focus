import React from 'react';

//We want to decide if we want idle and being away from a page to be correlated. That is, if they move away from the page are they always idle, etc.
//Remove the default functions to always print to console.
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
    this.setIdle = this.setIdle.bind(this);
	}

  resetTimer() {
    //We only want to call the onChange function if idle changes.
    if (this.isIdle === true) {
      this.isIdle = false;
      this.props.onIdleChange(this.isIdle);
    }
    clearTimeout(this.timer);
    this.timer = setTimeout(this.setIdle, (this.props.idleTime*1000));
  }

  setIdle() {
    //We only want to call the onChange function if idle changes.
    if (this.isIdle === false) {
      this.isIdle = true;
      this.props.onIdleChange(this.isIdle);
    }
  }

	checkFocus() {
		if (document[this.isHidden]) {
			this.props.onFocusChange(true);
  		} else {
    		this.props.onFocusChange(false);
  		}
	}

	componentWillMount() {
    //Visibility change listeners
		document.addEventListener(this.visibilityChange, this.checkFocus);

    //Idleness change listeners
    document.addEventListener('load', this.resetTimer);
    document.addEventListener('mousemove', this.resetTimer);
    document.addEventListener('mousedown', this.resetTimer);
    document.addEventListener('touchstart', this.resetTimer);
    document.addEventListener('click', this.resetTimer);
    document.addEventListener('scroll', this.resetTimer);
    document.addEventListener('keypress', this.resetTimer);
    }

  componentDidMount() {
    this.isIdle = false;
    this.timer = setTimeout(this.setIdle, (this.props.idleTime*1000));
  }

	componentWillUnmount() {
    //Visibility change listeners
		document.removeEventListener(this.visibilityChange, this.checkFocus);

    //Idleness change listeners
    document.removeEventListener('load', this.resetTimer);
    document.removeEventListener('mousemove', this.resetTimer);
    document.removeEventListener('mousedown', this.resetTimer);
    document.removeEventListener('touchstart', this.resetTimer);
    document.removeEventListener('click', this.resetTimer);
    document.removeEventListener('scroll', this.resetTimer);
    document.removeEventListener('keypress', this.resetTimer);
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
