/*eslint-disable*/
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import UserContext from 'providers/User';
import Avatar from 'components/Avatar';

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
} from 'reactstrap';

function TopNavbar() {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const {
    user: { isAuthenticated, token, id },
    dispatch,
  } = useContext(UserContext);
  function logout() {
    let confirm = true;
    if (!token) {
      /* TODO */
      confirm = window.confirm(
        'Your keys will be lost! Send a magiclink to your e-email to save them. Or continue and to lose your profile.'
      );
    }
    if (confirm) {
      dispatch({ type: 'logout' });
      document.documentElement.classList.toggle('nav-open');
      setCollapseOpen(false);
    }
  }
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle('nav-open');
            setCollapseOpen(false);
          }}
        />
      ) : null}

      <Navbar className="bg-dark fixed-top">
        <NavbarBrand to="/" tag={Link} id="navbar-brand">
          Cashless
        </NavbarBrand>

        {!isAuthenticated && (
          <NavItem tag={Link} to="/join">
            <Button className="nav-link btn-round" color="primary">
              <p>Join Cashless</p>
            </Button>
          </NavItem>
        )}

        {isAuthenticated && (
          <>
            {/* this bit controls what's visible on the navbar when the sidebar is closed */}
            {!collapseOpen && (
              <>
                {/* hamburger menu */}
                <div style={{ display: 'flex'}}>
                  <a href={`/profile/${id}`}>
                    <Avatar />
                  </a>
                  <button
                    onClick={() => {
                      document.documentElement.classList.toggle('nav-open');
                      setCollapseOpen(!collapseOpen);
                    }}
                    aria-expanded={collapseOpen}
                    className="navbar-toggler"
                  >
                    <span className="navbar-toggler-bar">
                      <span className="navbar-toggler-bar top-bar"></span>
                      <span className="navbar-toggler-bar middle-bar"></span>
                      <span className="navbar-toggler-bar bottom-bar"></span>
                    </span>
                  </button>
                </div>
              </>
            )}
          </>
        )}

        <Collapse isOpen={collapseOpen} navbar>
          {/* this is the 'x' close button on the sidebar */}
          <button
            className="button-close-nav"
            onClick={() => {
              document.documentElement.classList.toggle('nav-open');
              setCollapseOpen(!collapseOpen);
            }}
          >
            <i className="now-ui-icons ui-1_simple-remove"></i>
          </button>

          <Nav className="ml-auto" id="ceva" navbar>
            {isAuthenticated && (
              <>
                <NavItem>
                  <NavLink>
                    <i className="now-ui-icons ui-1_simple-add"></i>
                    <p>POST</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={`/profile/${id}`}>
                    <i className="now-ui-icons users_circle-08"></i>
                    <p>My Profile</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <i className="now-ui-icons files_paper"></i>
                    <p>My Trades</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={logout}>
                    <i className="now-ui-icons media-1_button-power"></i>
                    <p>Logout</p>
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default TopNavbar;
