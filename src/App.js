import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Auth0ProviderWithHistory from './route/Auth0ProviderWithHistory';
import {Provider as AppProvider} from './context/AppContext';
import AppRoutes from './route/AppRoutes';
import './app.scss';
import './custom.css';

const App = () => {
  return (
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  );
};

export default App;
