import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background: linear-gradient(
      to top left,
      #282828,
      #212121,
      #1a1a1a,
      #131313,
      #0a0a0a
    );
    color: white;
    min-height: calc(100vh - 5rem);
    
    ${media.greaterThan("medium")`
    padding: 3rem 10rem;
    `}
    display: flex;
    flex-direction: column;
    ${media.lessThan("medium")`
      padding: 2rem;
    `}
    @media (max-width: 400px) {
    padding: 3rem 1rem;
    }
    border-top: 0.5rem solid ${theme.colors.secondary};
  border-bottom: 0.5rem solid ${theme.colors.secondary};
  `}
`;

export const HeadingContent = styled.div`
  margin-bottom: 7rem;
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    ${media.lessThan("medium")`
    font-size: 2.5rem;

    `}
    @media (min-width: 1500px) {
      font-size: 6rem;
    }
    letter-spacing: 0.2rem;
    &::after {
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      content: "";
      width: 10rem;
      border-bottom: 1rem solid ${theme.colors.secondary};
      ${media.lessThan("medium")`
      width: 4rem;
      border-bottom: 0.5rem solid ${theme.colors.secondary};
    `}
    }
  `}
`;
export const Box = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${media.lessThan("medium")`
  grid-template-columns: 1fr;
  `}
  grid-gap: 10rem;
`;
