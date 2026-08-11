export const Sidebar: React.FC = () => {
    return (
        <>
        <aside className="sidebar">
            <div className="brand">Habit Tracker</div>
            <div className="brand-sub">Protocol: Habit-Track-v1</div>


            <div className="sidebar-footer">
                <button className="upgrade" id="upgrade-btn">
                    <span className="material-symbols-outlined">star</span>
                    Upgrade
                </button>

                <a id="support-link" href="#">Suporte</a>

                <button className="danger">Sair</button>
            </div>
        </aside>
    </>
    );
};