# react-state2000

> Simple state for React

Inspired by Elm and Hyperapp, a super simple state handler for React.

## Usage

### Installation

```sh
npm install react-state2000 --save
```

### Create a store

In `store.js`:

```js
import { connect } from "state2000";

const state = {
  count: { value: 0 }
};

const actions = {
  count: {
    add: n => (state, actions) => ({
      value: state.value + n
    }),
    sub: n => (state, actions) => ({
      value: state.value - n
    })
  }
};

const withState = connect(
  state,
  wiredActions
);

export { withState };
```

### In App component

```js
import React from "react";

const AppComponent = ({ state, actions }) => (
  <div className="App">
    <p>Value is:</p>
    <h1>{state.count.value}</h1>
    <button onClick={() => actions.count.add(1)}>+</button>
    <button onClick={() => actions.count.sub(1)}>-</button>
  </div>
);

export default AppComponent;
```

### In index

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { withState } from "./store";

const AppWithState = withState(App);
ReactDOM.render(<AppWithState />, document.getElementById("root"));
```
