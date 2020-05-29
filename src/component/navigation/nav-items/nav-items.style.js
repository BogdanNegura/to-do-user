import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  align-items: center;
  height: 100%;
`;
