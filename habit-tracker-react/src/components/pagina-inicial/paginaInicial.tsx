import { NavLink } from 'react-router-dom';

interface PaginaInicialProps {
  pageTitle: string;
}

export const PaginaInicial = ({ pageTitle }: PaginaInicialProps) => {
  return (
    <>
      <nav>
        <div>
          <h2>Habit Tracker</h2>
          <p>Protocol: Habit-Track-v1</p>
        </div>

        <ul>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/habitos">Hábitos</NavLink>
          </li>
          <li>
            <NavLink to="/estatisticas">Estatísticas</NavLink>
          </li>
          <li>
            <NavLink to="/configuracoes">Configurações</NavLink>
          </li>
        </ul>

        <div>
          <button>Upgrade</button>

          <a href="#">
            <button>Suporte</button>
          </a>

          <a href="#">
            <button>Sair</button>
          </a>
        </div>
      </nav>

      <div>
        <header>
          <div>
            <button>☰</button>

            <div>
              <h1>{pageTitle}</h1>
              <p>Bem-vindo ao Habit Tracker</p>
            </div>
          </div>

          <div>
            <button>
              <span>Alternar tema</span>
            </button>

            <button>
              <span>Notificações</span>
            </button>
          </div>
        </header>

        <main>
          <section>
            <div>
              <h2>Construa sua rotina</h2>

              <p>
                Adicione hábitos, acompanhe seu progresso e alcance seus
                objetivos!
              </p>
            </div>

            <div>
              <div>
                Sequência atual <strong>15 dias</strong>
              </div>
            </div>
          </section>

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
        </main>
      </div>
    </>
  );
};
