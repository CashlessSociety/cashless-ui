/*eslint-disable*/
import React, {useEffect, useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
// import List from "@material-ui/core/List";
//import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import errorPageStyle from "assets/jss/material-kit-pro-react/views/errorPageStyles.js";

import image from "assets/img/bg3.jpg";

const useStyles = makeStyles(errorPageStyle);

export default function ErrorPage({ ...rest }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  const load = async () => {
    let r = await axios.get("/users");
    setUsers(r.data);
  }

  useEffect(() => {
    (async () => await load())();
  }, []);

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        {/* <div className={classes.container}> */}
        <div className={classes.contentCenter}>
          <GridContainer>
            <GridItem md={12}>
              <h1 className={classes.title}>Users</h1>
              <h2 className={classes.subTitle}>
                {users.map(user =>
                  <div key={user.id}>{user.username}</div>
                )}
              </h2>
            </GridItem>
          </GridContainer>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}