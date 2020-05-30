import React from 'react';
import UserProfile from './userProfile';

const GitProfile = (props) => {   
    const [gitUser, setGitUser] = React.useState([]);
    
    //const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            const params = new URLSearchParams(props.location.search);
            const API = 'https://api.github.com/users/';
            const DEFAULT_QUERY = params.get('id');

            let result = [];

            await fetch(API + DEFAULT_QUERY)
            .then((response) => response.json())
            .then((data) => {
                result.push(data);
            });

            //setLoading(false);
            setGitUser(result);
        };

        fetchData();
    },[props.location.search]);
                                                                                                    

    // if(result.length === 0){
    //     return <Main><div>
    //             <label className="block text-5xl text-center font-bold text-white mb-5">
    //                 Git Profile
    //             </label>
    //             <h1 className="text-white">Oh no! Something went wrong. Try again later!</h1>
    //             </div>
    //           </Main>
    // }

    return(
        <div className="h-screen">
            {gitUser.map(items => (
                <UserProfile users={items} key={items.message ? Math.floor(Math.random() * 100) : items.id}/>
            ))}
        </div>
    );
}

export default GitProfile;
