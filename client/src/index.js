/*!

=========================================================
* Now UI Kit PRO React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

// styles
import 'assets/css/bootstrap.min.css';
import 'assets/css/nucleo-icons-page-styles.css?v=1.4.0';
import 'assets/scss/now-ui-kit.scss?v=1.4.0';

// pages
import NucleoIcons from 'views/NucleoIcons.js';
import IndexPage from 'views/IndexPage.js';
import SignupPage from 'views/SignupPage.js';
import MagicLinkPage from 'views/MagicLinkPage.js';
import LoginPage from 'views/LoginPage.js';
import ProfilePage from 'views/ProfilePage.js';
import NotFoundPage from 'views/NotFoundPage.js';
// others

import { ApolloClient, ApolloProvider } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { cache } from './cache';
import { UserProvider } from './providers/User'

const httpLink = createUploadLink({
  uri: '/graphql',
});


const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <UserProvider>
    <BrowserRouter>
      <Switch>
        <Route
          path='/join'
          render={(props) => (
            <SignupPage
              {...props}
            />
          )}
        />
        <Route
          path='/magiclink'
          render={(props) => (
            <MagicLinkPage
              {...props}
            />
          )}
        />
        <Route
          path='/login/:token'
          render={(props) => (
            <LoginPage
              {...props}
            />
          )}
        />
        <Route
          path='/profile/:id'
          render={(props) => (
            <ProfilePage
              {...props}
            />
          )}
        />
        <Route
          path='/'
          exact
          render={(props) => (
            <IndexPage
              {...props}
            />
          )}
        />
        <Route
          path='/not-found'
          exact
          render={(props) => (
            <NotFoundPage
              {...props}
            />
          )}
        />
        <Route path='/icons' render={(props) => <NucleoIcons {...props} />} />
        <Redirect to="/not-found" />
      </Switch>
    </BrowserRouter>
    </UserProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
