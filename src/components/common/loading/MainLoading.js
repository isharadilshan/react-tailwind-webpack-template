import React from 'react';
import PropTypes from 'prop-types';
import BounceLoader from 'react-spinners/BounceLoader';

const MainLoading = ({
  loading = true,
  transparent = false,
  backgroundColor = null,
}) => {
  const tClass = transparent ? 'bg-opacity-10' : '';
  const bClass = backgroundColor ? backgroundColor : 'bg-blue-50';

  return (
    <div
      className={
        'absolute inset-0 z-10 flex justify-center py-96 max-h-screen w-full ' +
        tClass +
        ' ' +
        bClass
      }
    >
      <BounceLoader color={'#4287f5'} loading={loading} />
    </div>
  );
};

MainLoading.propTypes = {
  loading: PropTypes.bool,
  transparent: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

export default MainLoading;
