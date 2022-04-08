import React from 'react';
import './App.scss';
import PublicRoutes from './core/PublicRoutes';
import { Provider, defaultTheme } from '@adobe/react-spectrum';

function App() {
  return (
    <div className="vsto-container">
      <Provider theme={defaultTheme} scale="large">
        <PublicRoutes />
      </Provider>
    </div>
  );
}

export default App;
