import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Articles from './components/Articles';
import Saved from './components/Saved';

class App extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <Form />
        <Articles />
        <Saved />
      </Fragment>
    )
  }
}

export default App;
