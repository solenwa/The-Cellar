import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MaCave from './components/MaCave';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <main>
        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/macave" element={<MaCave />} />
          </Routes>
        </Container>
      </main>
      <footer>
        <div className="text-center"> All rights reserved</div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
