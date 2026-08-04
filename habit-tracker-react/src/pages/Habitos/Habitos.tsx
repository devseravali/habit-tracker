import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const Habitos: React.FC = () => {
    const navigate = useNavigate();
    return (
        <> 
                <Header />
                <h1>Meus Hábitos</h1>

            <ul>
                <li>
                    <div>
                        <span>Hábito 1</span>
                        <progress value={0} max={100}>0%</progress>
                    </div>
                </li>
                <li>
                    <div>
                        <span>Hábito 2</span>
                        <progress id="progress" className="progress-bar" value={0} max={100}>0%</progress>
                    </div>
                </li>
                <li>
                    <div>
                        <span>Hábito 3</span>
                        <progress value={0} max={100}>0%</progress>
                    </div>
                </li>
            </ul>

            <button type="button" onClick={() => navigate('/overview')}>Voltar ao início</button>
            <Footer />
        </>
    );
};