import React, {Suspense, lazy} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withAuthenticationRequired} from '@auth0/auth0-react';
import {Helmet} from 'react-helmet';
import AppLayout from '../layouts/AppLayout';
import AuthLayout from '../layouts/AuthLayout';
import ScrollOnNavigate from '../components/util/ScrollOnNavigate';
import MainLoading from '../components/common/loading/MainLoading';
const SignInPage = lazy(() => import('../pages/auth/SignInPage'));
const SignUpPage = lazy(() => import('../pages/auth/SignUpPage'));
const ProfileViewPage = lazy(() => import('../pages/profile/ProfileViewPage'));
const AboutPage = lazy(() => import('../pages/static/about/AboutPage'));
const HomePage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('../pages/home/HomePage')), 1000);
  });
});

const AppRoutes = () => {
  const defaultMetaTags = {
    title: 'REACT WEBPACK TEMPLATE | PUBLIC FRONT END',
    description: 'REACT WEBPACK TEMPLATE | PUBLIC FRONT END',
    keywords: '',
    robots: 'follow',
    canonicalUrl: 'http://www.google.com',
  };

  const getPageMetadata = (metaData) => {
    const {title, description, keywords, robots, canonicalUrl} = metaData;
    return {
      title: title || defaultMetaTags?.title,
      description: description || defaultMetaTags?.description,
      keywords: keywords || defaultMetaTags?.keywords,
      robots: robots || defaultMetaTags?.robots,
      canonicalUrl: canonicalUrl || defaultMetaTags?.canonicalUrl,
    };
  };

  const renderMetaTags = (metaData) => {
    const meta = getPageMetadata(metaData);
    return (
      <Helmet>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta name='keywords' content={meta.keywords} />
        <meta name='robots' content={meta.robots} />
        <link rel='canonical' href={meta.canonicalUrl} />
      </Helmet>
    );
  };

  const RouteWrapper = ({component: Component, layout: Layout, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Layout {...props}>
            {renderMetaTags(rest)}
            <Component {...props} />
          </Layout>
        )}
      />
    );
  };

  const ProtectedRouteWrapper = ({
    component: Component,
    layout: Layout,
    ...rest
  }) => {
    const compositeLayout = (props) => {
      return (
        <Layout {...props}>
          {renderMetaTags(rest)}
          <Component {...props} />
        </Layout>
      );
    };
    return (
      <Route
        {...rest}
        component={withAuthenticationRequired(compositeLayout)}
      />
    );
  };

  RouteWrapper.propTypes = {
    component: PropTypes.any,
    layout: PropTypes.any,
  };

  ProtectedRouteWrapper.propTypes = {
    component: PropTypes.any,
    layout: PropTypes.any,
  };

  return (
    <>
      <ScrollOnNavigate />
      <Suspense fallback={<MainLoading />}>
        <Switch>
          <RouteWrapper
            exact
            path='/'
            component={HomePage}
            layout={AppLayout}
          />
          <RouteWrapper
            path='/signin'
            component={SignInPage}
            layout={AuthLayout}
          />
          <RouteWrapper
            path='/signup'
            component={SignUpPage}
            layout={AuthLayout}
          />
          <RouteWrapper
            path='/about'
            component={AboutPage}
            layout={AppLayout}
          />
          <ProtectedRouteWrapper
            path='/profile'
            component={ProfileViewPage}
            layout={AppLayout}
          />
          <Redirect from='*' to='/' />
        </Switch>
      </Suspense>
    </>
  );
};

export default AppRoutes;
