import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'cloudinary-react';

function Home() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image
          cloudName="dkadjaj7k"
          publicId="TheCellar/PhilippeDeSorbon_Vendanges"
          text="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          cloudName="dkadjaj7k"
          publicId="TheCellar/PhilippeDeSorbon_Vendanges"
          text="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          cloudName="dkadjaj7k"
          publicId="TheCellar/PhilippeDeSorbon_Vendanges"
          text="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
