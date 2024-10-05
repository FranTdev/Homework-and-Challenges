import React from 'react';
import { useAuth } from '../context/AuthContext'; // Asegúrate de importar el contexto correcto
import { getAuth, signOut } from "firebase/auth";
import "./UserInfo.css"

const UserInfo = () => {
    const { currentUser } = useAuth(); // Obtiene el usuario autenticado
    const auth = getAuth();

    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log("Usuario ha cerrado sesión");
        }).catch((error) => {
            console.error("Error al cerrar sesión", error);
        });
    };

    return (
        <div className="user-info">
            {currentUser ? (
                <div>
                    <p>Bienvenido, {currentUser.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>No has iniciado sesión</p>
            )}
        </div>
    );
};

export default UserInfo;