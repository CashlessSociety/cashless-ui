/*eslint-disable*/
import React, {useEffect, useState} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
// import List from "@material-ui/core/List";
//import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "CustomComponents/Header/Header.js";
import HeaderLinks from "CustomComponents/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import usersListStyle from "assets/jss/material-kit-pro-react/views/usersListStyle.js";

import Card from "components/Card/Card.js";

import image from "assets/img/bg3.jpg";

const useStyles = makeStyles(usersListStyle);

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
        brand="Cashless"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        {...rest}
      />

        <Parallax image={require("assets/img/bg9.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Our Members</h1>
              <h4>Meet the amazing people in Cashless Society
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

       <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

          <div className={classes.team}>
            <GridContainer>
              
               <GridItem md={3} sm={3}>
                 
                  {users.map(user =>
                     <Card profile plain>
                        <div key={user.id}>{user.username}</div>
                     </Card>
                  )}
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>

    </div>
  );
}