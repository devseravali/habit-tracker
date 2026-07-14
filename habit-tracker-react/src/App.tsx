import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PaginaInicial } from './components/pagina-inicial/paginaInicial';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/overview"
          element={<PaginaInicial pageTitle="Overview" />}
        />
        <Route
          path="/habitos"
          element={<PaginaInicial pageTitle="Meus Hábitos" />}
        />
        <Route
          path="/estatisticas"
          element={<PaginaInicial pageTitle="Estatísticas" />}
        />
        <Route
          path="/metas-semanais"
          element={<PaginaInicial pageTitle="Metas Semanais" />}
        />
        <Route
          path="/configuracoes"
          element={<PaginaInicial pageTitle="Configurações" />}
        />
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="*" element={<Navigate to="/overview" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
