import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ color }) => css`
  background: linear-gradient(
      to top left,
      #282828,
      #212121,
      #1a1a1a,
      #131313,
      #0a0a0a
    );
    color: white; ;
    ${media.greaterThan('medium')`
    padding: 3rem 10rem;

    `}
    display: flex;
    flex-direction: column;
    ${media.lessThan('medium')`
    padding: 3rem 3rem;
    `}

    @media (min-width: 1500px) {
    padding: 0 29rem;
  }
  `}
`
export const HeadingContent = styled.div`
  margin-bottom: 3rem;
`

export const Heading = styled.h2`
  ${({ theme }) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    font-size: 3rem;
    &::after {
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      content: '';
      width: 4.8rem;
      border-bottom: 0.5rem solid ${theme.colors.secondary};
    }
  `}
`
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 10rem;
`
