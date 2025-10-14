import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container, Content, HeaderContainer } from "./styles";
import { TeamCard } from "@components/TeamCard";

export function Teams() {
  return (
    <Container>
      <HeaderContainer>
        <Header />

        <Highlight
          title="Nova Equipe"
          subtitle="Crie uma equipe e adicione membros"
        />
      </HeaderContainer>

      <Content>
        <TeamCard />
        <TeamCard />
      </Content>
    </Container>
  )
}
