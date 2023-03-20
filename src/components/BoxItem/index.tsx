import * as S from './styles'

export type BoxItemProps = {
  title: string
  text: string
}

const BoxItem = ({ text, title}: BoxItemProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Text>{text}</S.Text>
  </S.Wrapper>
)

export default BoxItem
