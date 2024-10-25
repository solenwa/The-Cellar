import { React, useEffect, useReducer } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import Rating from '../components/Rating';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/esm/Spinner';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function DetailBouteille() {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/id/${id}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err });
      }
    };
    fetchData();
  }, [id]);

  return (
    <Container>
      <Helmet>
        <title>Détail</title>
      </Helmet>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Row>
          <Col xs={5}>
            <Card className="bg-dark text-white">
              <Card.Img
                src="https://res.cloudinary.com/dkadjaj7k/image/upload/v1729778831/TheCellar/DomaineDeLaSolitude_Barberini_2017_ymlol5.jpg"
                alt={`Photo du vin ${product.cuvee} du domaine ${product.domaine}`}
              />
              <Card.ImgOverlay>
                <Card.Title>{product.domaine}</Card.Title>
                <Card.Text>{product.cuvee}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <h2 className="display-4">
              {product.cuvee} - {product.millesime}
            </h2>
            <Container>
              <Row>
                <Rating rating={4}></Rating>
              </Row>
              <Row className="text-center">
                <Col>
                  <Card style={({ alignItems: 'center' }, { margin: 0 })}>
                    <h3>Quantité</h3>
                    <p>{product.quantite}</p>
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
                    <h3>{product.region}</h3>
                    <p>{product.pays}</p>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="border-0">
                    <h3>Appellation</h3>
                    <p>{product.appellation}</p>
                  </Card>
                </Col>
                <Col>
                  <Card className="border-0">
                    <h3>Région</h3>
                    <p>{product.region}</p>
                  </Card>
                </Col>
                <Col>
                  <Card className="border-0">
                    <h3>Couleur</h3>
                    <p>{product.couleur}</p>
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
      )}
    </Container>
  );
}

export default DetailBouteille;
