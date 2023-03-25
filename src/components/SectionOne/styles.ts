import theme from "@/styles/theme";
import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  background: linear-gradient(
    to bottom left,
    #282828,
    #212121,
    #1a1a1a,
    #131313,
    #0a0a0a
  );

  color: white;
  height: calc(100vh - 5rem);
  ${media.greaterThan("medium")`
     display: grid;
     grid-template-rows: 15% 65% 20%;
     grid-template-columns: 7% 38% 10% 38% 7%;
     padding-top: 7rem;
    `}
  ${media.lessThan("medium")`
      display: flex;
      flex-direction: column;
      padding: 2rem;
      padding-top: 7rem;
    `}
    @media (min-width: 1500px) {
    padding: 0 29rem;
  }
  border-top: 0.5rem solid ${theme.colors.secondary};
  border-bottom: 0.5rem solid ${theme.colors.secondary};
`;

export const Text = styled.h2`
  font-size: 1rem;
  margin-bottom: 5rem;
  font-weight: 500;
  @media (min-width: 1500px) {
    font-size: 2.6rem;
  }
  ${media.lessThan("medium")`
      font-size: 2rem;
      text-align: center;
    `}
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    grid-column: 4/6;
    grid-row: 2;
    width: 40rem;
    height: 100%;
    @media (min-width: 1500px) {
      width: 60rem;
    }
    ${media.lessThan("medium")`
      width: 35rem;
      margin-left: 1.5rem;
      margin-bottom: 1.5rem;
    `}
    position: relative;
    border: solid 0.5rem ${theme.colors.secondary};
    border-radius: 1rem;
    transition: 2s opacity;
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    font-size: 3rem;

    letter-spacing: 0.5rem;
    &::after {
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      content: "";
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.secondary};
    }
  `}
`;
export const Info = styled.div`
  grid-column: 1/3;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Button = styled.a`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    border-radius: 0.5rem;
    cursor: pointer;
    margin: 3rem auto;
    width: 30rem;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    background-color: ${theme.colors.primary};
    border: 0.2rem solid ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: 800;
    color: ${theme.colors.white};
    letter-spacing: 0.5rem;
    transition: 0.5s letter-spacing;
    text-decoration: none;
    :hover {
      letter-spacing: 1rem;
    }
  `}
`;
