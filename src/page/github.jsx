import React from 'react';
import UserProfile from './userProfile';
import {MainContext} from '../Components/mainContext';
const Page = () => {
    const data = React.useContext(MainContext);

    console.log(data);
    return(
        <div>
            {data.map(items => (
                <UserProfile users={items} key={items.id}/>
            ))}
        </div>
    );
}

export default Page;
