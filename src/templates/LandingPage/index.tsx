import Footer from "../../components/Footer";
import SectionTwo from "../../components/SectionTwo";
import Menu from "../../components/Menu";
import SectionOne from "../../components/SectionOne";

import * as S from "./styles";
import SectionThree from "../../components/SectionThree";

const LandingPage = () => {
  return (
    <S.Wrapper>
      
      <S.Menu>
        <Menu />
      </S.Menu>
      <S.SectionOne>
        <SectionOne />
      </S.SectionOne>
      <S.SectionTwo>
      <SectionTwo />
      </S.SectionTwo>
      <S.SectionThree>
        <SectionThree />
      </S.SectionThree>
      <S.Footer>
      <Footer />
      </S.Footer>
      <S.Background />
    </S.Wrapper>
  );
};
export default LandingPage;
