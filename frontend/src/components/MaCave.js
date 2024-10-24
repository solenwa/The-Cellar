import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';

function MaCave() {
  return (
    <div>
      <h1 className="display-3">Ma Cave</h1>
      <Container>
        <Row>
          <Col>
            <Link to="/macave/detailbouteille">
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/dkadjaj7k/image/upload/v1729778831/TheCellar/DomaineDeLaSolitude_Barberini_2017_ymlol5.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    Domaine de la Solitude <small>Barberini 2017</small>
                  </Card.Title>

                  <Card.Text>Grenache, Mourvèdre, Syrah</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dkadjaj7k/image/upload/v1729778831/TheCellar/DomaineDeLaSolitude_Barberini_2017_ymlol5.jpg"
              />
              <Card.Body>
                <Card.Title>
                  Domaine de la Solitude <small>Barberini 2017</small>
                </Card.Title>

                <Card.Text>Grenache, Mourvèdre, Syrah</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dkadjaj7k/image/upload/v1729778831/TheCellar/DomaineDeLaSolitude_Barberini_2017_ymlol5.jpg"
              />
              <Card.Body>
                <Card.Title>
                  Domaine de la Solitude <small>Barberini 2017</small>
                </Card.Title>

                <Card.Text>Grenache, Mourvèdre, Syrah</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MaCave;
