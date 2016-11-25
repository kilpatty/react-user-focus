import React from 'react';

 export default class ReactUserFocus extends React.Component {

	constructor(props){
		super(props);
		// Set the visibility change event based on the browser.
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

    var inactivityTime = function () {
    window.onload = resetTimer;
    // DOM Events
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;

    function logout() {
        alert("You are now logged out.")
        //location.href = 'logout.php'
    }

    function resetTimer() {
        clearTimeout(t);
        //Timeout is in seconds, since the function takes ms we multiple the seconds by 1000ms
        t = setTimeout(logout, (idleTime*1000))
        // 1000 milisec = 1 sec
    }
};

document.onload = resetTimer;
document.onmousemove = resetTimer;
document.onmousedown = resetTimer; // touchscreen presses
document.ontouchstart = resetTimer;
document.onclick = resetTimer;     // touchpad clicks
document.onscroll = resetTimer;    // scrolling with arrow keys
document.onkeypress = resetTimer;

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
    //Should we do document listeners here or just the way
    document.addEventListener('onload', resetTimer);
    document.addEventListener('onmousemove', resetTimer);
    document.addEventListener('onmousedown', resetTimer);
    document.addEventListener('ontouchstart', resetTimer);
    document.addEventListener('onclick', resetTimer);
    document.addEventListener('onscroll', resetTimer);
    document.addEventListener('onkeypress', resetTimer);
    }

  componentDidMount() {
    this.timer = setTimeout(idkyet, (this.props.idleTime*1000))
  }

	componentWillUnmount() {
		document.removeEventListener(this.visibilityChange, this.checkFocus);
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
