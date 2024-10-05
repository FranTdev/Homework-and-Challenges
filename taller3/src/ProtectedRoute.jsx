import React from 'react';
import { useAuth } from './context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth();

    // Si no hay un usuario autenticado, redirigir al inicio ("/")
    if (!currentUser) {
        return <Navigate to="/" />;
    }

    // Si hay un usuario autenticado, renderizar los componentes hijos
    return children;
};

export default ProtectedRoute;