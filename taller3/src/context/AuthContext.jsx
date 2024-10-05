import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
            console.log("Usuario actual:", user);
        });

        return () => unsubscribe();
    }, []);

    const logout = () => {
        signOut(auth).then(() => {
            console.log("Usuario desconectado");
        }).catch((error) => {
            console.error("Error al cerrar sesión:", error);
        });
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <AuthContext.Provider value={{ currentUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};