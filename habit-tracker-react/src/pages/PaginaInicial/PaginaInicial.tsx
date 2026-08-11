import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Card } from '../../components/Card/Card';

interface PaginaInicialProps {
  pageTitle: string;
}

export const PaginaInicial = ({ pageTitle }: PaginaInicialProps) => {
  return (
    <>
      <Header />
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
            <Card />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};
