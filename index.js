import React from "react";
import createStore from "../state2000"; //"state2000";

export function connect(state, actions) {
  const store = createStore(state, actions);
  const wiredActions = store.actions;
  let storeState = store.state;
  return function(WrappedComponent) {
    return class extends React.Component {
      render() {
        return (
          <WrappedComponent
            {...this.props}
            state={storeState}
            actions={wiredActions}
          />
        );
      }
      componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleChange.bind(this));
      }
      componentWillUnmount() {
        this.unsubscribe && this.unsubscribe();
      }
      handleChange(newState) {
        storeState = newState;
        this.forceUpdate();
      }
    };
  };
}
