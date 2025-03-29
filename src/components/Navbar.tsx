import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
    return (
        <header className='navbar'>
            <div className="navbar-left">
                <nav className='menu'>
                    <button className='menu-item active'>Conversaciones</button>
                    <button className='menu-item'>Pacientes</button>
                    <button className='menu-item'>Médicos</button>
                </nav>
            </div>

            <div className="navbar-right">
                <div className="profile">
                <span className="name">Natasha Bunny</span>
                <span className="email">natashabunny@email.com</span>
                </div>
                <div className="avatar">👩‍⚕️</div>
            </div>
        </header>
    );
};

export default Navbar;