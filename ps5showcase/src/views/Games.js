import {GameProvider}  from '../contexts/GameContext';
import GameList from '../components/games/GameList';
import {Container} from 'react-bootstrap';

const Games = () => {
    return (
        
        <Container>      
            <GameProvider>       
                <GameList></GameList>
            </GameProvider>
        </Container>
    )
}

export default Games;