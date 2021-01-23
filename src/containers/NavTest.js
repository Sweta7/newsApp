import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class NavTest extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/">Home</Link>
      <Link to="/containers/NZ">New Zealand</Link>
      <Link to="/containers/India">India</Link>
      <Link to="/containers/Technology">Technology</Link>
      <Link to="/containers/Science">Sports</Link>
      <Link to="/containers/Business">Business</Link>
      <Link to="/containers/Sports">Science</Link>
      <Link to="/containers/Entertainment">Entertainment</Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
                )
            }
        }
