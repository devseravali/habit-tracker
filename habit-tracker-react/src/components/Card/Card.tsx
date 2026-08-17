import React from 'react';
import type { CardProps } from '../../types/CardProps';

export const Card: React.FC<CardProps> = ({ title, subtitle, className, actions, children }) => {
    const classes = ['glass-card'];
    if (className) classes.push(className);

    const defaultContent = (
        <>
            <div>
                <div>
                    Sequência atual <strong>15 dias</strong>
                </div>
            </div>

            <div>
                <section>
                    <h3>Lista de hábitos</h3>

                    <form>
                        <input type="text" placeholder="Novo hábito" maxLength={60} />
                        <button type="submit">Adicionar</button>
                    </form>

                    <div>
                        <progress value={0} max={100} />
                        <p>0 de 0 hábitos concluídos</p>
                    </div>

                    <section>
                        <ul></ul>

                        <article>
                            <p>Nenhum hábito ainda. Adicione o primeiro!</p>
                        </article>
                    </section>
                </section>

                <aside>
                    <ul>
                        <li>
                            <h4>Hábitos</h4>
                            <strong>0</strong>
                        </li>

                        <li>
                            <h4>Concluídos</h4>
                            <strong>0</strong>
                        </li>

                        <li>
                            <h4>Sequência</h4>
                            <strong>15 dias</strong>
                        </li>

                        <li>
                            <h4>Meta</h4>
                            <strong>100%</strong>
                        </li>
                    </ul>

                    <div>
                        <h3>Progresso Semanal</h3>

                        <div>
                            <div></div>
                        </div>

                        <p>Seg • Ter • Qua • Qui • Sex • Sab • Dom</p>
                    </div>
                </aside>
            </div>
        </>
    );

    return (
        <article className={classes.join(' ')}>
            {(title || subtitle || actions) && (
                <header className="card-header">
                    <div className="card-header-text">
                        {title && <h3 className="card-title">{title}</h3>}
                        {subtitle && <p className="card-subtitle">{subtitle}</p>}
                    </div>
                    {actions && <div className="card-actions">{actions}</div>}
                </header>
            )}

            <div className="card-body">
                {children ?? defaultContent}
            </div>
        </article>
    );
};
