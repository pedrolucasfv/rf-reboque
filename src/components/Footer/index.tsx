import * as S from "./styles";
import { Instagram as InstagramIcon } from "@styled-icons/bootstrap/Instagram";
import Image from "next/image";

const Footer = () => (
  <S.Wrapper>
    <S.Info>
      <S.ContentInfo>
        <S.Heading type="primary">Localização</S.Heading>
        <S.Text>
          <span>Endereço:</span> Sitio nossa senhora
        </S.Text>
        <S.Text>
          <span>Cidade:</span> Apiacá
        </S.Text>
        <S.Text>
          <span>Cep:</span> 29450-000
        </S.Text>
      </S.ContentInfo>
      <S.ContentInfo>
        <S.Heading type="secondary">Redes Sociais</S.Heading>
        <S.SocialNetwork href="https://www.instagram.com/rf.reboque/">
          <InstagramIcon size={50} />
        </S.SocialNetwork>
      </S.ContentInfo>
    </S.Info>

    <S.ImageWrapper>
      <Image
        src="/img/logo.jpg"
        alt="Logo da RF reboque"
        layout="fill"
        objectFit="cover"
      />
    </S.ImageWrapper>
    <S.CopyrightContent>
      <S.Copyright>RF REBOQUE 2023 © Todos direitos reservados</S.Copyright>
      <S.Copyright>
        <span>Feito por Pedro Lucas Ferreira Vieira</span>
      </S.Copyright>
    </S.CopyrightContent>
  </S.Wrapper>
);

export default Footer;
