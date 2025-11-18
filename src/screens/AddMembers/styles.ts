import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const HeaderContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PURPLE_500};
  padding: 24px 0;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 24px 24px 0 24px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
`;

export const Tabs = styled.View`
  margin: 32px 0px;
  flex-direction: row;
  align-items: center;
`;