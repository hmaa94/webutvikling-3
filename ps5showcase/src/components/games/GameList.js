import { Row, Col, FormControl } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { GameContext } from '../../contexts/GameContext';
import GameItem from './GameItem';
import '../../styles/Searchbox.css';

const GameList = ({}) => {

    //context to use GET http-request 
    const { games } = useContext(GameContext);
    const [ gamesState, setGames ] = games;

    const [ searching, setSearching] = useState("");
    const [ searchValue, setSearchValue] = useState("");

    //function to set search. search value of input checks for target values of name props
    const handleChange = (e) => {
        setSearchValue(e.target.value);
        setSearching(true);

        //If the value in the input field is higher than 0 characters, should look for corresponding string in .name prop 
        if(searchValue.length == 0) {
            setSearching(false);
        }
    }
        const generateGames = () => {
            return gamesState.map((game, i) => { 

                if(searching) {
                    //includes the corresponding string values that matches the search input
                    if (game.name.toLowerCase().includes(searchValue.toLowerCase())) {
                        return <GameItem key={ i } { ...game }></GameItem>
                    }
                } 
                //if no search is active, whole list is output as is
                    else {
                        return <GameItem key={ i } { ...game }></GameItem>
                    }               
            })
        }
    return (
            //output for gamelist with and without search depending on if input value is higher than 0
            <section>
            <section id="searcharea">
            <h1 id="game-headline">Games</h1>
            <FormControl id="searchbox" type="search" placeholder="search up games" onChange={handleChange}/>
            </section> 
            <Row> 
                { generateGames() } 
            </Row>
            </section>
    )
}

export default GameList; 