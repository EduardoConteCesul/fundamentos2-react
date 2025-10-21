import { Text, TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
}

export function TeamCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name="groups" size={32}/>
      
      <Text>{title}</Text>
    </Container>
  )
}