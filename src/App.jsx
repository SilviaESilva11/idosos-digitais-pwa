import { useState } from 'react';

export default function App() {
  const [etapa, setEtapa] = useState(1);
  const [cpf, setCpf] = useState('');

  const CPF_ALVO = '12345678900';

  // Container principal padronizado via CSS Grid para forçar renderização idêntica no Edge
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    width: '380px',
    height: '620px',
    margin: '20px auto',
    border: '2px solid #0d2948',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    boxSizing: 'border-box',
    WebkitBoxSizing: 'border-box',
    msBoxSizing: 'border-box',
    display: 'grid',
    gridTemplateRows: '70px 505px 45px', // Três divisões matemáticas exatas
    gridTemplateColumns: '100%',
    WebkitTextSizeAdjust: '100%',
    msTextSizeAdjust: '100%', // Bloqueia redimensionamento de fonte do Edge
    textSizeAdjust: '100%'
  };

  const headerStyle = {
    backgroundColor: '#0d2948',
    color: '#ffffff',
    textAlign: 'center',
    padding: '12px 10px',
    boxSizing: 'border-box',
    height: '70px',
    overflow: 'hidden'
  };

  const footerStyle = {
    backgroundColor: '#d1d5db',
    color: '#000000',
    textAlign: 'center',
    padding: '12px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    boxSizing: 'border-box',
    height: '45px',
    overflow: 'hidden'
  };

  const bodyStyle = {
    padding: '16px',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    height: '505px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden'
  };

  const cardStyle = {
    border: '1px solid #cbd5e1',
    borderRadius: '12px',
    padding: '12px',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#000000',
    backgroundColor: '#eff6ff',
    borderRadius: '8px',
    border: '2px solid #0d2948',
    boxSizing: 'border-box',
    WebkitAppearance: 'none',
    appearance: 'none',
    outline: 'none'
  };

  const buttonStyle = (bg) => ({
    width: '100%',
    padding: '12px',
    fontSize: '1.05rem',
    fontWeight: 'bold',
    backgroundColor: bg,
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    WebkitAppearance: 'none',
    appearance: 'none',
    boxSizing: 'border-box'
  });

  const handleEntrar = () => {
    const apenasNumeros = cpf.replace(/\D/g, '');

    if (!apenasNumeros) {
      alert('Por favor, digite o seu CPF para entrar.');
      return;
    }

    if (apenasNumeros === CPF_ALVO) {
      setEtapa(2);
    } else {
      alert('CPF não encontrado. Utilize o CPF cadastrado: 123.456.789-00');
    }
  };

  return (
    <div style={containerStyle}>
      {/* Cabeçalho Fixo (70px) */}
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 'bold', lineHeight: '1.2' }}>Idosos Digitais</h1>
        <p style={{ margin: '2px 0 0', color: '#facc15', fontSize: '0.85rem' }}>Associação de Taubaté</p>
      </header>

      {/* TELA 1: Identificação do Idoso (505px) */}
      {etapa === 1 && (
        <main style={bodyStyle}>
          <div>
            <h2 style={{ fontSize: '1.2rem', color: '#000000', marginTop: 0, marginBottom: '12px' }}>
              Identificação do Idoso
            </h2>
            
            <div style={{ ...cardStyle, marginBottom: '16px' }}>
              <h3 style={{ margin: '0 0 6px', color: '#0d2948', fontSize: '1.05rem' }}>Oficina de Hoje</h3>
              <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#000000' }}><strong>Atividade:</strong> Inclusão Digital Prática</p>
              <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#000000' }}><strong>Horário:</strong> 14:00 às 15:30</p>
            </div>

            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '1rem', color: '#000000' }}>
              Digite seu CPF:
            </label>
            <input 
              type="text" 
              placeholder="123.456.789-00"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              style={inputStyle}
            />
          </div>

          <button onClick={handleEntrar} style={buttonStyle('#0d2948')}>
            Entrar na Associação
          </button>
        </main>
      )}

      {/* TELA 2: Confirmar Presença (505px) */}
      {etapa === 2 && (
        <main style={bodyStyle}>
          <div>
            <h2 style={{ fontSize: '1.2rem', color: '#000000', marginTop: 0, marginBottom: '12px' }}>
              Olá, Dona Maria!
            </h2>
            
            <div style={{ ...cardStyle, borderColor: '#0d2948', borderWidth: '2px', marginBottom: '16px' }}>
              <h3 style={{ margin: '0 0 6px', color: '#0d2948', fontSize: '1.05rem' }}>Oficina do Dia</h3>
              <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#000000' }}><strong>Atividade:</strong> Redes Sociais e Segurança</p>
              <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#000000' }}><strong>Horário:</strong> 14:00 às 15:30</p>
              <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#000000' }}><strong>Local:</strong> Sala de Informática</p>
            </div>

            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '0.95rem', margin: '12px 0', color: '#000000' }}>
              Toque no botão abaixo para marcar sua presença hoje:
            </p>
          </div>

          <button onClick={() => setEtapa(3)} style={buttonStyle('#064e3b')}>
            ✓ Confirmar Minha Presença
          </button>
        </main>
      )}

      {/* TELA 3: Comprovante de Presença (505px) */}
      {etapa === 3 && (
        <main style={bodyStyle}>
          <div>
            <div style={{
              backgroundColor: '#064e3b',
              color: '#ffffff',
              borderRadius: '12px',
              padding: '12px',
              textAlign: 'center',
              marginBottom: '12px',
              boxSizing: 'border-box'
            }}>
              <div style={{
                width: '38px',
                height: '38px',
                backgroundColor: '#eab308',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 6px',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: '#000000'
              }}>
                ✓
              </div>
              <h2 style={{ margin: '0 0 4px', fontSize: '1.05rem' }}>Presença Confirmada!</h2>
              <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: '1.2' }}>
                Sua presença foi registrada na lista oficial.
              </p>
            </div>

            <div style={cardStyle}>
              <p style={{ margin: '3px 0', fontSize: '0.85rem', color: '#000000' }}><strong>Comprovante Nº:</strong> PRES-2026-1014</p>
              <p style={{ margin: '3px 0', fontSize: '0.85rem', color: '#000000' }}><strong>Data:</strong> 14/10/2026 às 14:05</p>
              <p style={{ margin: '3px 0', fontSize: '0.85rem', color: '#000000' }}><strong>Status:</strong> Registrado no Banco de Dados</p>
            </div>
          </div>

          <button 
            onClick={() => {
              setCpf('');
              setEtapa(1);
            }}
            style={buttonStyle('#0d2948')}
          >
            Voltar ao Início / Sair
          </button>
        </main>
      )}

      {/* Rodapé Fixo (45px) */}
      <footer style={footerStyle}>
        Associação de Apoio à Terceira Idade
      </footer>
    </div>
  );
}