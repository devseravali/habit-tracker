import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PaginaInicial } from './pages/PaginaInicial/PaginaInicial';
import { Habitos } from './pages/Habitos/Habitos';
import { Configuracoes } from './pages/Configuracoes/Configuracoes';
import { MetasSemanais } from './pages/MetasSemanais/MetasSemanais';
import { Estatisticas } from './pages/Estatisticas/Estatisticas';
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
          element={<Habitos />}
        />
        <Route path="/estatisticas" element={<Estatisticas />} />
        <Route path="/metas-semanais" element={<MetasSemanais />} />
        <Route
          path="/configuracoes"
          element={<Configuracoes />}
        />
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="*" element={<Navigate to="/overview" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
