import {Container, Row} from 'react-bootstrap';
import GameDelete from './GameDelete';
import { useContext } from 'react';
import { GameContext } from '../../../contexts/GameContext';


const DeleteGames = () => {

    const { games } = useContext(GameContext);
    const [ gamesState ] = games;

    const getGames = () => {
        return gamesState.map((game, i) => { 
            return <GameDelete key={ i } { ...game }>        
                    </GameDelete>
         })
    }
    return (
        <Container className="container">

            <Row>
            {getGames()}
            </Row>
        </Container>
    )
}

export default DeleteGames;