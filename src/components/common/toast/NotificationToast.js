import React from 'react';
import PropTypes from 'prop-types';

const NotificationToast = ({notificationText}) => {
  return (
    <div className='popup-notification-wrapper'>
      <div className='notification-icon-wrapper'>
        <i className='fas fa-clipboard-check fa-3x text-success' />
      </div>
      <div className='popup-notification-text-wrapper'>
        <div className='popup-notification-header-text'>{'Success !'}</div>
        <div className='popup-notification-detail-text'>
          {notificationText || 'Successfully item created'}
        </div>
      </div>
    </div>
  );
};

NotificationToast.propTypes = {
  notificationText: PropTypes.string,
};

export default NotificationToast;
