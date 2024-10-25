import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Product(props) {
  const { product } = props;
  return (
    <Link to={`/macave/${product._id}`}>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant="top"
          src={product.image.url}
          alt={`Photo du vin ${product.cuvee} du domaine ${product.domaine}`}
        />
        <Card.Body>
          <Card.Title>
            ${product.domaine}{' '}
            <small>
              ${product.cuvee} ${product.millesime}
            </small>
          </Card.Title>

          <Card.Text>Grenache, Mourvèdre, Syrah</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Product;
