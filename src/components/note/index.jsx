import { Container } from './styles.js'
import { Tag } from '../tag'

export function Note({ data, onCLick, ...rest }){

  return (
    
      <Container {...rest}>
        <h1>{data.title}</h1>

        {
          data.tags &&
          <footer>
            {data.tags.map(tag => <Tag key={tag.id} title={tag.name} onCLick={onCLick} />
            )}
          </footer>
        
        }
      </Container>
    )
}