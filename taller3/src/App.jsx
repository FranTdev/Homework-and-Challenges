import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AuthProvider } from './context/AuthContext';
import Home from './Home';
import Dashboard from './Dashboard';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';
import "./App.css"

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user); // Actualiza el estado según si hay un usuario
        });

        return () => unsubscribe(); // Limpia la suscripción
    }, [auth]);

    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route 
                        path="/dashboard" 
                        element={
                            <ProtectedRoute isLoggedIn={isLoggedIn}>
                                <Dashboard />
                            </ProtectedRoute>
                        } 
                    />
                    <Route 
                        path="/profile" 
                        element={
                            <ProtectedRoute isLoggedIn={isLoggedIn}>
                                <Profile />
                            </ProtectedRoute>
                        } 
                    />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;