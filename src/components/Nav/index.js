import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../../assets/images/logo.png";
import OrderButton from "../../components/Button/orderButton";
import "./index.css";
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar color="transparent" expand="md">
        <div className="container mt-3 mb-3">
          <NavbarBrand href="/">
            <img src={logo} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} className="nav__toggle" transparent />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/">
                  <NavLink href="/" className="mr-3 ml-3 nav__link">
                    Home
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/wash">
                  <NavLink href="/wash" className="mr-3 ml-3 nav__link">
                    Wash & fold
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="mr-3 ml-3 nav__link">
                  Clean & Press
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="mr-3 ml-3 nav__link ">
                  Help
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" className="mr-3 ml-3 nav__link">
                  Pricing
                </NavLink>
              </NavItem>
              <NavItem>
                <Link to="/about">
                  <NavLink href="/about" className="mr-3 ml-3 nav__link">
                    About
                  </NavLink>
                </Link>
              </NavItem>
            </Nav>
            <OrderButton />
          </Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Example;
