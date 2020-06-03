import React from 'react';
import GitProfile from '../page/github';
// import Chart from '../page/Chart'
import Repositories from '../page/Repositories'
const Root = (props) => {
    
    return(
        <>
            <GitProfile query={props.location.search}/>
            {/* <Chart /> */}
            <Repositories />
        </>
    );
}

export default Root;