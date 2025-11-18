import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Content, HeaderContainer } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";

export function NewTeam() {

  const [team, setTeam] = useState('');

  const navigation = useNavigation();
  
  const insets = useSafeAreaInsets();

  function handleNavigationToNewTeam(){
    navigation.navigate('addMembers', { team: team });
  }

  return (
    <Container style={{ paddingBottom: insets.bottom }}>
      <HeaderContainer style={{ paddingTop: insets.top }}>
        <Header showBackButton />

        <Highlight
          title="Nova Equipe"
          subtitle="Crie uma equipe e adicione membros"
        />
      </HeaderContainer>

      <Content>

        <Input placeholder="Nome da equipe" onChangeText={setTeam}/>

        <Button
          title="Criar equipe"
          onPress={handleNavigationToNewTeam}
        />
      </Content>      
    </Container>
  )
}
