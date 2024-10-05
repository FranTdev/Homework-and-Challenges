import React from "react";
import NavComponent from "./components/NavComponent";
import AuthForm from "./components/AuthForm"; 
import UserInfo from './components/UserInfo';
import { useAuth } from './context/AuthContext';

const Home = () => {
    const { currentUser } = useAuth(); 

    return (
        <div>
            <NavComponent />
            <UserInfo />
            <h1>Home Page</h1>
            
            {!currentUser && <AuthForm />} 
        </div>
    );
};

export default Home;