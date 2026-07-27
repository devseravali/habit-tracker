import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Estastisticas: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="estatisticas">
            <h1>Estatísticas</h1>

            <ul>
                <li>Estatística 1</li>
                <li>Estatística 2</li>
                <li>Estatística 3</li>
            </ul>

            <button onClick={() => navigate('/overview')}>Voltar ao início</button>
        </div>
    );
};