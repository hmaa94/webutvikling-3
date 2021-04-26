import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import { CharacterContext } from '../../../contexts/CharacterContext';
import AdminCharacterItem from './AdminCharacterItem';

//lists the admin item for the edit cards
const AdminCharacterList = () => {

    const { characters } = useContext(CharacterContext);
    const [ charactersState, setCharacters ] = characters;

        const generateCharacters = () => {
            return charactersState.map((character, i) => { 
                return <AdminCharacterItem key={ i } { ...character }></AdminCharacterItem>
             })
        }
    return (
        <section>
           <Row> 
               { generateCharacters() } 
           </Row>
        </section>
    )
}

export default AdminCharacterList; 