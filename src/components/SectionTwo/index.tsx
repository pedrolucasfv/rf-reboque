import BoxItem from "../BoxItem";
import * as S from "./styles";

const SectionTwo = () => {
  const boxItem = [
    { title: "PERGUNTA DOIDA", text: "Aqui vai uma respoosta top" },
  ];
  return (
    <S.Wrapper id="sectionTwo">
      <S.HeadingContent>
        <S.Heading>Perguntas Frequentes</S.Heading>
      </S.HeadingContent>
      <S.Box>
        {boxItem.map(({ title, text }, index) => (
          <BoxItem title={title} text={text} key={index} />
        ))}
      </S.Box>
    </S.Wrapper>
  );
};
export default SectionTwo;
