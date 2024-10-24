import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'cloudinary-react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div className="align-items-center">
      <div>
        <Carousel fade>
          <Carousel.Item>
            <Image
              cloudName="dkadjaj7k"
              publicId="TheCellar/PhilippeDeSorbon_Vendanges"
              text="First slide: a green vineyard in Champagne, France"
            />
            <Carousel.Caption>
              <h3>The Cellar's top 10 vineyards in Champagne, France</h3>
              <p>
                Planning a visit to France ? Find out more about these
                adventurous winemakers shaping the future of Champagne.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              cloudName="dkadjaj7k"
              publicId="TheCellar/Septima_Visit"
              text="Second slide: a woman showing the maceration tanks in Argentina"
            />
            <Carousel.Caption>
              <h3>A tour behind closed doors at Bodega Septima in Argentina</h3>
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
      </div>
      <div className="align-items-center">
        <h2 className="display-3">Featured Wines</h2>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/dkadjaj7k/image/upload/v1729777358/TheCellar/PhilippeDeSorbon_BlancDeBlanc.jpg"
                />
                <Card.Body>
                  <Card.Title>Philippe de Sorbon - Blanc de Blancs </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/dkadjaj7k/image/upload/v1729777358/TheCellar/PhilippeDeSorbon_BlancDeBlanc.jpg"
                />
                <Card.Body>
                  <Card.Title>Philippe de Sorbon - Blanc de Blancs </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/dkadjaj7k/image/upload/v1729777358/TheCellar/PhilippeDeSorbon_BlancDeBlanc.jpg"
                />
                <Card.Body>
                  <Card.Title>Philippe de Sorbon - Blanc de Blancs </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
