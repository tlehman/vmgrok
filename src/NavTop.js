import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavTop extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">VMGrok</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/jvm">
            JVM
          </NavItem>
          <NavItem eventKey={3} href="/evm">
            EVM (coming soon)
          </NavItem>
          <NavItem eventKey={2} href="/v8">
            V8 (coming eventually)
          </NavItem>
          <NavItem href="https://tobilehman.com/">
            About the author
          </NavItem>
        </Nav>
      </Navbar>
      )
    }
}

export default NavTop;
