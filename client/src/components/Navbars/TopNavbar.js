/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
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
  UncontrolledTooltip,
} from "reactstrap";

function WhiteNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="bg-white fixed-top" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              NZ Tech Skills Exchange 
            </NavbarBrand>
            <UncontrolledTooltip target="navbar-brand">
              Powered by Cashless 
            </UncontrolledTooltip>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              <NavItem>
                <Button
                  className="nav-link"
                  target="_blank"
                  color="info"
                >
                  <p>My Trades</p>
                </Button>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navBarMyAccount"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app"></i>
                  <p>My Account</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navBarMyAccount" right>
                  <DropdownItem to="/" tag={Link}>
                    <i className="now-ui-icons design_image"></i>
                    My wallet
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36"></i>
                    My trades
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>


            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;
