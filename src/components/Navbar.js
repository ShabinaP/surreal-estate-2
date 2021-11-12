import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { NavLink } from 'react-router-dom';
import StyledNavbar from '../styled-components/NavBar.styled';

const NavBar = (onLogin) => (
  <div>
    <StyledNavbar>
      <nav>
        <ul>
          <li>
            <NavLink to="/">View Properties</NavLink>
          </li>
          <li>
            <NavLink to="/add-property">Add a Property </NavLink>
          </li>
          <li>
            <FacebookLogin
              appId="430646718474597"
              autoLoad
              fields="name,email,picture"
              callback={onLogin}
            />
          </li>
        </ul>
      </nav>
    </StyledNavbar>
  </div>
);

export default NavBar;
