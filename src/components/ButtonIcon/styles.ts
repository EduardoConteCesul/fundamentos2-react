import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export type ButtonIconTypesProps = 'PRIMARY' | 'SECONDARY';
export type ButtonIconSizeProps = 'MD' | 'SM';
export type ButtonIconBorderRadiusStyleProps = 'RIGHT' | 'FULL';

type Props = {
  type: ButtonIconTypesProps;
  size: ButtonIconSizeProps;
  borderRadius: ButtonIconBorderRadiusStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 54px;
  height: 54px;

  ${({ size }) => size == "SM" && css`
    width: 44px;
    height: 44px;
  `}

  border-radius: 8px;
  ${({ borderRadius }) => borderRadius == "RIGHT" && css`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px; 
  `}

  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) => type == "PRIMARY" ? theme.COLORS.GREEN_500 : theme.COLORS.RED};
  border-width: 1px;
  border-color: ${({ theme, type }) => type == "PRIMARY" ? theme.COLORS.GREEN_500 : theme.COLORS.RED};
`;

// Deve ser colocado dentro de () pois este componente não é nativo do react
// ai assim pode ser importado coisas diferentes
export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))``;