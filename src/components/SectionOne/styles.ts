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
`;

export const Text = styled.h2``;

type ImageProps = {
  src: string;
};
export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    height: 100%;
    width: 40rem;
    ${media.lessThan("medium")`
      width: 35rem;
    `}
    grid-column: 4;
    grid-row: 2;
    background-image: url(${src});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: solid 0.5rem ${theme.colors.secondary};
  `}
`;
export const Heading = styled.h2`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    font-size: 3rem;
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
  grid-column: 2;
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
    
    :hover {
      background: radial-gradient(
        circle,
        rgba(234, 187, 0, 1) 0%,
        rgba(188, 24, 33, 1) 100%
      );
    letter-spacing: 1rem;

    }
  `}
`;

