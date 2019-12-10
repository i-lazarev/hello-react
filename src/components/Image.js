import React, { Fragment } from "react";
import logo from "../logo.svg";
import Message from "./Message";

export default function Image() {
  return (
    <Fragment>
      <p>Here I am</p>
      <img src={logo} className="App-logo" alt="logo" />
      <Message  user="Leandro" age="42"/>
      <Message  user="Tareq" age="17"/>
      <Message user="Me"  age="30"/>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Fragment>
  );
}
