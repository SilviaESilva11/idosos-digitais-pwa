import React from 'react';

export default function App() {
  return (
    <main style={{ 
      padding: '2rem', 
      fontFamily: 'Arial, sans-serif', 
      fontSize: '1.25rem', 
      lineHeight: '1.6',
      backgroundColor: '#ffffff',
      color: '#000000',
      minHeight: '100vh'
    }}>
      <header>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#003366' }}>
          Associação de Apoio à Terceira Idade de Taubaté
        </h1>
        <p style={{ fontWeight: 'bold' }}>
          Bem-vindo(a) ao portal Idosos Digitais.
        </p>
      </header>

      <section style={{ marginTop: '2rem' }}>
        <button 
          onClick={() => alert('Botão acessível acionado!')}
          style={{
            padding: '1.2rem 2rem',
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: '#0055A5',
            color: '#FFFFFF',
            border: '3px solid #000000',
            borderRadius: '12px',
            cursor: 'pointer',
            minWidth: '250px',
            minHeight: '60px' // Garante área de toque ampla
          }}
          aria-label="Botão de boas-vindas com fonte grande e alto contraste"
        >
          Iniciar Atendimento
        </button>
      </section>
    </main>
  );
}
