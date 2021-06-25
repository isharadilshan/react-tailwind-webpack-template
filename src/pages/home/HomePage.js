import React from 'react';
import {useToasts} from 'react-toast-notifications';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';
import AnimatedBackground from '../../components/background/AnimatedBackground';
// import MainLoading from '../../components/common/loading/MainLoading';

const HomePage = () => {
  const {addToast} = useToasts();

  const showNotification = () => {
    addToast('MESSAGE', {appearance: 'success'}); //error,info,warn
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
      <BrowserView>
        <h1> This is rendered only in browser </h1>
      </BrowserView>
      <MobileView>
        <h1> This is rendered only on mobile </h1>
      </MobileView>
      {/* <MainLoading /> */}
    </div>
  );
};

export default HomePage;
