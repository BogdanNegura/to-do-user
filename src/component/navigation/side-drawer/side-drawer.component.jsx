import React, { useState } from "react";
import { Wrapper, StyledMainWrapper, Menu } from "./side-drawer.style";
import { Logo } from "../../logo/logo.component";
import { NavItems } from "../nav-items/nav-items.component";
import { Hamburger } from "./hamburger/hamburger.component";

const SideDrawer = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <StyledMainWrapper>
        <Wrapper>
          <Logo />
          <Hamburger opened={isOpened} clicked={() => setIsOpened(!isOpened)} />
        </Wrapper>
      </StyledMainWrapper>
      <Menu opened={isOpened}>
        <NavItems mobile clicked={() => setIsOpened(false)} />
      </Menu>
    </>
  );
};

export { SideDrawer };
