import { Text } from "react-native";
import { Container, Icon } from "./styles";

export function TeamCard() {
  return (
    <Container>
      <Icon name="groups" size={32}/>
      
      <Text>Equipe 1</Text>
    </Container>
  )
}