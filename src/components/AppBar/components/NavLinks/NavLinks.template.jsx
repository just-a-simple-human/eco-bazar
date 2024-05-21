import React from "react";
import { useMatch } from "react-router-dom";
import { StyledNavLink, StyledNavLinks } from "./NavLinks.style";

function NavLinks() {
  return (
    <StyledNavLinks>
      <StyledNavLink to={`/`} $islinkactive={useMatch(`/`)}>
        Home
      </StyledNavLink>
      <StyledNavLink to={`/shop`} $islinkactive={useMatch(`/shop`)}>
        Shop
      </StyledNavLink>
      <StyledNavLink to={`/blog`} $islinkactive={useMatch(`/blog`)}>
        Blog
      </StyledNavLink>
      <StyledNavLink to={`/about`} $islinkactive={useMatch(`/about`)}>
        About Us
      </StyledNavLink>
      <StyledNavLink to={`/contact`} $islinkactive={useMatch(`/contact`)}>
        Contact Us
      </StyledNavLink>
    </StyledNavLinks>
  );
}

export default NavLinks;
