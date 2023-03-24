import BoxItem from "../BoxItem";
import { Container } from "../Container";
import * as S from "./styles";

const SectionTwo = () => {
  const boxItem = [
    {
      title: "Qual peso máximo que o caminhão suporta?",
      text: "Depende do tipo de carga, em tese, o caminhão suporta 320kgs, mas a carga máxima pode ser variavel em relação ao que esteja carregando. O recorde desse caminhão foi 305kgs, um trator que foi carregado com sucesso por 900kms",
    },
    {
      title: "Quais as medidas máximas que a carga pode ter?",
      text: "O caminhão suporta carregar uma carga com até 5 metros de altura, 2.5 metros de largura e 20 metros de comprimento.",
    },
    {
      title: "Tem limite de distância em que a carga pode ser transportada?",
      text: "Não, a carga pode ser transporta para todo o Brasil, mas podendo ter alterações nos valores. Tudo pode ser combinado no contato",
    },
    {
      title: "Tem mais alguma ideia de pergunta?",
      text: "Não, to sem criatividade e vou só encher linguiça aqui pra testar mais um cartãozinho daquele",
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
