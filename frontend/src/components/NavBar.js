import { React, useContext } from 'react';
import { Store } from '../Store';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const logoutHandler = () => {
    ctxDispatch({ type: 'USER_LOGOUT' });
    localStorage.removeItem('userInfo');
    window.location.href = '/login';
  };

  return (
    <Navbar expand="lg" className="me-auto w-100 justify-content-end">
      <Container>
        <Navbar.Brand href="/">The Cellar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {userInfo ? (
            <Nav className="me-auto">
              <Nav.Link href="/macave">Ma Cave</Nav.Link>
              <Nav.Link href="#link">Mes Dégustations</Nav.Link>
              <Nav.Link href="/ajouterunebouteille">Ajouter une bouteille</Nav.Link>
              <Nav.Link onClick={logoutHandler}>Déconnexion</Nav.Link>
            </Nav>
          ) : (
            <Nav className="me-auto">
              <Nav.Link href="/login">Se connecter</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
