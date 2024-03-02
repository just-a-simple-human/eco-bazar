import React from 'react'
import styled from 'styled-components'
import { colors } from '../default'
import { NavLink, useMatch } from 'react-router-dom'

const StyledNavLinks = styled.nav`
    display: flex;
    gap: 32px;

    background: transparent;
`

const StyledNavLink = styled(NavLink)`
    font-size: 14px;
    font-family: 'Poppins Medium';
    text-decoration: none;
    color: ${props => props.$islinkactive ? colors.brandingColors.white : colors.grey[4]};
`

function NavLinks() {
  return (
    <StyledNavLinks>
        <StyledNavLink to={`/`} $islinkactive={useMatch(`/`)}>Home</StyledNavLink>
        <StyledNavLink to={`/shop`} $islinkactive={useMatch(`/shop`)}>Shop</StyledNavLink>
        <StyledNavLink to={`/blog`} $islinkactive={useMatch(`/blog`)}>Blog</StyledNavLink>
        <StyledNavLink to={`/about`} $islinkactive={useMatch(`/about`)}>About Us</StyledNavLink>
        <StyledNavLink to={`/contact`} $islinkactive={useMatch(`/contact`)}>Contact Us</StyledNavLink>
    </StyledNavLinks>
  )
}

export default NavLinks