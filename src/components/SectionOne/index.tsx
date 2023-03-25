import * as S from "./styles";
import React from "react";
import { Whatsapp } from "@styled-icons/bootstrap/Whatsapp";
import Image from "next/image";

const SectionOne = () => {
  return (
    <S.Wrapper id="sectionOne">
      <S.Info>
        <S.Heading>RF REBOQUE</S.Heading>
        <S.Text>
          Se você precisar de um serviço de reboque de carros confiável e
          rápido, estamos aqui para ajudar! Por favor, entre em contato conosco
          pelo WhatsApp no número para obter mais informações e agendar um
          horário. Estamos disponíveis 24 horas por dia, 7 dias por semana, para
          ajudar com qualquer emergência automotiva. Aguardamos sua mensagem!
        </S.Text>
        <S.Button href="https://wa.me/5522997133435">
          <Whatsapp size={22} />
          WHATSAPP
        </S.Button>
      </S.Info>
      <S.ImageWrapper>
        <Image
          src='/img/logo.jpg'
          alt='Logo da RF reboque'
          layout="fill"
          objectFit="cover"
        />
      </S.ImageWrapper>
    </S.Wrapper>
  );
};
export default SectionOne;
