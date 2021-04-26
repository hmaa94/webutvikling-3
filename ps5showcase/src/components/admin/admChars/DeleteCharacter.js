import {Container, Row, Card} from 'react-bootstrap';
import { useContext } from 'react';
import CharacterDelete from './CharacterDelete';
import { CharacterContext} from '../../../contexts/CharacterContext';
import '../../../styles/DeleteCharacter.css';


const DeleteCharacters = () => {
        //context to get props
    const { characters } = useContext(CharacterContext);
    const [ charactersState ] = characters;
        //function that gets the character data 
    const getCharacters = () => {
        return charactersState.map((character, i) => {
            // wraps returned characters with CharacterDelete-function
            return <CharacterDelete key={ i } { ...character }>        
                    </CharacterDelete>
         })
    }
    return (
        <Container className="container">

            <h3>Delete character</h3>
            <p>number of characters: {characters.length}</p>
            <Row>
            {getCharacters()}
            </Row>
        </Container>
    )
}

export default DeleteCharacters;