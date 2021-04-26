import HomeCarousel from '../components/homepage/HomeCarousel';
import {Container, Row, Col} from 'react-bootstrap';
import HeroArea from '../components/homepage/HeroArea';

//intended home or ladning page. Gets components from the Homepage-folder.
const Homepage = () => {
    return (
      <div id="home-pg-container">
        <Row>
          <Col xs={ 12 }>
            <HeroArea/>
          </Col>
        </Row>
        <Row>
          <HomeCarousel/>
        </Row>
      </div>
    );
  }
  
  export default Homepage;