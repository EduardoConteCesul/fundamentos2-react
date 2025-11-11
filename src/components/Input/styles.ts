import styled, { css } from "styled-components/native";

export const Container = styled.TextInput`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_500};
    background-color: ${theme.COLORS.GRAY_100};
    border-color: ${theme.COLORS.GRAY_300};
  `}

  padding: 16px;
  border-radius: 8px;
  border-width: 1px;
`;