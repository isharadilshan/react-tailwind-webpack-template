import React from 'react';
import PropTypes from 'prop-types';
// import AuthHeader from '../components/header/AuthHeader';
import AuthFooter from '../components/footer/AuthFooter';

const AuthLayout = ({children}) => {
  return (
    <div className='max-h-screen'>
      {/* <AuthHeader /> */}
      {children}
      <AuthFooter />
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
