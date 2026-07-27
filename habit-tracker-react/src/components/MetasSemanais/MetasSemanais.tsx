import React from 'react';

export const MetasSemanais: React.FC = () => {
    return (
        <div className="metas-semanais">
            <h1>Metas Semanais</h1>

            <ul>
                <li>
                    <label htmlFor="meta1">
                        <input type="checkbox" id="meta1" name="meta1" /> Meta 1
                    </label>
                </li>
                <li>
                    <label htmlFor="meta2">
                        <input type="checkbox" id="meta2" name="meta2" /> Meta 2
                    </label>
                </li>
                <li>
                    <label htmlFor="meta3">
                        <input type="checkbox" id="meta3" name="meta3" /> Meta 3
                    </label>
                </li>
            </ul>

            <button onClick={() => (window.location.href = '../index.html')}>Voltar ao início</button>
        </div>
    );
};
