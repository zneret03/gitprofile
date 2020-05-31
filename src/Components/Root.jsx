import React from 'react';
import GitProfile from '../page/github';
const Root = (props) => {
    
    return(
        <>
            <GitProfile query={props.location.search}/>
        </>
    );
}

export default Root;