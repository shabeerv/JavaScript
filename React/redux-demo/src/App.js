import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import { getTech } from "./selectors/selectors";
import {useSelector} from 'react-redux';

const App = () => {
  const tech = useSelector(getTech)
    return (
    <div>
      <HelloWorld key={1} tech={tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
      </div>
    )
  }

export default App;