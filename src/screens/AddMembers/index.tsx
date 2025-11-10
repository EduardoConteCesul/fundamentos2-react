import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { Container, Content, HeaderContainer, InputContainer } from './styles';
import { ButtonIcon } from '@components/ButtonIcon';


export function AddMembers() {
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
          />

          <ButtonIcon />
        </InputContainer>

        <Button
          type='SECONDARY'
          title='Deletar equipe'
        />
      </Content>
    </Container>
  );
}