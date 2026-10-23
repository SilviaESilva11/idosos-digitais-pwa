import { useState, useEffect } from 'react';

export default function App() {
  const [etapa, setEtapa] = useState(1);
  const [cpf, setCpf] = useState('');

  // Força o campo a iniciar limpo, ignorando tentativas de autofill do navegador
  useEffect(() => {
    setCpf('');
  }, []);

  const CPF_ALVO = '12345678900';

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    width: '380px',
    height: '620px',
    minWidth: '380px',
    minHeight: '620px',
    maxWidth: '380px',
    maxHeight: '620px',
    margin: '20px auto',
    border: '2px solid #0d2948',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    boxSizing: 'border-box',
    position: 'relative',
    colorScheme: 'light'
  };

  const headerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '70px',
    backgroundColor: '#0d2948',
    textAlign: 'center',
    padding: '12px 10px',
    boxSizing: 'border-box'
  };

  const footerStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '45px',
    backgroundColor: '#d1d5db',
    color: '#000000',
    WebkitTextFillColor: '#000000',
    textAlign: 'center',
    padding: '12px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    boxSizing: 'border-box'
  };

  const bodyStyle = {
    position: 'absolute',
    top: '70px',
    bottom: '45px',
    left: 0,
    right: 0,
    padding: '16px',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden'
  };

  const cardStyle = {
    border: '1px solid #cbd5e1',
    borderRadius: '12px',
    padding: '14px',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#000000',
    WebkitTextFillColor: '#000000',
    backgroundColor: '#eff6ff',
    borderRadius: '8px',
    border: '2px solid #0d2948',
    boxSizing: 'border-box',
    outline: 'none'
  };

  const buttonStyle = (bg) => ({
    width: '100%',
    padding: '12px',
    fontSize: '1.05rem',
    fontWeight: 'bold',
    backgroundColor: bg,
    color: '#ffffff',
    WebkitTextFillColor: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxSizing: 'border-box'
  });

  const handleEntrar = (e) => {
    if (e) e.preventDefault();

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
    <div style={containerStyle} role="application" aria-label="Aplicativo Idosos Digitais">
      {/* Cabeçalho Fixo */}
      <header style={headerStyle}>
        <h1 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 'bold', lineHeight: '1.2', color: '#ffffff', WebkitTextFillColor: '#ffffff' }}>
          Idosos Digitais
        </h1>
        <p style={{ margin: '2px 0 0', color: '#facc15', WebkitTextFillColor: '#facc15', fontSize: '0.85rem', fontWeight: 'bold' }}>
          Associação de Taubaté
        </p>
      </header>

      {/* TELA 1: Identificação do Idoso */}
      {etapa === 1 && (
        <main style={bodyStyle} aria-live="polite">
          <form onSubmit={handleEntrar} style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '1.2rem', color: '#000000', WebkitTextFillColor: '#000000', marginTop: 0, marginBottom: '12px' }}>
                Identificação do Idoso
              </h2>
              
              <div style={{ ...cardStyle, marginBottom: '16px' }}>
                <h3 style={{ margin: '0 0 6px', color: '#0d2948', WebkitTextFillColor: '#0d2948', fontSize: '1.05rem' }}>Oficina de Hoje</h3>
                <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#000000', WebkitTextFillColor: '#000000' }}><strong>Atividade:</strong> Inclusão Digital Prática</p>
                <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#000000', WebkitTextFillColor: '#000000' }}><strong>Horário:</strong> 14:00 às 15:30</p>
              </div>

              <label htmlFor="input-cpf" style={{ display: 'block', fontWeight: 'bold', marginBottom: '6px', fontSize: '1rem', color: '#000000', WebkitTextFillColor: '#000000' }}>
                Digite seu CPF:
              </label>
              <input 
                id="input-cpf"
                name="cpf_no_autofill"
                type="text" 
                placeholder="123.456.789-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                style={inputStyle}
                aria-label="Campo para digitar o CPF"
                autoComplete="new-password"
                autoCorrect="off"
                spellCheck="false"
                autoFocus
              />
            </div>

            <button type="submit" style={buttonStyle('#0d2948')}>
              Entrar na Associação
            </button>
          </form>
        </main>
      )}

      {/* TELA 2: Confirmar Presença */}
      {etapa === 2 && (
        <main style={bodyStyle} aria-live="polite">
          <div>
            <h2 style={{ fontSize: '1.2rem', color: '#000000', WebkitTextFillColor: '#000000', marginTop: 0, marginBottom: '12px' }}>
              Olá, Dona Maria!
            </h2>
            
            <div style={{ ...cardStyle, borderColor: '#0d2948', borderWidth: '2px', marginBottom: '16px' }}>
              <h3 style={{ margin: '0 0 6px', color: '#0d2948', WebkitTextFillColor: '#0d2948', fontSize: '1.05rem' }}>Oficina do Dia</h3>
              <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#000000', WebkitTextFillColor: '#000000' }}><strong>Atividade:</strong> Redes Sociais e Segurança</p>
              <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#000000', WebkitTextFillColor: '#000000' }}><strong>Horário:</strong> 14:00 às 15:30</p>
              <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#000000', WebkitTextFillColor: '#000000' }}><strong>Local:</strong> Sala de Informática</p>
            </div>

            <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '0.95rem', margin: '12px 0', color: '#000000', WebkitTextFillColor: '#000000' }}>
              Toque no botão abaixo para marcar sua presença hoje:
            </p>
          </div>

          <button onClick={() => setEtapa(3)} style={buttonStyle('#064e3b')}>
            ✓ Confirmar Minha Presença
          </button>
        </main>
      )}

      {/* TELA 3: Comprovante de Presença */}
      {etapa === 3 && (
        <main style={bodyStyle} aria-live="polite">
          <div>
            <div style={{
              backgroundColor: '#064e3b',
              borderRadius: '12px',
              padding: '14px 12px',
              textAlign: 'center',
              marginBottom: '16px',
              boxSizing: 'border-box'
            }} role="status">
              <div style={{
                width: '38px',
                height: '38px',
                backgroundColor: '#eab308',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 8px',
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: '#000000',
                WebkitTextFillColor: '#000000'
              }}>
                ✓
              </div>
              <h2 style={{ margin: '0 0 4px', fontSize: '1.1rem', color: '#ffffff', WebkitTextFillColor: '#ffffff', fontWeight: 'bold' }}>
                Presença Confirmada!
              </h2>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#ffffff', WebkitTextFillColor: '#ffffff', lineHeight: '1.3' }}>
                Sua presença foi registrada na lista oficial.
              </p>
            </div>

            <div style={{ ...cardStyle, textAlign: 'left' }}>
              <p style={{ margin: '4px 0', fontSize: '0.88rem', color: '#000000', WebkitTextFillColor: '#000000' }}>
                <strong>Comprovante Nº:</strong> PRES-2026-1014
              </p>
              <p style={{ margin: '4px 0', fontSize: '0.88rem', color: '#000000', WebkitTextFillColor: '#000000' }}>
                <strong>Data:</strong> 14/10/2026 às 14:05
              </p>
              <p style={{ margin: '4px 0', fontSize: '0.88rem', color: '#000000', WebkitTextFillColor: '#000000' }}>
                <strong>Status:</strong> Registrado no Banco de Dados
              </p>
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

      {/* Rodapé Fixo */}
      <footer style={footerStyle}>
        Associação de Apoio à Terceira Idade
      </footer>
    </div>
  );
}