import { CharacterContext } from '../../../contexts/CharacterContext';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import '../../../styles/CharacterUpdate.css'

//comments on GameUpdate. Pretty much the same
const CharacterUpdate = () => {
    const { character, characters } = useContext( CharacterContext );
    const [ characterState, setCharacter ] = character;
    const [ charactersState, setCharacters ] = characters;
    const [file, setFile ] = useState({});
    
    const uploadNewImg = (e) => {
        switch (e.target.id){
            case "file":
                setFile(e.target.files[0]);
                break;
            default:
        }
    }
    
    const updateCharacter = () => {
        if(characterState.id){
            const url = "https://localhost:5001/AdminCharacters";

            let data = new FormData();
            data.append("file", file);
            console.log(file);
               
            characterState.image = file.name;

            axios.put(`${url}/${characterState.id}`, characterState)
                .then( response => {
                    let indexOfCharacter = charactersState.findIndex( shO => shO.id = characterState.id );
                    charactersState[indexOfCharacter] = characterState;
                    setCharacters([...charactersState]);

            console.log(characterState);
            
            axios({
                method: "POST",
                url: "https://localhost:5001/ImageUpload/UploadImage",
                data: data,
                config: { headers: { "Content-Type": "multipart/form-data" } }   
            })  
            })            
        } console.log(updateCharacter);
    }
    return (
        <Container className="update-container">
        <Row className="upd-char-row">
        <Col>
        <Card id ="edit-card">
            <h3>Edit Character</h3>
            <label>Name</label>
            <input 
                onChange={ (e) => setCharacter( { ...characterState, name: e.target.value } ) } 
                type="text" value={ characterState.name }></input>
            <h3>Edit Character</h3>
            <label>Age</label>
            <input 
                onChange={ (e) => setCharacter( { ...characterState, age: parseInt (e.target.value) } ) } 
                type="text" value={ characterState.age }></input>
            <label>Description</label>
            <input 
                onChange={ (e) => setCharacter( { ...characterState, description: e.target.value } ) } 
                type="text" value={ characterState.description }></input>
  
            <label>franchise</label>
            <input 
                onChange={ (e) => setCharacter( { ...characterState, franchise: e.target.value } ) } 
                type="text" value={ characterState.franchise }></input>
            <label>taglines</label>
            <input 
                onChange={ (e) => setCharacter( { ...characterState, tagline: (e.target.value.split(',')) } ) } 
                type="text" value={ characterState.tagline }></input>  
              <label>Image File </label>
                
           <input id ="file" onChange={ uploadNewImg } type="file" files= { file }/>
           <Button variant="danger" id ="upd-submit" onClick={ updateCharacter } >submit</Button>
                </Card>
            </Col>
            </Row>
            </Container>
    )
}

export default CharacterUpdate;