import { Nav, Button  } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import './GameAdminView.css'
import GameAdminView from './GameAdminView';
import CharacterAdminview from './CharactersAdminView';

const AdminLanding = () => {

    //nested routing for admin page, landing.
    //could not use Navbar for the Nav-Link elements: forced them to to either far left or right.
    let { url, path } = useRouteMatch();
    return (
            <BrowserRouter className="adm-landing"> 
                <section>
                    <h2>Administrator Panel</h2>
                    
                    <section id="adminnav">
                    <Button id="btn-adm" variant="dark">
                        <Nav.Link id="navlinkbtn" as={ Link } to={`${url}/GameAdminView`}>Games Panel</Nav.Link>
                    </Button>
                    <Button id="btn-adm" variant="dark">
                        <Nav.Link id="navlinkbtn" as={ Link } to={`${url}/CharacterAdminView`}>Character Panel</Nav.Link>
                    </Button>
                    </section>

                    <Switch>
                    <section>
            
            <Route path={`${path}/GameAdminView`} >
            <GameAdminView></GameAdminView>
            </Route> 

            <Route path={`${path}/CharacterAdminView`} >
            <CharacterAdminview></CharacterAdminview>
            </Route>
            </section>
            </Switch>
            </section>
        </BrowserRouter>
    )
}

export default AdminLanding;