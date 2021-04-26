import { Row } from 'react-bootstrap';
import { useContext } from 'react';
import { GameContext } from '../../../contexts/GameContext';
import AdminGameItem from './AdminGameItem';

const AdminGameList = () => {

    const { games } = useContext(GameContext);
    const [ gamesState, setGames ] = games;

        const generateGames = () => {
            return gamesState.map((game, i) => { 
                return <AdminGameItem key={ i } { ...game }></AdminGameItem>
             })
        }
    return (
        <section>
           <Row> 
               { generateGames() } 
           </Row>
        </section>
    )
}

export default AdminGameList; 