import axios from 'axios';
import { Col, Card, Button } from 'react-bootstrap';
import '../../../styles/DeleteGame.css'

const GameDelete = ({ id, name, genre, price, image}) => {

    const deleteGame = () => {
        const url = "https://localhost:5001/AdminGames";
        axios.delete(`${url}/${id}`);
}
    return (
        <Col xs={7} sm={5} md={5} lg={3} xl={3}>
        <Card className="dlt-game-card">
        <Card.Img className="dlt-game-img"
       src={(`https://localhost:5001/images/${image}`)}></Card.Img>
        <Card.Title className="dlt-game-ttl">{ name }</Card.Title>
        <Card.Text> Genre: { genre }</Card.Text>
        <Card.Text> (id : { id }) </Card.Text> 
        <Button variant="danger" id ="dltconfirm" onClick={ deleteGame } >Delete</Button>
        <Card.Body>
        </Card.Body>
        </Card>
        </Col>

    )
}

export default GameDelete;