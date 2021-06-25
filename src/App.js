import React from 'react';
import {BrowserRouter, useHistory} from 'react-router-dom';
import {Auth0Provider} from '@auth0/auth0-react';
import ReactGA from 'react-ga4';
import {ToastProvider} from 'react-toast-notifications';
import CookieConsent, {Cookies} from 'react-cookie-consent';
import {Provider as AppProvider} from './context/AppContext';
import AppRoutes from './routes/AppRoutes';
import './app.scss';
import './custom.css';

const GCODE = process.env.GOOGLE_ANALYTIC_CODE;
ReactGA.initialize(GCODE);

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
            <CookieConsent
              location='bottom'
              buttonText='Sure man!!'
              cookieName='myAwesomeCookieName1'
              style={{background: '#2B373B'}}
              buttonStyle={{color: '#4e503b', fontSize: '13px'}}
              expires={150}
              enableDeclineButton
              flipButtons
            >
              This website uses cookies to enhance the user experience.{' '}
              <span style={{fontSize: '10px'}}>
                This bit of text is smaller :O
              </span>
            </CookieConsent>
            <AppRoutes />
          </ToastProvider>
        </AppProvider>
      </Auth0Provider>
    </BrowserRouter>
  );
};

export default App;
