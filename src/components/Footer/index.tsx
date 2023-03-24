import * as S from "./styles";
import { CloseOutline as InstagramIcon } from "@styled-icons/evaicons-outline/CloseOutline";

const Footer = () => (
  <S.Wrapper>
    <S.Info>
      <S.ContentInfo>
        <S.Heading type="primary">Localização</S.Heading>
        <S.Text>
          <span>Rua:</span> Demerval Teixeira da Fonseca
        </S.Text>
        <S.Text>
          <span>Número:</span> 251
        </S.Text>
        <S.Text>
          <span>Cidade:</span> Bom Jesus do Itabapoana
        </S.Text>
        <S.Text>
          <span>Cep:</span> 28360-000
        </S.Text>
      </S.ContentInfo>
      <S.ContentInfo>
        <S.Heading type="tertiary">Redes Sociais</S.Heading>
        <S.Subtitle className="primeiroItem">Projeto A Rede</S.Subtitle>
        <S.SocialNetwork>
        <InstagramIcon size={50} />
        </S.SocialNetwork>
      </S.ContentInfo>
    </S.Info>
    <S.ContentImage>
      <S.Image src="/img/logo.jpg" />
    </S.ContentImage>
    <S.CopyrightContent>
      <S.Copyright>Projeto A Rede 2023 © Todos direitos reservados</S.Copyright>
      <S.Copyright>
        <span>Feito por Pedro Lucas Ferreira Vieira</span>
      </S.Copyright>
    </S.CopyrightContent>
  </S.Wrapper>
);

export default Footer;
