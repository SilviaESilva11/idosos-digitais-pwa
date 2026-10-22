import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Associação de Apoio à Terceira Idade de Taubaté</h1>
      <p style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
        Bem-vindo(a) ao portal Idosos Digitais.
      </p>
      <button 
        onClick={() => navigate('/atendimento')}
        style={{
          padding: '12px 24px',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          backgroundColor: '#0053a0',
          color: '#ffffff',
          border: '2px solid #000',
          borderRadius: '8px',
          cursor: 'pointer',
          marginTop: '1.5rem'
        }}
      >
        Iniciar Atendimento
      </button>
    </main>
  );
}

function Atendimento() {
  const navigate = useNavigate();
  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Atendimento ao Idoso</h2>
      <p style={{ fontSize: '1.1rem' }}>Preencha os dados abaixo para solicitar suporte presencial ou remoto.</p>
      <form onSubmit={(e) => { e.preventDefault(); navigate('/servicos'); }}>
        <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
          <label htmlFor="nome" style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Nome Completo:</label>
          <input id="nome" type="text" style={{ width: '100%', padding: '10px', fontSize: '1rem', borderRadius: '4px', border: '1px solid #000' }} required />
        </div>
        <button 
          type="submit"
          style={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            backgroundColor: '#0053a0',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            marginRight: '1rem'
          }}
        >
          Avançar para Serviços
        </button>
        <button 
          type="button"
          onClick={() => navigate('/')}
          style={{
            padding: '12px 24px',
            fontSize: '1.1rem',
            backgroundColor: '#ccc',
            color: '#000',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Voltar
        </button>
      </form>
    </main>
  );
}

function Servicos() {
  const navigate = useNavigate();
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Serviços Disponíveis</h2>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.2rem', lineHeight: '2rem' }}>
        <li>📱 Oficinas de Uso do Smartphone</li>
        <li>💻 Inclusão Digital e Internet Segura</li>
        <li>📄 Auxílio com Documentos Digitais</li>
      </ul>
      <button 
        onClick={() => navigate('/')}
        style={{
          padding: '12px 24px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          backgroundColor: '#0053a0',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          marginTop: '1.5rem'
        }}
      >
        Voltar ao Início
      </button>
    </main>
  );
}

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