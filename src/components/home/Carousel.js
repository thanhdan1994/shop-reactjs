import React from 'react';
import { Carousel } from 'react-bootstrap'

function CarouselHome() {
    return (
        <Carousel>
            <Carousel.Item>
                {/* <img
                    className="d-block w-100"
                    src="http://lorempixel.com/980/400"
                    alt="First slide"
                /> */}
                <picture>
                    <source media="(min-width: 1000px)" srcSet="http://lorempixel.com/980/300" />
                    <source media="(min-width: 700px)" srcSet="http://lorempixel.com/700/300" />
                    <img src="http://lorempixel.com/980/400" alt="Flowers" className="d-block w-100"/>
                </picture>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <picture>
                    <source media="(min-width: 992px)" srcSet="http://lorempixel.com/980/400" />
                    <source media="(min-width: 600px)" srcSet="http://lorempixel.com/700/300" />
                    <img src="http://lorempixel.com/500/300" alt="Flowers" className="d-block w-100"/>
                </picture>

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <picture>
                    <source media="(min-width: 1000px)" srcSet="http://lorempixel.com/980/400" />
                    <source media="(min-width: 700px)" srcSet="http://lorempixel.com/700/300" />
                    <img src="http://lorempixel.com/980/400" alt="Flowers" className="d-block w-100"/>
                </picture>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default CarouselHome