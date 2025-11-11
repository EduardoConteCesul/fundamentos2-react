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


export function AddMembers() {

  const [tab, setTab] = useState('Titular');

  return (
    <Container>
      <HeaderContainer>
        <Header showBackButton/>

        <Highlight
          title='Equipes'
          subtitle='Preparem suas equipes'
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

        <Button
          type='SECONDARY'
          title='Deletar equipe'
        />
      </Content>
    </Container>
  );
}