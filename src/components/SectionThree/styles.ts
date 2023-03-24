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
    padding: 3rem 3rem;
    `}
    @media (min-width: 1500px) {
      padding: 5rem 29rem;
    }
    border-top: 0.5rem solid ${theme.colors.secondary};
  border-bottom: 0.5rem solid ${theme.colors.secondary};
  `}
`;
export const HeadingContent = styled.div`
  margin-bottom: 3rem;
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
      width: 4.8rem;
      border-bottom: 0.5rem solid ${theme.colors.secondary};
    }
  `}
`;
export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${media.lessThan("medium")`
  grid-template-columns: 1fr;
  `}
`;
export const BoxMobile = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: 1rem;
    width: calc(100% - 0.5rem);
    @media (max-width: 400px) {
      width: 32rem;
    }
  `}
`;
type ImageProps = {
  src: string;
};

export const Image = styled.div<ImageProps>`
  ${({ src, theme }) => css`
    margin-right: 3rem;
    margin-bottom: 3rem;

    height: 52.5rem;
    width: 30rem;
    ${media.lessThan("medium")`
      width: 35rem;
    `}
    @media (max-width: 400px) {
      width: 32rem;
    }
    background-image: url(${src});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: solid 0.5rem ${theme.colors.secondary};
    border-radius: 1rem;
    transition: 2s opacity;
  `}
`;
export const ImageContent = styled.div``;

export const Video = styled.div`
  background-color: white;
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

  `}
`;
