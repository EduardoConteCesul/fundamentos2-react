import logoImg from "@assets/Logo.png";
import { Image, Text } from "react-native";
import * as S from "./styles";
import { StatusBar } from "expo-status-bar";

export function Teams() {
  return (
    <S.Container>
      <Text>Groups</Text>
      <StatusBar style="auto"/>
      <Image source={logoImg} />
    </S.Container>
  )
}
