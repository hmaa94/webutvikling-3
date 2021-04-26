import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import {GameProvider} from '../contexts/GameContext';
import CreateGame from '../components/admin/admGames/CreateGame';
import GameUpdate from '../components/admin/admGames/GameUpdate';
import DeleteGame from '../components/admin/admGames/DeleteGame';
import AdminGameList from '../components/admin/admGames/AdminGameList';
import GameList from '../components/games/GameList';
import './GameAdminView.css'

//further nesting to sort between Admin Page for Game Collection HTTP-requests vs. Character Collection ones

const GameAdminView = () => {

    let { url, path } = useRouteMatch();
    // nests the three different admin components for games
    //could not use Navbar for the Nav-Link elements: forced them to to either far left or right.
    return (
        <BrowserRouter> 
        <GameProvider>  
        <section>
                <h2>Games</h2>
            </section>
                    <div>
                    <Nav.Link as={ Link } className="edit-sct" to={`${url}/CreateGame`}>Upload</Nav.Link>
                    <Nav.Link as={ Link } className="edit-sct" to={`${url}/UpdateGame`}>Update</Nav.Link>
                    <Nav.Link as={ Link } className="edit-sct" to={`${url}/DeleteGame`}>Delete</Nav.Link>    
                    </div>
            <Switch>
             
                <Route path={`${path}/CreateGame`}>
                <Row>  
                <Col xs={3}>
                <CreateGame></CreateGame>
                </Col>
                 <Col xs={8 }>
                <GameList></GameList>
                </Col>
                </Row>
                </Route>

                <Route path={`${path}/UpdateGame`}>
                <Row>  
                <Col xs={3}>
                <GameUpdate></GameUpdate>
                </Col>
                 <Col xs={8}>
                <AdminGameList></AdminGameList>
                </Col>
                </Row>
                </Route>

                
                <Route path={`${path}/DeleteGame`} >
                <DeleteGame></DeleteGame>
                </Route>

            </Switch>

        </GameProvider>
        </BrowserRouter>
    )
}

export default GameAdminView;