import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStylesProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStylesProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  background-color: ${({ theme, type }) => type == 'PRIMARY' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_DARK};
  border-radius: 8px;

  justify-content: center;
  align-items: center;

  padding: 18px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;