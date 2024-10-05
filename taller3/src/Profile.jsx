import React from 'react';
import NavComponent from './components/NavComponent';
import UserInfo from './components/UserInfo';

const Profile = () => {
    return(
        <div>
            <NavComponent/>
            <UserInfo/>
            <h1>Profile Page</h1>
        </div>
    );
};

export default Profile;