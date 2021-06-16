import React from 'react';
import {BrowserRouter, useHistory} from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';
import ReactGA from 'react-ga';
import {createBrowserHistory} from 'history';
import {ToastProvider} from 'react-toast-notifications';
import {Provider as AppProvider} from './context/AppContext';
import AppRoutes from './routes/AppRoutes';
import './app.scss';
import './custom.css';

ReactGA.initialize('UA-177375203-1');

const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({page: location.pathname});
  ReactGA.pageview(location.pathname);
});

const App = () => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <AppProvider>
          <ToastProvider autoDismissTimeout={3000} autoDismiss={true}>
            <AppRoutes />
          </ToastProvider>
        </AppProvider>
      </Auth0Provider>
    </BrowserRouter>
  );
};

export default App;
