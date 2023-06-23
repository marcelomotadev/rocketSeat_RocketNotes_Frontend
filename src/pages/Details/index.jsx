import { Container, Links , Content} from './styles';

import { Header } from '../../components/header';
import { Button } from '../../components/button';
import { ButtonText } from '../../components/buttonText';
import { Section } from '../../components/section';
import { Tag } from '../../components/tag';

export function Details() {  
  
  return(
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title='Excluir nota'></ButtonText>

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eligendi ipsam odit minus, quis ut dolores quibusdam magni dolore dolor explicabo facere, ad a iure quisquam distinctio quas quaerat temporibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, iure doloremque reprehenderit aspernatur recusandae nesciunt veniam quos assumenda, voluptatibus molestiae magni? Ad pariatur optio porro minima perferendis recusandae officia voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur optio porro minima perferendis recusandae officia voluptatibus!
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
           <Tag title='express'></Tag>
           <Tag title="nodejs"></Tag>
          </Section>


          <Button title='Voltar'/>

        </Content>
      </main>
    </Container>
  )
}