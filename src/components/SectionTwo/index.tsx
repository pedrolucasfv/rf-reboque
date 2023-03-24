import BoxItem from "../BoxItem";
import { Container } from "../Container";
import * as S from "./styles";

const SectionTwo = () => {
  const boxItem = [
    {
    title: "Qual o tamanho da prancha do caminhão?",
      text: "Temos prancha de 7 metros e meio e prancha de 10 metros e meio.",
    },
    {
      title: "Tem limite de distância em que a carga pode ser transportada?",
      text: "Não, a carga pode ser pega em qualquer lugar do Brasil e ser transportada para todo o Brasil",
    },
  ];
  return (
    <S.Wrapper id="sectionTwo">
      <Container>
        <S.HeadingContent>
          <S.Heading>Perguntas Frequentes</S.Heading>
        </S.HeadingContent>
        <S.Box>
          {boxItem.map(({ title, text }, index) => (
            <BoxItem title={title} text={text} key={index} />
          ))}
        </S.Box>
      </Container>
    </S.Wrapper>
  );
};
export default SectionTwo;
