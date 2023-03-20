import styled, { css } from "styled-components";
import media from "styled-media-query";
import theme from "../../styles/theme";

export const Wrapper = styled.menu`
  background: linear-gradient(
    to left top,
    #e3e3e3,
    #dedede,
    #e5e5e5,
    #ececec,
    #f5f5f5
  );
  svg {
    color: black;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 0;
  padding-left: 1.2rem;
  position: relative;
  height: 6rem;
  border-bottom: 0.4rem solid ${theme.colors.secondary};
  ${media.lessThan("medium")`
     padding-right: 1.2rem;
     height: 6rem;
    `}
    @media (min-width: 1500px) {
    padding: 0 29rem;
  }
`;
export const LogoWrapper = styled.div`
  margin-left: 2rem;
  ${media.lessThan("medium")`
  margin: 0 auto;
 `}
`;
type ImageProps = {
  src: string;
};
export const Logo = styled.div<ImageProps>`
  ${({ src }) => css`
    background: url(${src});
    height: 5rem;
    width: 7rem;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  `}
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  color: black;
`;

export const MenuGroup = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  > div {
    margin: 0 1.5rem;
    ${media.lessThan("medium")`
    margin: 0 0.5rem
    `}
  }
  ${media.greaterThan("medium")`
    padding: 7rem;
    margin-right: 2rem;
    > button { 
    padding: 1rem 2rem;
   }
  `}

`;

export const MenuNav = styled.div`
  ${media.greaterThan("medium")`
  margin-left: 2rem;
  `}
  display: flex;
`;

export const MenuLink = styled.div`
  position: relative;
  color: gray;
  font-size: 1.4rem;
  margin: 0.3rem 1rem 0;
  text-decoration: none;
  text-align: center;
  font-weight: bold;
  padding: 1.8rem 2rem;
  cursor: pointer;
  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.primary}33;
    &::after {
      content: "";
      position: absolute;
      display: block;
      height: 1.5rem;
      ${media.lessThan("medium")`
          height: 0.4rem;
      `}
      border-bottom: 0.5rem solid ${theme.colors.primary};
      animation: hoverAnimation 0.2s forwards;
    }
    @keyframes hoverAnimation {
      from {
        width: 0;
        left: 50%;
      }
      to {
        width: 100%;
        left: 0;
      }
    }
  }
`;

type MenuToggleProps = {
  isOpenMenu: boolean;
};
export const MenuToggle = styled.nav<MenuToggleProps>`
  ${({ isOpenMenu }) => css`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    z-index: 20;
    width: 42%;
    left: 0;
    top: 0;

    bottom: 0;
    height: 100vh;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpenMenu ? 1 : 0};
    pointer-events: ${isOpenMenu ? "all" : "none"};

    > svg {
      margin: 1.5rem;
      cursor: pointer;
      width: 2rem;
      height: 2rem;
    }
    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 1rem;
      flex: 1;
    }
    ${MenuLink} {
      color: black;
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 1rem;
      transform: ${isOpenMenu ? "translateY(0)" : "translateY(3rem)"};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;

export const Sombra = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

/*
background: linear-gradient(
  to left top,
  #e3e3e3,
  #dedede,
  #e5e5e5,
  #ececec,
  #f5f5f5
);

background: linear-gradient(
    to bottom left,
    #282828,
    #212121,
    #1a1a1a,
    #131313,
    #0a0a0a
  );
*/
