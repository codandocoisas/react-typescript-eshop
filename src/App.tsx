import React, { Fragment } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Home />
    </Fragment>
  );
}

export default App;
