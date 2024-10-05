import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase.js";
import './AuthForm.css'; // Asegúrate de importar tu archivo de estilos

function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isRegister) {
                await createUserWithEmailAndPassword(auth, email, password);
                console.log('Usuario registrado con éxito');
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                console.log('Usuario logueado con éxito');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="container"> {/* Contenedor para centrar el formulario */}
            <div className="auth-form"> {/* Clase de estilo aplicada */}
                <h2>{isRegister ? "Registro" : "Iniciar sesión"}</h2>
                {error && <p className="error-message">{error}</p>} {/* Mensaje de error */}
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder='Contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit'>
                        {isRegister ? "Registrarse" : "Iniciar Sesión"}
                    </button>
                </form>
                <button className="toggle-button" onClick={() => setIsRegister(!isRegister)}>
                    {isRegister ? "Ya tienes una cuenta? Inicia sesión" : "No tienes una cuenta? Regístrate"}
                </button>
            </div>
        </div>
    );
};

export default AuthForm;