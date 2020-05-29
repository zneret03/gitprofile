import React from 'react';

const UserProfile = props =>{
    return(
        <div>
            <h1>{props.users.id}</h1>
        </div>
    );
}

export default UserProfile;