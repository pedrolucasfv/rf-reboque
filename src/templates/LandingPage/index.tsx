import Menu from "../../components/Menu";
import SectionOne from "../../components/SectionOne";
import * as S from "./styles";

const LandingPage = () => {
  return (
    <S.Wrapper>
      <S.Menu>
        <Menu />
      </S.Menu>
      <S.SectionOne>
        <SectionOne />
      </S.SectionOne>
      <S.Background />
    </S.Wrapper>
  );
};
export default LandingPage;
