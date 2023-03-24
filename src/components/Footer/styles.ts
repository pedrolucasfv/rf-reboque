import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    background: linear-gradient(
      to left top,
      #e3e3e3,
      #dedede,
      #e5e5e5,
      #ececec,
      #f5f5f5
    );

    ${media.greaterThan("medium")`
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 20% 60% 20%;
    `}
    ${media.lessThan("medium")`
    display: flex;
    flex-direction: column;
    `}
    border-top: 0.6rem solid ${theme.colors.secondary};
    padding: 2rem 4rem;
    @media (min-width: 1500px) {
      padding: 5rem 29rem;
    }
  `}
`;

export const Text = styled.h4`
  display: flex;
  font-size: 1.5rem;
  font-weight: 500;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  span {
    font-weight: 700;
    margin-right: 0.5rem;
  }
  svg {
    margin-left: 2rem;
  }
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    margin-bottom: 1rem;
    font-size: 2rem;
    border-bottom: solid 0.1rem gray;
    padding-bottom: 1rem;
  `}
`;

export const SocialNetwork = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.5rem;
`;
type ImageProps = {
  src: string;
};

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    ${media.lessThan("medium")`
    height: 35rem;
    `}
    height: 40rem;
    width: 40rem;
    background-image: url(${src});
    background-position: center;
    background-size: cover;
    margin: 0 5rem;
  `}
`;

export const ContentImage = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
type HeadingProps = {
  type: "primary" | "secondary" | "tertiary" | "quaternary";
};

export const Heading = styled.h2<HeadingProps>`
  ${({ theme, type }) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    font-size: 3rem;
    &::after {
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      content: "";
      width: 5rem;
      border-bottom: 0.5rem solid;
      ${type == "primary" &&
      css`
        border-color: ${theme.colors.primary};
      `}
      ${type == "secondary" &&
      css`
        border-color: ${theme.colors.secondary};
      `}
      ${type == "tertiary" &&
      css`
        border-color: ${theme.colors.tertiary};
      `}
      ${type == "quaternary" &&
      css`
        border-color: ${theme.colors.quaternary};
      `}
    }
  `}
`;

export const Info = styled.div`
  grid-row: 2;
  display: flex;
  padding: 0 5rem;
  justify-content: flex-start;
  align-items: flex-start;

  ${media.lessThan("medium")`
    flex-direction: column;
    padding: 0;
    `}
`;

export const ContentInfo = styled.div`
  margin-right: 6rem;
  .primeiroItem {
    margin-top: -1.5rem;
  }
`;

export const Copyright = styled.h2`
  color: #a2a2a2;
  font-size: 1.7rem;

  span {
    font-size: 1.4rem;
  }
`;

export const CopyrightContent = styled.div`
  grid-column: 1/3;
  grid-row: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
