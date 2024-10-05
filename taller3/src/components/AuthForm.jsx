import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase.js";

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
                console.log('Usuario registrado con exito');
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                console.log('Usuario logueado con exito');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>{isRegister ? "Registro": "Iniciar sesion"}</h2>
            <form onSubmit={handleSubmit}>
                {error && <p style={{color: 'red'}}>{error}</p>}
                <input 
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>
                    {isRegister ? "Registrarse" : "Iniciar Sesion"}
                </button>
            </form>
            <button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? "Ya tienes una cuenta? Inicia sesion": "No tienes una cuenta? Registrate"}
            </button>
        </div>
    );
};

export default AuthForm;