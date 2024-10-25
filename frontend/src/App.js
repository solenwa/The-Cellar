import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Container from 'react-bootstrap/esm/Container';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import MaCave from './pages/MaCave';
import DetailBouteille from './pages/DetailBouteille';

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <header>
          <NavBar />
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/macave" element={<MaCave />} />
              <Route path="/macave/:id" element={<DetailBouteille />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center"> All rights reserved</div>
        </footer>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
