import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
  DropdownItem } from 'reactstrap';

export default class Navbarcito extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand>
            <Link
              style={{
                textDecoration: 'none',
                color: 'white'
              }} 
              to="/">Mawi's App</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink>
                  <Link 
                    style={{
                      textDecoration: 'none',
                      color: 'white'
                    }}
                    to="/signup">Signup</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link
                    style={{
                      textDecoration: 'none',
                      color: 'white'
                    }} 
                    to="/login">Login</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link 
                    style={{
                      textDecoration: 'none',
                      color: 'white'
                    }}
                    to="/logout">Logout</Link>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle 
                style={{
                  textDecoration: 'none',
                  color: 'white'
                }}
                nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
