/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from 'reactstrap';
import {
  localStorageGet,
  localStorageSet,
  localStorageDelete,
} from '../../lib/localStorage';

function TopNavbar({ isAuthenticated }) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  return (
    <>
      {collapseOpen ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle('nav-open');
            setCollapseOpen(false);
          }}
        />
      ) : null}

      <Navbar className='bg-dark fixed-top'>
        <Container>
          <NavbarBrand to='/' tag={Link} id='navbar-brand'>
            Cashless
          </NavbarBrand>

          {!isAuthenticated && <NavItem tag={Link} to='/join'>
            <Button className='nav-link btn-round' color='primary'>
              <p>Join Cashless</p>
            </Button>
          </NavItem>}

          {isAuthenticated && <>
          
            {/* this bit controls what's visible on the navbar when the sidebar is closed */}
            {!collapseOpen && <>
              <NavLink href='/'>
                <i class="now-ui-icons ui-1_simple-add"></i>
                <p>POST</p>
              </NavLink>
              <NavLink>
                <i class="now-ui-icons users_circle-08"></i>
              </NavLink>

              {/* hamburger menu */}
              <button
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setCollapseOpen(!collapseOpen);
                }}
                aria-expanded={collapseOpen}
                className="navbar-toggler"
              >
                <span className="navbar-toggler-bar top-bar"></span>
                <span className="navbar-toggler-bar middle-bar"></span>
                <span className="navbar-toggler-bar bottom-bar"></span>
              </button>
            </>
            }

          </>}

          <Collapse isOpen={collapseOpen} navbar>

            {/* this is the 'x' close button on the sidebar */}
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
            >
              <i class="now-ui-icons ui-1_simple-remove"></i>
            </button>

            <Nav className='ml-auto' id='ceva' navbar>
              {isAuthenticated && <>
                <NavItem>
                  <NavLink>
                    <i class="now-ui-icons ui-1_simple-add"></i>
                    <p>POST</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <i class="now-ui-icons users_circle-08"></i>
                    <p>My Profile</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <i class="now-ui-icons files_paper"></i>
                    <p>My Trades</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <i class="now-ui-icons media-1_button-power"></i>
                    <p>Logout</p>
                  </NavLink>
                </NavItem>
              </>
              }
            </Nav>
          </Collapse>
        </Container>
      </Navbar >
    </>
  );
}

export default TopNavbar;
