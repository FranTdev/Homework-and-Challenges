import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./NavComponent.css"

const NavComponent = () => {

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/dashboard"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/profile"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Profile
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavComponent;