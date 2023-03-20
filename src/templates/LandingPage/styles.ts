import styled from "styled-components";

export const Wrapper = styled.main``;

export const Menu = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0%
`;
export const Background = styled.div`
  position: fixed;
  top: 1%;
  left: 0%;
  bottom: 0%;
  right: 0%;
  z-index: -10;
  background: url("/img/background-fix.jpg");
  background-position: center;
  background-size: cover;
`;

export const SectionOne = styled.div`
  margin-top: 11rem;
`