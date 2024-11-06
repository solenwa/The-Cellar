import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import { useNavigate } from 'react-router-dom';

function AjouterUneBouteille() {
  const navigate = useNavigate();

  const [cuvee, setCuvee] = useState('');
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
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    const payload = {
      cuvee,
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
      <h1>Ajouter une Bouteille à ma Cave</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formCuvee">
          <Form.Label>Cuvée</Form.Label>
          <Form.Control type="text" placeholder="Cuvée" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDomaine">
          <Form.Label>Domaine</Form.Label>
          <Form.Control type="text" placeholder="Domaine" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMillesime">
          <Form.Label>Millésime</Form.Label>
          <Form.Control type="text" placeholder="Millésime" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formQuantite">
          <Form.Label>Quantité</Form.Label>
          <Form.Control
            type="number"
            placeholder="Quantité"
            required
            defaultValue="1"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPays">
          <Form.Label>Pays</Form.Label>
          <Form.Control type="text" placeholder="Pays" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formRegion">
          <Form.Label>Région</Form.Label>
          <Form.Control type="text" placeholder="Région" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAppellation">
          <Form.Label>Appellation</Form.Label>
          <Form.Control type="text" placeholder="Appellation" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCouleur">
          <Form.Label>Type</Form.Label>
          <Form.Select>
            <option>Rouge</option>
            <option>Blanc</option>
            <option>Rosé</option>
            <option>Orange</option>
            <option>Effervescent</option>
            <option>Vin Doux Naturel</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTaille">
          <Form.Label>Taille</Form.Label>
          <div key={'inline-radio'} className="mb-3">
            <Form.Check
              inline
              id="inline-radio1"
              type="radio"
              label="standard"
              name="taille"
            />
            <Form.Check
              inline
              id="inline-radio2"
              type="radio"
              label="magnum"
              name="taille"
            />
          </div>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AjouterUneBouteille;
