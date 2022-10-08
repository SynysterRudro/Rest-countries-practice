import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './Home.css'

const Home = () => {
    return (
        <Carousel variant="dark" className='margin-top'>
            <Carousel.Item>
                <img
                    className="d-block w-100" height={'600px'}
                    src="https://thedrillmaster.org/wp-content/uploads/2019/07/Sheldon-Cooper-Fun-with-Flags-Big-Bang-Theory.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" height={'600px'}
                    src="https://ak.picdn.net/shutterstock/videos/3824255/thumb/1.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" height={'600px'}
                    src="https://c4.wallpaperflare.com/wallpaper/649/274/476/countries-flag-map-world-map-wallpaper-thumb.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;