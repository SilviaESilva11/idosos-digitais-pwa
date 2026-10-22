import { useNavigate } from 'react-router-dom';

export default function Home() {
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