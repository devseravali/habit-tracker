import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

export const Configuracoes: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="configuracoes">
                <Header />
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

                <button onClick={() => navigate('/overview')}>Voltar ao início</button>
            </div>
            <Footer />
        </>
    );
};