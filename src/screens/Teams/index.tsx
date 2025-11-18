import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container, Content, HeaderContainer } from "./styles";
import { TeamCard } from "@components/TeamCard";
import { FlatList } from "react-native";
import { useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function Teams() {

  const [teams, setTeams] = useState(['Equipe 1']);

  const navigation = useNavigation();
  
    function handleNavigationToNewTeam(){
      navigation.navigate('newTeam');
    }

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
        <FlatList
          data={teams}
          keyExtractor={item => item}
          renderItem={({ item }) => <TeamCard title={item} />}
          ListEmptyComponent={() => <ListEmpty message="Começe criando uma equipe!" />}
          contentContainerStyle={teams.length == 0 && { flex: 1}}
        />

        <Button
          title="Criar uma nova equipe"
          onPress={handleNavigationToNewTeam}
        />
      </Content>      
    </Container>
  )
}
