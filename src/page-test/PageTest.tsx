import React from 'react';
import { FunctionComponent } from "react";
// import logo from './logo.svg';
// import './App.css';

import { Test } from "../mod-test"
import { RoundButton } from "../mod-round_button"
import { ILanguage, SetLanguageTypes, ChangeValueTypes, dispatch, useValueSelector } from "../redux-components";
import { useTranslator } from "../constants"
import { Button } from "@material-ui/core"

export const PageTest: FunctionComponent = () => {
  const value = useValueSelector();
  const translator = useTranslator();
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

  const setEN = () => dispatch(
    {
      type: SetLanguageTypes.SET_LANGUAGE,
      value: ILanguage.EN,
    }
  );

  const setCN = () => dispatch(
    {
      type: SetLanguageTypes.SET_LANGUAGE,
      value: ILanguage.CN_SI,
    }
  );

  const setJP = () => dispatch(
    {
      type: SetLanguageTypes.SET_LANGUAGE,
      value: ILanguage.JP,
    }
  );

  return (
    <div style={{ display: "flex" }}>
      <Test value={value} />
      <RoundButton text={"+"} onPress={incrementValue}/>
      <RoundButton text={"-"} onPress={decrementValue}/>
      <RoundButton text={translator.BUTTON.CALCULATION} onPress={decrementValue}/>
      <RoundButton text={"Set EN"} onPress={setEN}/>
      <RoundButton text={"Set CN_SI"} onPress={setCN}/>
      <RoundButton text={"Set JP"} onPress={setJP}/>
      <Button children={"A"} color={"default"} style={{background: "#FF0000"}}/>
    </div>
  );
}
