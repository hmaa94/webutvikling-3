import {Container, Button, Form, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import '../../../styles/CreateCharacter.css';

const CreateCharacter = () => {

    const [name, setName ] = useState("");
    const [age, setAge] = useState("");
    const [description, setDescription] = useState("");
    const [franchise, setFranchise] = useState("");
    const [taglines, setTaglines] = useState("");
    const [image, setImage] = useState(""); 
    const [file, setFile] = useState({});


    const handleChange = (e) => {

        switch (e.target.id){
            case "name":
                setName(e.target.value);
                break;
            case "age":
                setAge(parseInt(e.target.value));
                break;
            case "description":
                setDescription(e.target.value);
                break;
            case "franchise":
                setFranchise(e.target.value);
                break;
            case "taglines":
                setTaglines(e.target.value.split(','));
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

    const createCharacter = () => {
 
        const url = "https://localhost:5001/AdminCharacters";
        const newCharacter = {                          
            name: name, 
            age: age, 
            description: description, 
            franchise: franchise,
            taglines: taglines,
            image: file.name };
        
        let data = new FormData();
        data.append("file", file);

        console.log(file);

        axios.post(url, newCharacter)
          .then(res => { console.log(res);
        
        console.log(newCharacter);

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
                    <Form.Control id="name" type="text" onChange={handleChange} placeholder="Enter character name"/>      
                    </Form.Group>
        
                    <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control id="age" onChange={ handleChange } type="text" value={ age } placeholder="age" />
                    </Form.Group>
        
                    <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control id="description" onChange={ handleChange } type="text" value={ description } placeholder="description" />
                    </Form.Group>

                    <Form.Group>
                    <Form.Label>Franchise</Form.Label>
                    <Form.Control id="franchise" onChange={ handleChange } type="text" value={ description } placeholder="franchise" />
                    </Form.Group>

                    <Form.Group>
                    <Form.Label>Taglines</Form.Label>
                    <Form.Control id="franchise" onChange={ handleChange } type="text" value={ taglines } placeholder="taglines" />
                    </Form.Group> 

                    <Form.Group>
                    <Form.Label>Image File</Form.Label>
                    <Form.Control id="file" onChange={ handleChange } type="file" files={ file } placeholder="File" />
                    </Form.Group>
        
                    <Form.Group>
                    <Form.Label>Image File</Form.Label>
                    <Form.Control id="image" onChange={ handleChange } type="text" value={ file.name } placeholder="File name" />
                    </Form.Group>
        
                    <Button variant="danger" id ="submit" onClick={ createCharacter } >submit</Button>
                    </Form>
                    </Col>
                    </Row>
                    </Container>
    )  
}


export default CreateCharacter;