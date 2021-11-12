import styled from 'styled-components';

const StyledNavbar = styled.nav`
  nav {
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    width: 100;
    z-index: 10;
    letter-spacing: 0.5px;
  }

  nav ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav ul li {
    display: inline-block;
    padding: 5px;
    font-weight: bold;
    padding: 1 25px;
    text-align: center;
    text-decoration: none;
    margin: 4px;
    border-radius: 6px;
  }

  nav ul a:link {
    color: black;
    text-decoration: none;
  }

  nav ul a:visited {
    color: #020202;
  }

  nav ul a:hover {
    border-bottom: 1px solid;
    color: #fcfcfc;
  }
`;
export default StyledNavbar;
