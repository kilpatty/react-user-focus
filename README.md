# react-user-focus

react-user-focus is a Reactjs component that communicates the state of the user's focus (active, idle, away). The purpose of this component is to allow user dependent processes such as animations, and communication to be aware of the current state of the user's focus.


## Installation

The easiest way to use react-user-focus is to install it from NPM or Yarn and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

```
npm install react-user-focus --save
```

or

```
yarn add react-user-focus
```


## Usage

react-user-focus can contain children, or be rendered simply by itself.

```
import ReactUserFocus from 'react-user-focus';

<ReactUserFocus
  onFocusChange={onFocusChange}
  onIdleChange={onIdleChange}
  idleTime={2}
/>
```

### Properties

react-user-focus currently has 3 properties can that can be included when rendering the component.

+ onFocusChange - accepts a function that is called with the parameter of isHidden.

```
import ReactUserFocus from 'react-user-focus';

function onFocusChange(isHidden) {
  console.log(`Is hidden?:${isHidden}`);
}

<ReactUserFocus
  onFocusChange={onFocusChange}
/>
```

+ onIdleChange - accepts a function that is called with the parameter of isIdle

+ idleTime - the amount of time to set a user to idle (in seconds)

```
import ReactUserFocus from 'react-user-focus';

function onIdleChange(isIdle) {
  console.log(`Is Idle?:${isIdle}`);
}

<ReactUserFocus
  onIdleChange={onIdleChange}
  idleTime={2}
/>
```




## Demo & Examples

Live demo - To see a live demo of this component, visit my website: [SeanKilgarriff.com](https://seankilgarriff.com). Open up the console in developer tools, and type UserFocusDemo() into the console.

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## License

This repository is covered by the [MIT License](/LICENSE)

Copyright (c) 2016 Sean Kilgarriff.
