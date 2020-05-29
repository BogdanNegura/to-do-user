import styled from "styled-components";

export const StyledMainWrapper = styled.header`
  position: fixed;
  background-color: var(--color-mainDark);
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  @media ${(props) => props.theme.mediaQueries.smallest} {
    display: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;
