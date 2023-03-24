import BoxItem from "../BoxItem";
import { Container } from "../Container";
import { useState } from "react";
import * as S from "./styles";
import MediaMatch from "../MediaMatch";

const SectionThree = () => {
  const [imageSelected, setImagemSelected] = useState({
    imageA: true,
    imageB: false,
    imageC: false,
    imageD: false,
  });
  const [imageNumber, setImageNumber] = useState(1);
  const handleImage = () => {
    if (imageNumber >= 12) setImageNumber(1);
    else setImageNumber((imageNumber) => imageNumber + 1);
  };
  return (
    <S.Wrapper id="sectionThree">
      <S.HeadingContent>
        <S.Heading>Galeria</S.Heading>
      </S.HeadingContent>
      <MediaMatch lessThan="medium">
        <S.BoxMobile>
          <S.Image src={`/img/reboque-${imageNumber}.jpeg`} />
        </S.BoxMobile>
        <S.Button onClick={() => handleImage()}>Passar foto</S.Button>
      </MediaMatch>
      <MediaMatch greaterThan="medium">
        <S.Box>
          <S.Image src="/img/reboque-1.jpeg" />
          <S.Image src="/img/reboque-2.jpeg" />
          <S.Image src="/img/reboque-3.jpeg" />
          <S.Image src="/img/reboque-4.jpeg" />
          <S.Image src="/img/reboque-5.jpeg" />
          <S.Image src="/img/reboque-6.jpeg" />
          <S.Image src="/img/reboque-7.jpeg" />
          <S.Image src="/img/reboque-8.jpeg" />
          <S.Image src="/img/reboque-9.jpeg" />
          <S.Image src="/img/reboque-10.jpeg" />
          <S.Image src="/img/reboque-11.jpeg" />
          <S.Image src="/img/reboque-12.jpeg" />
        </S.Box>
      </MediaMatch>
    </S.Wrapper>
  );
};
export default SectionThree;
