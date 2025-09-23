import logoImg from "@assets/Logo.png";
import { Image, Text } from "react-native";
import * as S from "./styles";

export function Groups() {
  return (
    <S.Container>
      <Text>Groups</Text>
      <Image source={logoImg} />
    </S.Container>
  )
}
