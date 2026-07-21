import React from "react";

export const Habitos: React.FC = () => {
    return (
        <>
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

            <button type="button">Voltar ao início</button>
        </>
    );
};