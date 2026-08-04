import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <header>
           <ul>
            <li>
              <NavLink to="/">Pagina Inicial</NavLink>
            </li>
            <li>
              <NavLink to="/habitos">Meus Hábitos</NavLink>
            </li>
            <li>
              <NavLink to="/estatisticas">Estatísticas</NavLink>
            </li>
            <li>
              <NavLink to="/configuracoes">Configurações</NavLink>
            </li>
           </ul>
        </header>
    )
}