import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

/**
 * @author
 * @class Navbar
 **/

class Navbar extends Component {
  state = {};
  render() {
    return (
      <NavbarWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
          Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            My Cart
          </ButtonContainer>
        </Link>
      </NavbarWrapper>
    );
  }
}

const NavbarWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

Navbar.propTypes = {};
export default Navbar;
