import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

function MaCave() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src="https://res.cloudinary.com/dkadjaj7k/image/upload/v1729778831/TheCellar/DomaineDeLaSolitude_Barberini_2017_ymlol5.jpg"
              />
              <Card.Body>
                <Card.Title>
                  Domaine de la Solitude <small>Barberini</small>
                </Card.Title>
                <Card.Text>
                  Châteauneuf-du-Pape - Rhône, France <br></br>
                  Cépages: Grenache, Mourvèdre, Syrah
                </Card.Text>
                <Card.Text>2017 - 75cl</Card.Text>
                <Card.Text>Stock: 1</Card.Text>
                <Card.Text>34€</Card.Text>
                <Button variant="primary">Modifier</Button>
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
                  Domaine de la Solitude <small>Barberini</small>
                </Card.Title>
                <Card.Text>
                  Châteauneuf-du-Pape - Rhône, France <br></br>
                  Cépages: Grenache, Mourvèdre, Syrah
                </Card.Text>
                <Card.Text>2017 - 75cl</Card.Text>
                <Card.Text>Stock: 1</Card.Text>
                <Card.Text>34€</Card.Text>
                <Button variant="primary">Modifier</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MaCave;
