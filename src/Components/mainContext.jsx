import React from 'react';
const MainContext = React.createContext();
const MainProvider = (props) => {           

    const [gitUser, setGitUser] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        (async() => {
            const api = await fetch('https://api.github.com/users/zneret03');
            const response = await api.json();
            const result = [];

            result.push(response);

            setLoading(false);
            setGitUser(result);
        })();
    }, [])


    if(!gitUser){
        return <div className="flex items-center justify-center">No data rendered</div>
    }

    if(loading){
        return <div className="flex items-center justify-center">loading...</div>
    }

    return(
        <MainContext.Provider value={gitUser}>
            {props.children}
        </MainContext.Provider>
    );
}

export {MainProvider, MainContext};