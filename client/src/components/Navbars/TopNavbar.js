/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
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
      <Navbar className='bg-dark fixed-top' expand='lg'>
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand to='/' tag={Link} id='navbar-brand'>
              Cashless
            </NavbarBrand>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className='ml-auto' id='ceva' navbar>
              {!isAuthenticated && <NavItem tag={Link} to='/join'>
                <Button className='nav-link btn-round' color='primary'>
                  <p>Join Cashless</p>
                </Button>
              </NavItem>}
              {isAuthenticated && <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color='default'
                  data-toggle='dropdown'
                  href='#pablo'
                  id='navBarMyAccount'
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className='now-ui-icons design_app'></i>
                  <p>My Account</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby='navBarMyAccount' right>
                  <DropdownItem to='/' tag={Link}>
                    <i className='now-ui-icons design_image'></i>
                    My wallet
                  </DropdownItem>
                  <DropdownItem to='/index' tag={Link}>
                    <i className='now-ui-icons business_chart-pie-36'></i>
                    My trades
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavbar;
