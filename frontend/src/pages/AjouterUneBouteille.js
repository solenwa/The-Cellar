import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import { useNavigate } from 'react-router-dom';

function AjouterUneBouteille() {
  const navigate = useNavigate();

  const [appellation, setAppellation] = useState('');
  const [couleur, setCouleur] = useState('');
  const [domaine, setDomaine] = useState('');
  const [millesime, setMillesime] = useState('');
  const [pays, setPays] = useState('');
  const [quantite, setQuantite] = useState(0);
  const [region, setRegion] = useState('');
  const [taille, setTaille] = useState('');
  const [cepages, setCepages] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      appellation,
      couleur,
      domaine,
      millesime,
      pays,
      quantite,
      region,
      taille,
      cepages,
    };
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (response.status === 200) {
        const nouvelleBouteille = await response.json();
        navigate(`/macave/${nouvelleBouteille._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {' '}
      <h1>Ajouter une Bouteille à ma cave</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AjouterUneBouteille;
