import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeroArea.css';

//hero area with linked buttons to Game-list and character-list.
const HeroArea = () => {
    return (
        <article id="hero-area">
            <h1>PLAYSTATION 5</h1>
            <p>a very nice console</p> 
            <Button className="btns">
                < Nav.Link as={ Link } to="/Games">GAMES</Nav.Link>
            </Button>
                    
            <Button className="btns">
                 <Nav.Link as={ Link } to="/Characters">MASCOTS</Nav.Link>
            </Button>
        </article>
    )
}

export default HeroArea;