import { useNavigate } from 'react-router-dom';

export default function Atendimento() {
  const navigate = useNavigate();

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Atendimento ao Idoso</h2>
      <p style={{ fontSize: '1.1rem' }}>Preencha os dados abaixo para solicitar suporte presencial ou remoto.</p>
      
      <form onSubmit={(e) => { e.preventDefault(); navigate('/servicos'); }}>
        <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
          <label htmlFor="nome" style={{ display: 'block', fontWeight: 'bold', mb: '0.5rem' }}>Nome Completo:</label>
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