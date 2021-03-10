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
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/css/nucleo-icons-page-styles.css?v=1.4.0";
import "assets/scss/now-ui-kit.scss?v=1.4.0";

// pages
import NucleoIcons from "views/NucleoIcons.js";
import IndexPage from "views/IndexPage.js";
import JoinPage from "views/JoinPage.js";
// others

import { ApolloClient, ApolloProvider } from "@apollo/client";
import { cache } from "./cache";

const apolloClient = new ApolloClient({
  cache,
  uri: "/graphql"
});


ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Switch>
        <Route path="/join" render={(props) => <JoinPage {...props} />} />
        <Route path="/" render={(props) => <IndexPage {...props} />} />
      
        <Route path="/icons" render={(props) => <NucleoIcons {...props} />} />
        {/* <Redirect to="/" /> */}
      </Switch>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
