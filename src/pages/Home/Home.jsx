import {
  Container,
  Wrapper,
  Title,
  Text,
  ContentContainer,
} from './Home.styled';

import RegisterForm from 'components/RegisterForm/RegisterForm';
export default function Home() {
  return (
    <Container>
      <ContentContainer>
        <Wrapper>
          <Title>SAVE YOUR CONTACTS CONVENIENTLY</Title>
          <Text>
            Add and remove contacts in your book easily! Try it now in your
            personal phonebook application
          </Text>
        </Wrapper>
        <RegisterForm />
      </ContentContainer>
    </Container>
  );
}
