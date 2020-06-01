import React from 'react';
import Headers from './Headers';
import Main from '../Components/Main'
// import GhPolyglot from 'gh-polyglot';

const GitProfile = (props) => {   
    const [gitUser, setGitUser] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [langData, setLangData] = React.useState(null);
    //const [loading, setLoading] = React.useState(true);

    //!Pie chart 
    //!Fetching top languages from github api

    // const getlangData = () =>{
    //     const user = new GhPolyglot(`${gitUser}`);
    //     user.userStats((err, stats) => {
    //         if(err){
    //             console.error('Error :', err);
    //         }
    //         setLangData(stats);
    //     })
    // }

    React.useEffect(() => {
        async function fetchData() {
            const params = new URLSearchParams(props.query);
            const API = 'https://api.github.com/users/';
            const DEFAULT_QUERY = params.get('id');

            let result = [];

            await fetch(API + DEFAULT_QUERY)
            .then((response) => response.json())
            .then((data) => {
                result.push(data);
                setLoading(true);
            });

            //setLoading(false);
            console.log(langData); 
            getlangData();
            setGitUser(result);
        };

        //getlangData();
        fetchData();
    },[props.query]);
                                                                                                    
    if(loading === false){
        setTimeout(() => {
           return <Main><div>
                <label className="block text-5xl text-center font-bold text-white mb-5">
                    Git Profile
                </label>
                <span className="text-white text-1xl">Oh no! Something went wrong. Try again later!</span>
                </div>
              </Main>
        }, 3000) 
    }

    return(
        <div className="h-screen">
            {gitUser.map(items => (
                <Headers users={items} key={items.message ? Math.floor(Math.random() * 100) : items.id}/>
            ))}
        </div>
    );
}

export default GitProfile;
