import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../../img/nasa_logo.jpg';
import background from '../../img/background_img.jpg'

const NavImg = styled.img`
  width: 25%;
  height: auto;
`;

const NewNavBar = styled(Navbar)`
  background: url(${background});
  
`;

const NewNavbarBrand = styled(NavbarBrand)`
  margin-left: 2%;
  font-size: 5rem;
  color: white !important;
  font-family: 'Titillium Web', sans-serif;
`;

const NewNavLink = styled(NavLink)`
  color: coral !important;
  font-family: 'Titillium Web', sans-serif;
  font-size: 2rem;
  text-decoration: underline;
`;

const NewNavbarToggler = styled(NavbarToggler)`
  background-color: coral;
`;

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <NewNavBar color="faded" light>
        <NavImg src={logo} alt="nasa logo"/>
        <NewNavbarBrand href="/" className="mr-auto">NASA Astronomy Photo of the Day {'{'}APIs{'}'}</NewNavbarBrand>
        <NewNavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NewNavLink href="https://api.nasa.gov">NASA {'{'}APIs{'}'}</NewNavLink>
            </NavItem>
            <NavItem>
              <NewNavLink href="https://github.com/reactstrap/reactstrap">ReactStrap GitHub</NewNavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </NewNavBar>
    </div>
  );
}

export default NavBar;