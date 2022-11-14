import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
    </Fragment>
  );
}

export default App;
