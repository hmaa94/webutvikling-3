import { Row, Col, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import {CharacterProvider} from '../contexts/CharacterContext';
import CreateCharacter from '../components/admin/admChars/CreateCharacter';
import CharacterUpdate from '../components/admin/admChars/CharacterUpdate';
import DeleteCharacter from '../components/admin/admChars/DeleteCharacter';
import CharacterList from '../components/characters/CharacterList';
import AdminCharacterList from '../components/admin/admChars/AdminCharacterList';

const CharacterAdminView = () => {

    let { url, path } = useRouteMatch();

    // nests the three different admin components for characters
    //could not use Navbar for the Nav-Link elements: forced them to to either far left or right.
    return (
        <BrowserRouter> 
        <CharacterProvider>  
        <Row>
            <Col>    
            <section>
                <h2>Characters</h2>
            </section>
                    <div>
                    <Nav.Link as={ Link } className="edit-sct" to={`${url}/createchar`}>Upload</Nav.Link>
                    <Nav.Link as={ Link } className="edit-sct" to={`${url}/updatechar`}>Update</Nav.Link>
                    <Nav.Link as={ Link } className="edit-sct" to={`${url}/deletechar`}>Delete</Nav.Link>
                   </div>
                <Switch>
                <Route path={`${path}/createchar`} >
                <Row>  
                <Col xs={3}>
                <CreateCharacter></CreateCharacter>
                </Col>
                 <Col xs={9}>
                <CharacterList></CharacterList>
                </Col>
                </Row>
                </Route>
                <section>

              <Route path={`${path}/updatechar`} >
                <Row>  
                <Col xs={3}>
                <CharacterUpdate></CharacterUpdate>
                </Col>
                 <Col xs={9}>
                <AdminCharacterList></AdminCharacterList>
                </Col>
                </Row>
                </Route>
           
                
                <Route path={`${path}/deletechar`} >
                <DeleteCharacter></DeleteCharacter>
                </Route>

            </section>
            </Switch>
         
            </Col>
            </Row>

        </CharacterProvider>
        </BrowserRouter>
    )
}

export default CharacterAdminView;