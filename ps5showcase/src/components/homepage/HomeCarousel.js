import './HomeCarousel.css'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


//Carousel from react-bootstrap. set with auto-timer of 5000(5sec)
const HomeCarousel = () => {
    return(
<section id="carousel">
<Carousel id="carousel" fade>
<Carousel.Item interval={5000}>
<img
    className="d-block w-100"
    src= {require('../../assets/images/Slide1.jpg').default}
    alt="Slide 1"
/>
<Carousel.Caption>
<h3>Sackboy: A Big Adventure</h3>
<p>Take Sackboy on an epic 3D platforming adventure with your friends.</p>
</Carousel.Caption>
</Carousel.Item>

<Carousel.Item interval={5000}>
<img
    className="d-block w-100"
    src= {require('../../assets/images/Slide2.jpg').default}
    alt="Slide 1"
/>
<Carousel.Caption>
<h3>Demon's Souls</h3>
<p>In his quest for power, the 12th King of Boletaria, King Allant channeled the ancient Soul Arts, awakening a demon from the dawn of time itself, The Old One.</p>
</Carousel.Caption>
</Carousel.Item>

<Carousel.Item interval={5000}>
<img
    className="d-block w-100"
    src= {require('../../assets/images/Slide3.png').default}
    alt="Slide 1"
/>
<Carousel.Caption>
<h3>Godfall</h3>
<p>Embark on adventure in a fantasy action RPG that utilizes high-impact third-person melee combat to engage players as they hunt for loot, don legendary armor sets and defeat vicious enemies.</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</section>
    )
}

export default HomeCarousel;