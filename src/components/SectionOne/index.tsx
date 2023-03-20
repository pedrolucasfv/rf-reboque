import * as S from "./styles";
import React from "react";
import { Whatsapp } from "@styled-icons/bootstrap/Whatsapp";

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
        <S.Button>
          <Whatsapp size={22} />
          <S.ButtonText>
            Clique aqui para entrar em contato no whatsapp
          </S.ButtonText>
        </S.Button>
      </S.Info>
      <S.Image src="/img/logo.jpg" />
    </S.Wrapper>
  );
};
export default SectionOne;
