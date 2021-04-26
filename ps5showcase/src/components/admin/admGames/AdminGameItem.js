import { Col, Card, Button } from 'react-bootstrap';
import { GameContext } from '../../../contexts/GameContext';
import { useContext } from 'react';
import '../../../styles/AdminGameCards.css';

//component to include the set-selection for update page
const AdminGameItem = ( { id, name, genre, price, image } ) => {

    const { game } = useContext( GameContext );
    const [ gameState, setGame ] = game;

    const setSelectedGame = () => {
        setGame({id: id, name: name, genre: genre, price: price, image: image});
    }
 
    return (
        <Col xs={12} sm={6} md={6} lg={4} xl={4}>
        <Card className="adm-char-card">
        <Card.Img className="adm-char-card-img"
        src={(`https://localhost:5001/images/${image}`)}></Card.Img>
        <Card.Title className="adm-char-cards-title">{ name }</Card.Title>
        <Card.Body>
        <Card.Text> Genre: { genre }</Card.Text>
        <Card.Text>price: { price }</Card.Text>
        <Card.Text>ID: { id } </Card.Text>
        <Button onClick={ setSelectedGame }>Edit game</Button>
    
        </Card.Body>
        </Card>
        </Col>
       
    ) 
}

export default AdminGameItem;