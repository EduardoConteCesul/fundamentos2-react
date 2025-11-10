import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  justify-content: center;
  align-items: cente;
  background-color: ${({ theme }) => theme.COLORS.GREEN_500};
  border-radius: 8px;
`;

// Deve ser colocado dentro de () pois este componente não é nativo do react
// ai assim pode ser importado coisas diferentes
export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,  
}))``;