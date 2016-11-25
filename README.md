# react-user-focus

react-user-focus is a Reactjs component that communicates the state of the user's focus (active, idle, away). The purpose of this component is to allow user dependent processes such as animations, and communication to be aware of the current state of the user's focus.


## Installation

The easiest way to use react-user-focus is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-user-focus.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-user-focus --save
```


## Usage

__EXPLAIN USAGE HERE__

```
var ReactUserFocus = require('react-user-focus');

<ReactUserFocus>Example</ReactUserFocus>
```


## Demo & Examples

Live demo - To see a live demo of this component, visit my website: [SeanKilgarriff.com](https://seankilgarriff.com). Open up the console in developer tools, and type UserFocusDemo() into the console.

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


### Properties

* __DOCUMENT PROPERTIES HERE__

### Notes

__ADDITIONAL USAGE NOTES__


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

This repository is covered by the [MIT License](/LICENSE)

Copyright (c) 2016 Sean Kilgarriff.
