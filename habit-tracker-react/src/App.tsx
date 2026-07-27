import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PaginaInicial } from './components/PaginaInicial/PaginaInicial';
import { Habitos } from './components/Habitos/Habitos';
import { Configuracoes } from './components/Configuracoes/Configuracoes';
import { Estastisticas } from './components/Estastiticas/Estastiticas';
import { MetasSemanais } from './components/MetasSemanais/MetasSemanais';
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
        <Route path="/estatisticas" element={<Estastisticas />} />
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
