import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #282c34;
  color: white;
`;

const Nav = styled.nav`
  a {
    margin: 0 1rem;
    color: white;
    text-decoration: none;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>AI News</h1>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
      <div>
        <Link to="/profile">Profile</Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
