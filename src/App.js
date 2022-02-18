import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers';
import 'animate.css';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
};

export default App;
