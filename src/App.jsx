import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Atendimento from './pages/Atendimento';
import Servicos from './pages/Servicos';

export default function App() {
  return (
    <BrowserRouter basename="/idosos-digitais-pwa">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atendimento" element={<Atendimento />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </BrowserRouter>
  );
}