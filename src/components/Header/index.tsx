import logoImg from "@assets/Logo.png";
import { BackButton, BackIcon, Container, Logo } from "./styles";

type Props = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {
        showBackButton &&
        <BackButton>
          <BackIcon name="arrow-back-ios"/>
        </BackButton>
      }
      <Logo source={logoImg}></Logo>
    </Container>
  )
}