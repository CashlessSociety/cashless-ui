/*eslint-disable*/
import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import UserContext from 'providers/User'
import Avatar from 'components/Avatar'

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Modal,
  ModalFooter,
  Alert 
} from 'reactstrap';

function TopNavbar() {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [logoutAlert, setLogoutAlert] = useState(true);
  const {user: { isAuthenticated, token }, dispatch } = useContext(UserContext);

  function logout () {
    dispatch({ type: 'logout' })
    document.documentElement.classList.toggle('nav-open');
    setCollapseOpen(false)
  }

  function checkLogout () {
    if (!token) {
      setLogoutModal(true)
    } else {
      logout()
    }
  }

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
          <NavbarBrand to='/' tag={Link} id='navbar-brand'>
            Cashless
          </NavbarBrand>

          <Alert
            color="success"
            isOpen={logoutAlert}
          >
            <div className="alert-icon">
              <i className="now-ui-icons ui-1_check"></i>
            </div>
            You have successfully logged out.
          </Alert>

          {!isAuthenticated && <NavItem tag={Link} to='/join'>
            <Button className='nav-link btn-round' color='primary'>
              <p>Join Cashless</p>
            </Button>
          </NavItem>}

          {isAuthenticated && <>
          
            {/* this bit controls what's visible on the navbar when the sidebar is closed */}
            {!collapseOpen && <>
              

              {/* hamburger menu */}
              <button
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setCollapseOpen(!collapseOpen);
                }}
                aria-expanded={collapseOpen}
                className="navbar-toggler"
              >
                <Avatar marginTop={-10} marginRight={10} />
                <span className="navbar-toggler-bar">
                  <span className="navbar-toggler-bar top-bar"></span>
                  <span className="navbar-toggler-bar middle-bar"></span>
                  <span className="navbar-toggler-bar bottom-bar"></span>
                </span>
              </button>
            </>
            }

          </>}

          <Collapse isOpen={collapseOpen} navbar>

            {/* this is the 'x' close button on the sidebar */}
            <button
              className ="button-close-nav"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
            >
              <i className="now-ui-icons ui-1_simple-remove"></i>
            </button>

            <Nav className='ml-auto' id='ceva' navbar>
              {isAuthenticated && <>
                <NavItem>
                  <NavLink>
                    <i className="now-ui-icons ui-1_simple-add"></i>
                    <p>POST</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
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
                  <NavLink onClick={checkLogout}>
                    <i className="now-ui-icons media-1_button-power"></i>
                    <p>Logout</p>
                  </NavLink>
                </NavItem>
              </>
              }
            </Nav>
          </Collapse>
          <Modal
            isOpen={logoutModal}
            toggle={() => setLogoutModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button
                aria-hidden={true}
                className="close"
                onClick={() => setLogoutModal(false)}
                type="button"
              >
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </button>
              <h4 className="title title-up">Oh no!</h4>
            </div>
            <div className="modal-body">
              <p>
                You haven't used your magic link to finish setting up your profile. If you log out now, all your data will be lost.
              </p>
            </div>
            <ModalFooter>
              <Button color="default" type="button">
                Go back
              </Button>
              <Button color="primary" onClick={() => {
                logout()
                setLogoutModal(false)
              }}>
                Log me out!
              </Button>
            </ModalFooter>
          </Modal>
      </Navbar >
    </>
  );
}

export default TopNavbar;
