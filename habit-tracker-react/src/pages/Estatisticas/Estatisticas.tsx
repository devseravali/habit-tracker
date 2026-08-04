import React from 'react';

export const Estatisticas: React.FC = () => {
    return (
        <div className="estatisticas">
            <h1>Estatísticas</h1>

            <ul>
                <li>Estatística 1</li>
                <li>Estatística 2</li>
                <li>Estatística 3</li>
            </ul>

            <button onClick={() => (window.location.href = '../index.html')}>Voltar ao início</button>
        </div>
    );
};