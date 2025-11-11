import { TouchableOpacityProps } from "react-native";
import { ButtonIconTypesProps, Container, Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypesProps;
}

export function ButtonIcon({icon, type = "PRIMARY",...rest}: Props) {
  return(
    <Container type={type} {...rest}>
      <Icon name={icon} />
    </Container>
  )
}