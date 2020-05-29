import React from "react";
import { NavBar } from "../component/navigation/nav-bar";
import { MainWrapper } from "./layout.style";
import { SideDrawer } from "../component/navigation/side-drawer";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <SideDrawer />
    <MainWrapper>{children}</MainWrapper>
  </>
);

export { Layout };
