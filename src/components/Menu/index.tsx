import { useState } from "react";
import { Link } from "react-scroll";
import { MenuOutline as MenuIcon } from "@styled-icons/evaicons-outline/MenuOutline";
import { CloseOutline as CloseIcon } from "@styled-icons/evaicons-outline/CloseOutline";

import MediaMatch from "../MediaMatch/index";
import * as S from "./styles";

const Menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpenMenu(true)}>
          <MenuIcon size={22} aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link
          to="sectionOne"
          spy={true}
          smooth={true}
          offset={-6}
          duration={500}
        >
          <S.Logo src='img/logo-menu.png' />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link
            to="sectionOne"
            spy={true}
            smooth={true}
            offset={-6}
            duration={500}
          >
            <S.MenuLink>Início</S.MenuLink>
          </Link>
          <Link
            to="sectionTwo"
            spy={true}
            smooth={true}
            offset={-46}
            duration={500}
          >
            <S.MenuLink>Dúvidas</S.MenuLink>
          </Link>

          <Link
            to="sectionThree"
            spy={true}
            smooth={true}
            offset={-66}
            duration={500}
          >
            <S.MenuLink>Galeria</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      {/* MENU LATERAL NO MOBILE */}
      {isOpenMenu && <S.Sombra> </S.Sombra>}
      <S.MenuToggle aria-hidden={!isOpenMenu} isOpenMenu={isOpenMenu}>
        <CloseIcon
          aria-label="Close Menu"
          onClick={() => setIsOpenMenu(false)}
        />
        <S.MenuNav>
          <Link
            to="sectionOne"
            spy={true}
            smooth={true}
            offset={-6}
            duration={500}
            onClick={() => setIsOpenMenu(false)}
          >
            <S.MenuLink>Início</S.MenuLink>
          </Link>

          <Link
            to="sectionTwo"
            spy={true}
            smooth={true}
            offset={-46}
            duration={500}
            onClick={() => setIsOpenMenu(false)}
          >
            <S.MenuLink>Dúvidas</S.MenuLink>
          </Link>

          <Link
            to="sectionThree"
            spy={true}
            smooth={true}
            offset={-66}
            duration={500}
            onClick={() => setIsOpenMenu(false)}
          >
            <S.MenuLink>Galeria</S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuToggle>
    </S.Wrapper>
  );
};
export default Menu;
