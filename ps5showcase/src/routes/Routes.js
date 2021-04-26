import './Routes.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainNavigation from '../components/Navigation/MainNavigation';
import Home from '../views/Home';
import Games from '../views/Games';
import Characters from '../views/Characters';
import Footer from '../components/Navigation/Footer';
import AdminLanding from '../views/AdminLanding';

//Navigation bar routing
const Routes = ( ) => {
    return (
        <Router>
        <MainNavigation></MainNavigation>
        <section>
            <main>
            <Switch>
            <Route exact path="/" component={ Home }></Route>
            <Route exact path="/games" component={ Games }></Route>
            <Route exact path="/characters" component={ Characters }></Route>
            <Route path="/adminlanding" component={ AdminLanding }></Route>
            </Switch>
            </main> 
        </section>
        <Footer className="Footer"></Footer>
        </Router>
    )
}

export default Routes;