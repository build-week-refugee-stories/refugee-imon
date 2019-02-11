import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from '../Nav/Nav'
import CarouselSlides from './CarouselSlides';

function Home() {

    return (
        <div>
            <Nav />
            <CarouselSlides />
        </div>
    )
}

export default Home;