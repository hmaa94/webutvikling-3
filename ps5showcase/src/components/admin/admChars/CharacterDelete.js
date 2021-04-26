import axios from 'axios';
import { Col, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const CharacterDelete = ({ id, name, age, description, franchise, taglines= [], image}) => {

    const deleteCharacter = () => {
        // HTTP request to delete element by id from the controller set
        const url = "https://localhost:5001/AdminCharacters";
        axios.delete(`${url}/${id}`);
}

    return (
        //returns card with delete function. Clicking button (onClick) activates the deleteCharacter function
        <Col xs={9} sm={6} md={5} lg={4} xl={4}>
        <Card bg="light" bsPrefix='card' className="dlt-char-card">
        <Card.Img bsPrefix string variant="top" className="dlt-char-img"
        src={(`https://localhost:5001/images/${image}`)}></Card.Img>
        <Card.Title className="dlt-char-title">{ name }</Card.Title>
        <Card.Body>
        <Card.Text> age: { age }</Card.Text>
        <Card.Text> description: { description }</Card.Text>
        <Card.Text> Game franchise: { franchise }</Card.Text>
        <ListGroupItem>Taglines:</ListGroupItem>
        <ListGroup className="lgtagline">
        { taglines.map(tagline => (
        <ListGroupItem className="characters">{tagline}</ListGroupItem>
        )) }  
        </ListGroup>
        <Button variant="danger" id ="dltconfirm" onClick={ deleteCharacter } >Delete</Button>
        </Card.Body>
        </Card>
        </Col>

    )
}

export default CharacterDelete;