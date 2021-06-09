import React from 'react';
import ReactLoading from 'react-loading';

const LoadingComponent = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'flex-wrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      backgroundColor: '#f8f9fe',
    }}
  >
    <ReactLoading type={'spin'} color={'#4287f5'} height={'3%'} width={'4%'} />
  </div>
);
export default LoadingComponent;
