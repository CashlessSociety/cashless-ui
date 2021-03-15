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
// others

import { ApolloClient, ApolloProvider } from '@apollo/client';
import { cache } from './cache';
import { localStorageGet } from './lib/localStorage';

const apolloClient = new ApolloClient({
  cache,
  uri: '/graphql',
});
/* Probably not the best place for getting localStorage */
/* Local storage keys */
const secretStorageKey = 'ssb_secrets';
const emailStorageKey = 'email';
const tokenStorageKey = 'token';
const storageKeys = {
  email: emailStorageKey,
  secret: secretStorageKey,
  token: tokenStorageKey,
};

/* Get localstorage */
const getSecret = localStorageGet(secretStorageKey);
const getEmail = localStorageGet(emailStorageKey);
const getToken = localStorageGet(tokenStorageKey);

const secret = getSecret[secretStorageKey];
const email = getEmail[emailStorageKey];
const token = getToken[tokenStorageKey];

const isAuthenticated = (secret && Object.keys(secret).length > 0);

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Switch>
        <Route
          path='/join'
          render={(props) => (
            <SignupPage
              {...props}
              isAuthenticated={isAuthenticated}
              secret={secret}
              storageKeys={storageKeys}
            />
          )}
        />
        <Route
          path='/magiclink'
          render={(props) => (
            <MagicLinkPage
              {...props}
              secret={secret}
              token={token}
              isAuthenticated={isAuthenticated}
              email={email}
              storageKeys={storageKeys}
            />
          )}
        />
        <Route
          path='/login/:token'
          render={(props) => (
            <LoginPage
              {...props}
              storageKeys={storageKeys}
            />
          )}
        />
        <Route
          path='/'
          exact
          render={(props) => (
            <IndexPage
              {...props}
              token={token}
              isAuthenticated={isAuthenticated}
              storageKeys={storageKeys}
            />
          )}
        />
        <Route path='/icons' render={(props) => <NucleoIcons {...props} />} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
