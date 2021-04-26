import { Col, Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import React from 'react';
import '../../styles/CharacterCards.css';

const CharacterItem = ({ id, name, age, description, franchise, taglines= [], image}) => {

    return (
        <Col>
        <Card bg="light" bsPrefix='card' className="char-card">
        <Card.Img bsPrefix string variant="top" className="char-card-img"
       src={(`https://localhost:5001/images/${image}`)}></Card.Img>
        <Card.Title className="char-cards-title">{ name }</Card.Title>
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
        </Card.Body>
        </Card>
        </Col>
    )
}

export default CharacterItem;