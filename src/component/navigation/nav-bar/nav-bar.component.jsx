import React from "react";
import { Wrapper, StyledMainWrapper } from "./nav-bar.style";
import { Logo } from "../../logo/logo.component";
import Container from "../../../layout/elements/container.style";
import { NavItems } from "../nav-items/nav-items.component";

const NavBar = () => {
  return (
    <StyledMainWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <NavItems />
        </Wrapper>
      </Container>
    </StyledMainWrapper>
  );
};

export { NavBar };
