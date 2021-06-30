import React from 'react';
import ReactGA from 'react-ga4';
import {useToasts} from 'react-toast-notifications';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';
import AnimatedBackground from '../../components/background/AnimatedBackground';

const HomePage = () => {
  const {addToast} = useToasts();

  const showNotification = () => {
    ReactGA.event({
      category: 'Notify',
      action: 'User click on notify',
    });
    // addToast('MESSAGE', {appearance: 'success'}); //error,info,warn
  };
  return (
    <div className='min-h-screen'>
      <AnimatedBackground />
      <div
        className='text-4xl text-blueGray-500 cursor-pointer'
        style={{marginTop: '25%', marginLeft: '45%'}}
        onClick={showNotification}
      >
        Notify {isMobile ? 'mobile' : ''} {isBrowser ? 'browser' : ''}
      </div>
    </div>
  );
};

export default HomePage;
