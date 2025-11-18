import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Content, HeaderContainer } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function NewTeam() {

  const navigation = useNavigation();

  function handleNavigationToNewTeam(){
    navigation.navigate('addMembers', { team: 'New Team' });
  }

  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton />

        <Highlight
          title="Nova Equipe"
          subtitle="Crie uma equipe e adicione membros"
        />
      </HeaderContainer>

      <Content>

        <Input placeholder="Nome da equipe"/>

        <Button
          title="Criar equipe"
          onPress={handleNavigationToNewTeam}
        />
      </Content>      
    </Container>
  )
}
