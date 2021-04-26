import { GameContext } from '../../../contexts/GameContext';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Form, Container, Row, Col, Button, Card} from 'react-bootstrap';
import '../../../styles/GameUpdate.css';

//creates gets and sets, applies context to game/games. 
const GameUpdate = () => {
    const { game, games } = useContext( GameContext );
    const [ gameState, setGame ] = game;
    const [ gamesState, setGames ] = games;
    const [file, setFile ] = useState({});

    //creates a handle for image upload
    const uploadNewImg = (e) => {
        switch (e.target.id){
            case "file":
                setFile(e.target.files[0]);
                break;
            default:
        }
    }
    
    const updateGame = () => {
        if(gameState.id){
            const url = "https://localhost:5001/AdminGames";

            let data = new FormData();
            data.append("file", file);
            console.log(file);
               
// sets the value-name from the image-file after it's targeted. This to assure that the name is saved to the image-prop, which is saved as a string. 
     gameState.image = file.name;
            //axios call for replacing new value of props into existing ones
            axios.put(`${url}/${gameState.id}`, gameState)
                .then( response => {
                    let indexOfGame = gamesState.findIndex( shO => shO.id = gameState.id );
                    gamesState[indexOfGame] = gameState;
                    setGames([...gamesState]);
            
            console.log(gameState);
            
            //uploads image file to replace old image.
            axios({
                method: "POST",
                url: "https://localhost:5001/ImageUpload/UploadImage",
                data: data,
                config: { headers: { "Content-Type": "multipart/form-data" } }   
            })  
            })            
        } console.log(updateGame);
    }
    return (
        //returns output for the update form      
        <Container className="upd-container">
        <Row className="upd-char-form">
        <Col>
        <Card id ="edit-card">
            <h3>Edit game</h3>
            <label>Name</label>
            <input id="inp-box"
                onChange={ (e) => setGame( { ...gameState, name: e.target.value } ) } 
                type="text" value={ gameState.name }></input>
            <input id="inp-box"
                onChange={ (e) => setGame( { ...gameState, genre: e.target.value } ) } 
                type="text" value={ gameState.genre }></input>
            <input id="inp-box"
                onChange={ (e) => setGame( { ...gameState, price: parseInt (e.target.value) } ) } 
                type="text" value={ gameState.price }></input>
           <input id ="file" onChange={ uploadNewImg } type="file" files= { file }/> 
           <Button variant="dark" id ="upd-submit" onClick={ updateGame } >submit</Button>
        </Card>
            </Col>
            </Row>
            </Container>
    )
}

export default GameUpdate;