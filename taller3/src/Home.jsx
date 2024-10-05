import React from "react";
import NavComponent from "./components/NavComponent";
import AuthForm from "./components/AuthForm"; 
import UserInfo from './components/UserInfo';

const Home = () => {
    return (
        <div>
            <NavComponent />
            <UserInfo/>
            <h1>Home Page</h1>
            <AuthForm /> 
        </div>
    );
};

export default Home;