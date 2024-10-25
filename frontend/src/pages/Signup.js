import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getError } from '../utils';

function Signup() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      const { data } = await axios.post('/api/users/signup', {
        name,
        lastName,
        email,
        password,
      });
      ctxDispatch({ type: 'USER_LOGIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container>
      <Helmet>
        <title>Inscription</title>
      </Helmet>
      <h1 className="display-3">Inscription</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Prénom</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter last name"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Adresse email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirmez le mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Inscription
        </Button>
        <div className="mb-3">
          Vous avez déjà un compte ?{' '}
          <Link to={`/login?redirect=${redirect}`}>Connexion</Link>
        </div>
      </Form>
    </Container>
  );
}

export default Signup;
