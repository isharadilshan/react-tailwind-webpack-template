import React from 'react';
import {Link} from 'react-router-dom';
import CookieConsent, {Cookies} from 'react-cookie-consent';
import {isBrowser} from 'react-device-detect';

const CookieBanner = () => {
  return (
    <CookieConsent
      location='bottom'
      buttonText='Accept'
      cookieName='applicationCookie'
      style={{
        padding: '5px',
        width: '100%',
        backgroundColor: '#52525b',
        paddingLeft: isBrowser ? '60px' : '5px',
        paddingRight: isBrowser ? '60px' : '5px',
        alignItems: 'center',
      }}
      contentStyle={{textAlign: 'center'}}
      buttonStyle={{
        backgroundColor: '#10B981',
        borderRadius: '4px',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '20px',
        color: 'white',
        padding: '10px 20px 10px 20px',
      }}
      declineButtonStyle={{
        backgroundColor: '#ef4444',
        borderRadius: '4px',
        fontWeight: 'bold',
        fontSize: '14px',
        lineHeight: '20px',
        color: 'white',
        padding: '10px 20px 10px 20px',
        marginLeft: isBrowser ? '0px' : '110px',
      }}
      expires={10}
      enableDeclineButton
      debug={true}
    >
      <p className='text-center md:text-left text-white text-sm leading-tight md:pr-12 px-1'>
        This website uses cookies and similar technologies as specified in our{' '}
        <Link className='underline' to='/about'>
          Cookie Policy
        </Link>{' '}
        to enhance the user experience. You agree to consent to the use of these
        technologies by clicking Accept, or by continuing to browse this
        website.
      </p>
    </CookieConsent>
  );
};

export default CookieBanner;
