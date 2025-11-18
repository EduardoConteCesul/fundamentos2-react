import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Container, Content, HeaderContainer, InputContainer, Tabs } from './styles';
import { ButtonIcon } from '@components/ButtonIcon';
import { Tab } from '@components/Tab';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { Tag } from '@components/Tag';
import { MemberCard } from '@components/MemberCard';
import { ListEmpty } from '@components/ListEmpty';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

type RouteParams = {
  team: string;
}

export function AddMembers() {

  const [tab, setTab] = useState('Titular');
  const [members, setMembers] = useState(["Eduardo", "Conte"]);

  const route = useRoute();
  const { team } = route.params as RouteParams;

  const insets = useSafeAreaInsets();

  return (
    <Container style={{ paddingBottom: insets.bottom }}>
      <HeaderContainer style={{ paddingTop: insets.top }}>
        <Header showBackButton/>

        <Highlight
          title={team}
          subtitle='Adicione os titulares e reservas'
        />
      </HeaderContainer>

      <Content>

        <InputContainer>
          <Input
            placeholder='Adicione um membro'
            style={{
              borderBottomRightRadius: 0,  
              borderTopRightRadius: 0
            }}
          />

          <ButtonIcon
            icon='add-circle-outline'
            borderRadius='RIGHT'
          />
        </InputContainer>

        <Tabs>
          <FlatList
            data={['Titular', 'Reservas']}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Tab 
                title={item}
                isActive={item == tab}
                onPress={() => setTab(item)}
              />
            )}
            horizontal
          />
          <Tag text={0} />
        </Tabs>

          <FlatList
            data={members}
            keyExtractor={item => item}
            renderItem={( item ) => (
              <MemberCard name={item.item} onRemove={() => console.log()} />
            )}
            ListEmptyComponent={() => (
              <ListEmpty message='Não ha membros adicionados' />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[{ paddingBottom: 100 }, members.length === 0 && { flex: 1 }]}
          />

        <Button
          type='SECONDARY'
          title='Deletar equipe'
        />
      </Content>
    </Container>
  );
}