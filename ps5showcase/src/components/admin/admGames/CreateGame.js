import '../../../styles/CreateGame.css';
import {Form, Button, Row, Col, Container} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


const CreateGame = () => {

    const [name, setName ] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(""); 
    const [file, setFile] = useState({});

        // Handler events with id's and switch-case. called upon with onClick for input fields
    const handleChange = (e) => {

        switch (e.target.id){
            case "name":
                setName(e.target.value);
                break;
            case "genre":
                setGenre(e.target.value);
                break;
            case "price":
                setPrice( parseInt(e.target.value));
                break;
            case "image":
                setImage(e.target.files[0].name);
                break;  
            case "file":
                setFile(e.target.files[0]);
                break;
            default:
        }
    }

    const createGame = () => {
 
        const url = "https://localhost:5001/AdminGames";
        const newGame = { name: name, genre: genre, price: price, image: file.name };
        
        let data = new FormData();
        data.append("file", file);

        console.log(file);

        //posts new game filled forms to the set url
        axios.post(url, newGame)
          .then(res => { console.log(res);
        
        console.log(newGame);

        //post for image upload.
        axios({
            method: "POST",
            url: "https://localhost:5001/ImageUpload/UploadImage",
            data: data,
            config: { headers: { "Content-Type": "multipart/form-data" } }   
        }) 
    })
}
    return (
        <Container className="create-container">
        <Row className="create-char-form">
        <Col>
            <Form className="create-form">
            <Form.Group>
            <Form.Label id="">Name</Form.Label>
            <Form.Control id="name" type="text" onChange={handleChange} placeholder="Enter game name"/>      
            </Form.Group>

            <Form.Group>
            <Form.Label>Genre</Form.Label>
            <Form.Control id="genre" onChange={ handleChange } type="text" value={ genre } placeholder="genre" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control id="price" onChange={ handleChange } type="text" value={ price } placeholder="price" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Image File</Form.Label>
            <Form.Control id="file" onChange={ handleChange } type="file" files={ file } placeholder="File" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Image File</Form.Label>
            <Form.Control id="image" onChange={ handleChange } type="text" value={ file.name } placeholder="File name" />
            </Form.Group>

            <Button variant="danger" id ="submit" onClick={ createGame } >submit</Button>
            </Form>
            </Col>
            </Row>
            </Container>
    )  
}


export default CreateGame;