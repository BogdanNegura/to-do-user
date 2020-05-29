import React from "react";
import { StyledLi, StyledNavLink } from "./nav-item.style";

const NavItem = ({ link, children, mobile, clicked }) => {
  return (
    <StyledLi>
      <StyledNavLink
        onClick={clicked}
        exact
        activeClassName="active"
        mobile={mobile}
        to={link}
      >
        {children}
      </StyledNavLink>
    </StyledLi>
  );
};

export { NavItem };
