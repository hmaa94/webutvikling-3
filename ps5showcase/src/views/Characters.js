import {CharacterProvider}  from '../contexts/CharacterContext';
import CharacterList from '../components/characters/CharacterList';
import {Container, Col, Row} from 'react-bootstrap';

const Characters = () => {
    return (
        
        <Container>
            <CharacterProvider>       
                <CharacterList></CharacterList>
            </CharacterProvider>
        </Container>
    )
}

export default Characters;