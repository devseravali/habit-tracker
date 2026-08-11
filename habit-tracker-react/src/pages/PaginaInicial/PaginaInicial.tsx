import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Card } from '../../components/Card/Card';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { HeroSection } from '../../components/HeroSection/HeroSection';

interface PaginaInicialProps {
  pageTitle?: string;
}

export const PaginaInicial = ({ pageTitle = 'Página Inicial' }: PaginaInicialProps) => {
  return (
    <>
      <Header />
      <div>
        <PageHeader pageTitle={pageTitle} />

        <main>
          <HeroSection />

          <section>
            <Card />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};
