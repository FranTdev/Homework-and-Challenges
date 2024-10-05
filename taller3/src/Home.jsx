import React from "react";
import NavComponent from "./components/NavComponent";
import AuthForm from "./components/AuthForm"; // Importa tu formulario de autenticación

const Home = () => {
    return (
        <div>
            <NavComponent />
            <h1>Home Page</h1>
            <AuthForm /> {/* Inserta el formulario aquí */}
        </div>
    );
};

export default Home;