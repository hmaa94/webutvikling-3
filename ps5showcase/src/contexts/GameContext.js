import React from 'react';
import { useEffect, useState, createContext } from 'react';
import axios from 'axios';


//Context of game get-requests to pass down to other components

export const GameContext = createContext();

// Exports provider for games to components that a dependency for it
export const GameProvider = ( props ) => {

//dummydata in case API don't run, and to be placeholders for response data from .get

const [game, setGame ] = useState({
    id: "111",
    name: "dummygame",
    genre: "adventure",
    price: 550,
    image: "FFXVI.gif"
});

const [ games, setGames ] = useState( 
    [ { id: "999", 
        name: "Dummygames", 
        genre: "Adventure",
        price: 500,  
        image: "FFXVI.gif"
     }
    ]);

// axios get to pull props from collection. the data from collection is set as the same properties in dummy data

useEffect(() => {
    const url = "https://localhost:5001/games";
    console.log(url);
    axios.get(url)
    .then( response => {
        setGames (response.data);
        setGame (response.data);
    })
}, [])
    return (
        //returns provider, which can be used to pass props to nested components.
    <GameContext.Provider value={{ games: [ games, setGames], game: [ game, setGame] }}>
        {props.children}
    </GameContext.Provider>
    )
}
