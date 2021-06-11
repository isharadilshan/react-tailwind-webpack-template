import React from 'react';
import {useToasts} from 'react-toast-notifications';
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
        className='text-4xl text-gray-500'
        style={{marginTop: '25%', marginLeft: '45%'}}
        onClick={showNotification}
      >
        Notify
      </div>
      {/* <MainLoading /> */}
    </div>
  );
};

export default HomePage;
