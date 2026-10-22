import { useNavigate } from 'react-router-dom';

export default function Servicos() {
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