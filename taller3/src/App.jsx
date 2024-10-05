import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import { AuthProvider } from './context/AuthContext';
import Home from './Home';
import Dashboard from './Dashboard';
import Profile from './Profile';
import ProtectedRoute from './ProtectedRoute';
import "./App.css"

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
      // Lógica de inicio de sesión
      console.log('Usuario ha iniciado sesión');
      setIsLoggedIn(true);
    };
  
    const logout = () => {
      // Lógica de cierre de sesión
      console.log('Usuario ha cerrado sesión');
      setIsLoggedIn(false);
    };
  
    const handleButtonClick = () => {
      if (isLoggedIn) {
        logout();
      } else {
        login();
      }
    };

    return (
        <AuthProvider>
        <Router>
            <Routes>
                {/* Página pública */}
                <Route path="/" element={<Home />} />

                {/* Páginas privadas, protegidas por la autenticación */}
                <Route 
                    path="/dashboard" 
                    element={
                            <ProtectedRoute isLoggedIn={isLoggedIn}>
                                <Dashboard/>
                            </ProtectedRoute>
                    }
                />
                <Route 
                    path="/profile" 
                    element={
                            <ProtectedRoute isLoggedIn={isLoggedIn}>
                                <Profile/>
                            </ProtectedRoute>
                    }
                />
            </Routes>
            <button onClick={handleButtonClick}>
                {isLoggedIn ? 'logout' : 'login'}
            </button>
        </Router>
        </AuthProvider>
    );
};

export default App;