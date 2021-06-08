import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header/AppHeader';
import Footer from '../components/footer/AppFooter';

const AppLayout = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
