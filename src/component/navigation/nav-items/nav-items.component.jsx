import React from "react";
import { NavItem } from "../nav-item/nav-item.component";
import { Nav, Ul } from "./nav-items.style";

const NavItems = ({ mobile, clicked }) => {
  return (
    <Nav>
      <Ul mobile={mobile}>
        <NavItem clicked={clicked} mobile={mobile} link="/">
          Home
        </NavItem>
        <NavItem mobile={mobile} clicked={clicked} link="/ todos">
          Todos
        </NavItem>
      </Ul>
    </Nav>
  );
};

export { NavItems };
