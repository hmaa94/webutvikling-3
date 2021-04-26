import { Col, Card, ListGroupItem, ListGroup, Button } from 'react-bootstrap';
import React from 'react';
import { useContext} from 'react';
import { CharacterContext } from '../../../contexts/CharacterContext';
import '../../../styles/AdminCharacterCards.css';


//component to include the set-selection for update page
const AdminCharacterItem = ( { id, name, age, description, franchise, taglines= [], image} ) => {

    //context to aquire props
    const { character } = useContext( CharacterContext );
    const [ characterState, setCharacter ] = character;

    const setSelectedCharacter = () => {
        setCharacter({
                        id: id, 
                        name: name, 
                        age: age, 
                        description: description, 
                        franchise: franchise,
                        taglines: taglines,
                        image: image });
    }
    return (
        <Col id="colfix" xs={9} sm={6} md={5} lg={4} xl={4}>

        <Card bg="light" bsPrefix='card' className="adm-char-card">
        <Card.Img bsPrefix string variant="top" className="adm-char-card-img"
       src={(`https://localhost:5001/images/${image}`)}></Card.Img>
        <Card.Title className="adm-char-cards-title">{ name }</Card.Title>
        <Card.Body>
        <Card.Text> age: { age }</Card.Text>
        <Card.Text> description: { description }</Card.Text>
        <Card.Text> Game franchise: { franchise }</Card.Text>
        <ListGroupItem>Taglines:</ListGroupItem>
        <ListGroup className="lgtagline">
                 { taglines.map(tagline => (
                     <ListGroupItem className="characters">{tagline}</ListGroupItem>
                 )) }     
        <Button onClick={ setSelectedCharacter }>Select</Button>
        </ListGroup>
        </Card.Body>
        </Card>
        </Col>
       
    )
}

export default AdminCharacterItem;