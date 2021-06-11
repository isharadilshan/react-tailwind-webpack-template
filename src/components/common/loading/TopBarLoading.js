import React from 'react';
import PropTypes from 'prop-types';
import BarLoader from 'react-spinners/BarLoader';

const TopBarLoading = ({loading = true, color = '#4287f5'}) => {
  return (
    <BarLoader
      color={color}
      height={4}
      width={'100%'}
      loading={loading}
      css={{display: 'block', margin: '0px'}}
    />
  );
};

TopBarLoading.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
};

export default TopBarLoading;
