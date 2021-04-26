import { Col, Card } from 'react-bootstrap';
import React from 'react';
import '../../styles/GameCards.css';

const GameItem = ({ id, name, genre, price, image}) => {

    return (
        <Col xs={12} sm={6} md={6} lg={4} xl={4}>

        <Card bg="light" bsPrefix='card' className="game-card">
        <Card.Img bsPrefix string variant="top" className="game-card-img"
       src={(`https://localhost:5001/images/${image}`)}></Card.Img>
        <Card.Title className="game-cards-title">{ name }</Card.Title>
        <Card.Body>
        <Card.Text> Genre: { genre }</Card.Text>
        <Card.Text>price: { price }</Card.Text>
        </Card.Body>
        </Card>

        </Col>
       
    )
}

export default GameItem;