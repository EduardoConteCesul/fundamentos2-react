import logoImg from "@assets/Logo.png";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {

  const navigation = useNavigation();
  
    function handleNavigationGoBack(){
      navigation.navigate('teams');
    }

  return (
    <Container>
      {
        showBackButton &&
        <BackButton onPress={handleNavigationGoBack}>
          <BackIcon name="arrow-back-ios"/>
        </BackButton>
      }
      <Logo source={logoImg}></Logo>
    </Container>
  )
}