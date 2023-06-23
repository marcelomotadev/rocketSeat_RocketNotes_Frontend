import { Link } from 'react-router-dom';

import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Header } from '../../components/header';
import { Section } from '../../components/section';
import { Textarea } from '../../components/textArea';
import { NoteItem } from '../../components/noteItem';

import { Container, Form } from './styles';

export function New() {
  return (
      <Container>
        <Header></Header>

        <main>
          <Form>
            <header>
              <h1>Criar nota</h1>
              <Link to="/">Voltar</Link>
            </header>

            <Input placeholder='Título'></Input>
            <Textarea placeholder="Observações" />

            <Section title='Links Úteis'>
              <NoteItem value='https://rocketseat.com.br' />
              <NoteItem value='' isNew placeholder='Novo Link' />
            </Section>

            <Section title='Marcadores'>
              <div className='tags'>
                <NoteItem value='react'></NoteItem>
                <NoteItem isNew placeholder='Nova Tag'></NoteItem>
              </div>
            </Section>

            <Button title='Salvar'></Button>

          </Form>
        </main>
      </Container>
    )
}