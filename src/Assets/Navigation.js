import styled from 'styled-components';
//Write styling for the insides of the navigation bar here
const Nav = styled.nav`
  background-color: ${props => props.theme.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

// Path: src\Assets\Navigation.scss
//Write styling for the logo here
const Logo = styled.h1`
  color: ${props => props.theme.white};
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

// Path: src\Assets\Navigation.scss
//Write styling for the list here
const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  margin-left: 2rem;
`;


const Li = styled.a`
  color: ${props => props.theme.white};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.secondary};
  }
`;

export {Nav, Logo, List, ListItem, Li};