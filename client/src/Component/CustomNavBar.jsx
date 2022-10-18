import React, { useState } from "react";
import { NavLink as ReactLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const CustomNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="" className="px-5">
        <NavbarBrand tag={ReactLink} to="/">
          Web Check-in
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/explore">
                Explore
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/check-in">
                Check-In
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/contact">
                Contact Us
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret color="dark">
                More
              </DropdownToggle>
              <DropdownMenu end dark>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

          <Nav navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/login">
                {" "}
                Login
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/register">
                {" "}
               Register
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavBar;