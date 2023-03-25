import BoxItem from "../BoxItem";
import { Container } from "../Container";
import { useState } from "react";
import * as S from "./styles";
import MediaMatch from "../MediaMatch";
import Image from "next/image";

const SectionThree = () => {
  const alt = [
    "foto do caminhão rebocando dois carros juntos",
    "foto do caminhão rebocando um outro caminhão com a equipe RF reboque ao lado",
    "foto do caminhão rebocando uma picape",
    "foto do caminhão rebocando um carro clássico vermelho",
    "foto do caminhão rebocando um carro clássico vermelho no ângulo da frente",
    "foto de um bebêzinho dentro do caminhão reboque",
    "foto do caminhão rebocando um outro caminhão guincho",
    "foto do caminhão rebocando um outro caminhão guincho no ângulo da frente",
    "foto do caminhão rebocando um fusca com uma carretinha",
    "foto do caminhão rebocando um outro caminhão",
    "foto do caminhão rebocando dois carros juntos",
    "foto do caminhão rebocando um carro rebaixado",
  ];
  const [imageNumber, setImageNumber] = useState(0);

  const handleImage = () => {
    if (imageNumber >= 12) setImageNumber(0);
    else setImageNumber((imageNumber) => imageNumber + 1);
  };

  return (
    <S.Wrapper id="sectionThree">
      <S.HeadingContent>
        <S.Heading>Galeria</S.Heading>
      </S.HeadingContent>
      <MediaMatch lessThan="medium">
        <S.BoxMobile>
          <S.ImageWrapper>
            <Image
              src={`/img/reboque-${imageNumber}.jpeg`}
              alt={alt[imageNumber]}
              layout="fill"
              objectFit="cover"
            />
          </S.ImageWrapper>
        </S.BoxMobile>
        <S.Button onClick={() => handleImage()}>Passar foto</S.Button>
      </MediaMatch>
      <MediaMatch greaterThan="medium">
        <S.Box>
          {alt.map((item, index) => (
            <S.ImageWrapper key={index}>
              <Image
                src={`/img/reboque-${index}.jpeg`}
                alt={item}
                layout="fill"
                objectFit="cover"
              />
            </S.ImageWrapper>
          ))}
        </S.Box>
      </MediaMatch>
    </S.Wrapper>
  );
};
export default SectionThree;
