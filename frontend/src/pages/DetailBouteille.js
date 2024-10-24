import React from 'react';
import Rating from '../components/Rating';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

function DetailBouteille() {
  return (
    <Container>
      <Row>
        <Col xs={5}>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://res.cloudinary.com/dkadjaj7k/image/upload/v1729778831/TheCellar/DomaineDeLaSolitude_Barberini_2017_ymlol5.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Domaine de la Solitude</Card.Title>
              <Card.Text>Barberini</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <h2 className="display-4">Barberini - 2017</h2>
          <Container>
            <Row>
              <Rating rating={4}></Rating>
            </Row>
            <Row className="text-center">
              <Col>
                <Card style={({ alignItems: 'center' }, { margin: 0 })}>
                  <h3>Quantité</h3>
                  <p>1</p>
                </Card>
              </Col>
              <Col>
                <Card style={({ alignItems: 'center' }, { margin: 0 })}>
                  <h3>Prix d'achat</h3>
                  <p>N/A</p>
                </Card>
              </Col>
              <Col>
                <Card style={({ alignItems: 'center' }, { margin: 0 })}>
                  <h3>Pays</h3>
                  <p>France</p>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="border-0">
                  <h3>Appelation</h3>
                  <p>Châteauneuf-du-Pape</p>
                </Card>
              </Col>
              <Col>
                <Card className="border-0">
                  <h3>Région</h3>
                  <p>Rhône</p>
                </Card>
              </Col>
              <Col>
                <Card className="border-0">
                  <h3>Couleur</h3>
                  <p>Rouge</p>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="border-0">
                  <h3>Cépages</h3>
                  <p>Grenache, Mourvèdre, Syrah</p>
                </Card>
                <Col>
                  <Card className="border-0">
                    <h3>Notes</h3>
                    <p></p>
                  </Card>
                </Col>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailBouteille;
