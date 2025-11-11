import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export type ButtonIconTypesProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonIconTypesProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 54px;
  height: 54px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) => type == "PRIMARY" ? theme.COLORS.GREEN_500 : theme.COLORS.RED};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme, type }) => type == "PRIMARY" ? theme.COLORS.GREEN_500 : theme.COLORS.RED};
`;

// Deve ser colocado dentro de () pois este componente não é nativo do react
// ai assim pode ser importado coisas diferentes
export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))``;