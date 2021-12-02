import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import GlobaStyle from './styles/global'
import Dashboard from './pages/Deshboard';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
    <GlobaStyle/>
    </>    
  );
}

export default App;
