 import React from 'react';
 import NavComponent from './components/NavComponent';
 import UserInfo from './components/UserInfo';

 const Dashboard = () => {
    return (
        <div>
            <NavComponent/>
            <UserInfo/>
            <h1>Dashboard Page</h1>
        </div>
    );
};

export default Dashboard;