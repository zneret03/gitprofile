import React from 'react';
//Components
import Main from '../Components/Main';
//Library
import {Redirect} from 'react-router-dom';
const MainInput = () =>{

    const [getUser, setUser] = React.useState('');
    const [showComponent, setComponent] = React.useState(false);

    const onSubmit = (e) =>{
        e.preventDefault();
        if(getUser){
            setComponent(true);
        }
    }

     if(showComponent){
        const component = `/user?id=${getUser}`;
        return <Redirect to={component}/>
    }

    return(
        <div>
            <Main>
                <form onClick={(e) => onSubmit(e)}>
                    <div className="mb-20">
                        <label className="block text-4xl text-center font-bold text-white mb-5">
                            Find your Git Profile
                        </label>
                        <input type="text" name="username" 
                        value={getUser} onChange={(e) => setUser(e.target.value)}
                        className="appearance-none rounded focus:outline-none focus:shadow-outline
                        bg-input py-3 w-full inline-block sm:px-16 text-blue-400 text-center text-3xl font-mono"/ >
                        <div className="mt-5">
                            <button className="block border w-full py-2 text-white 
                            rounded hover:bg-gray-500 font-mono text-2xl">
                                Search
                        </button>
                        </div>
                    </div>
                </form>
            </Main>
        </div>
    );
}

export default MainInput;