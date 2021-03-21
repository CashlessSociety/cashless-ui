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

      {/* this closes the sidebar if user clicks outside of it */}
      {collapseOpen ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle('nav-open');
            setCollapseOpen(false);
          }}
        />
      ) : null}

      {/* can cadd 'navbar-expand' to this Navbarclass to make it never collapse */}
      <Navbar className='bg-dark fixed-top'>
        <Container>

          {/* this pushed everything to the left stupidly
          <div className='navbar-translate'> */}

          <NavbarBrand to='/' tag={Link} id='navbar-brand'>
            Cashless
          </NavbarBrand>

          {/* this displays the join button when a user is not logged in */}
          {!isAuthenticated && <NavItem tag={Link} to='/join'>
            <Button className='nav-link btn-round' color='primary'>
              <p>Join Cashless</p>
            </Button>
          </NavItem>}

          {/* this chunk controls what's visible when a user is logged in */}
          {isAuthenticated && <>

            {/* this bit controls what's visible when the collapse is not open */}
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
                  // this line opens the sidebar
                  document.documentElement.classList.toggle("nav-open");
                  // this line just keeps track of the state (can this be linked to nav-open as default?)
                  setCollapseOpen(!collapseOpen);
                }}
                // this property says whether the collapse is open (true) or not (false)
                aria-expanded={collapseOpen}
                className="navbar-toggler"
              >
                {/* these bits are literally the layers of the hamburger!! */}
                <span className="navbar-toggler-bar top-bar"></span>
                <span className="navbar-toggler-bar middle-bar"></span>
                <span className="navbar-toggler-bar bottom-bar"></span>
              </button>
            </>
            }

          </>}

          <Collapse isOpen={collapseOpen} navbar>
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
