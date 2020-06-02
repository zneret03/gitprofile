import React from 'react';
import GitProfile from '../page/github';
// import Chart from '../page/Chart'
const Root = (props) => {
    
    return(
        <>
            <GitProfile query={props.location.search}/>
            {/* <Chart /> */}
        </>
    );
}

export default Root;