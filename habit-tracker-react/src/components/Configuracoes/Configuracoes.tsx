import React from 'react';

export const Configuracoes: React.FC = () => {
    return (
        <div className="configuracoes">
            <h1>Configurações</h1>

            <div className="campo">
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome" />
            </div>

            <div className="campo">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Digite seu email" />
            </div>

            <div className="campo">
                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />
            </div>

            <div className="campo">
                <input type="checkbox" id="notificacoes" name="notificacoes" />
                <label htmlFor="notificacoes">Ativar notificações</label>
            </div>

            <button onClick={() => (window.location.href = '../index.html')}>Voltar ao início</button>
        </div>
    );
};