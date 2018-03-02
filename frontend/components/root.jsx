import React from 'react';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = (props) => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
};

export default Root;