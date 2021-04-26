import './Footer.css';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Row>
                <Col xs={ 8 }>
                    <article>
                        <img id="logo-footer" src= {require('../../assets/images/logo-footer.svg').default}/>
                        <p>© 2020 Sony Interactive Entertainment Europe Limited. All content and all game titles, trade names and / or "trade dress", trademarks, illustrations and associated images are trademarks and / or copyrighted materials owned by their respective owners. All rights reserved.</p>
                    </article>
                </Col>
                <Col xs={ 2 }>
                    <ul>
                        <li>
                            <a href="#">Instagram</a>
                        </li>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">Twitter</a>
                        </li>
                    </ul>
                </Col>
                <Col xs={ 2 }>
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;