import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Test } from "./mod-test"
import { RoundButton } from "./mod-round_button"
import { ChangeValueTypes, dispatch, useValueSelector } from "./redux-components";

function App() {
  const value = useValueSelector();
  const incrementValue = () => dispatch(
    {
      type: ChangeValueTypes.Increment,
      value: 1
    }
  );

  const decrementValue = () => dispatch(
    {
      type: ChangeValueTypes.Decrement,
      value: 1
    }
  );
  return (
    <div style={{ display: "flex" }}>
      <Test value={value} />
      <RoundButton text={"+"} onPress={incrementValue}/>
      <RoundButton text={"-"} onPress={decrementValue}/>
    </div>
  );
}

export default App;
