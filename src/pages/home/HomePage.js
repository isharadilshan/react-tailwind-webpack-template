import React from 'react';
import {useToasts} from 'react-toast-notifications';
import AnimatedBackground from '../../components/background/AnimatedBackground';
// import LoadingComponent from '../../components/common/LoadingComponent';

const HomePage = () => {
  const {addToast} = useToasts();

  const showNotification = () => {
    addToast('MESSAGE', {appearance: 'info'});
  };
  return (
    <div className='min-h-screen'>
      <AnimatedBackground />
      <div
        className='text-4xl text-red-700'
        style={{marginTop: '25%', marginLeft: '45%'}}
        onClick={showNotification}
      >
        Notify
      </div>
      {/* <LoadingComponent /> */}
    </div>
  );
};

export default HomePage;
