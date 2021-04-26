import React from 'react';
import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

//Context of character get-requests to pass down to other components
export const CharacterContext = createContext();

// Exports provider for games to components that a dependency for it
export const CharacterProvider = ( props ) => {

//dummydata in case API don't run, and to be placeholders for response data from .get

const [character, setCharacter ] = useState({
    id: "111",
    name: "dummychar",
    age: 20,
    description: "wigline",
    franchise: "final fantasy",
    Taglines: [ "my wig!", "My hair!"],
    image: "FFXVI.gif"
});

const [ characters, setCharacters ] = useState( 
    [ { 
        id: "111",
        name: "dummychar",
        age: 20,
        description: "wigline",
        franchise: "final fantasy",
        Taglines: [ "my wig!", "My hair!"],
        image: "FFXVI.gif"
     }
    ]);


//axios get to pull props from collection. the data from collection is set as the same properties in dummy data
useEffect(() => {
    const url = "https://localhost:5001/characters";
    console.log(url);
    axios.get(url)
    .then( response => {
        setCharacters (response.data);
        setCharacter (response.data);
    })
}, [])
    return (
        //returns provider, which can be used to pass props to nested components.
    <CharacterContext.Provider value={{ characters: [ characters, setCharacters], character: [ character, setCharacter] }}>
        {props.children}
    </CharacterContext.Provider>
    )
}
