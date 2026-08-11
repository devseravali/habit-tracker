import React from 'react';

interface PageHeaderProps {
  pageTitle: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ pageTitle }) => {
  return (
    <header className="page-header">
      <div className="page-header-left">
        <button aria-label="menu">☰</button>

        <div>
          <h1>{pageTitle}</h1>
          <p>Bem-vindo ao Habit Tracker</p>
        </div>
      </div>

      <div className="page-header-actions">
        <button aria-label="toggle-theme">
          <span>Alternar tema</span>
        </button>

        <button aria-label="notifications">
          <span>Notificações</span>
        </button>
      </div>
    </header>
  );
};
