import styled, { css } from "styled-components";
import theme from "../../styles/theme";

export const Wrapper = styled.main`
  ${({ color }) => css`
    background: linear-gradient(
      to top left,
      #e3e3e3,
      #dedede,
      #e5e5e5,
      #ececec,
      #f5f5f5
    );
    color: #282828;
    padding: 2rem 1rem;
    border: 0.4rem solid ${theme.colors.secondary};
    width: 35rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
  `}
`;

export const Title = styled.h2`
  padding-left: ${theme.spacings.xxsmall};
  border-left: ${theme.spacings.xxsmall} solid ${theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${theme.colors.darkGray};
  margin-left: 2rem;
`;

export const Text = styled.h4`
  font-size: 1.5rem;
  font-weight: 550;
  margin: 0rem 1rem;

`;
