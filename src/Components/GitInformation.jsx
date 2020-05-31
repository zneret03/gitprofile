import React from 'react';

const GitInformation = (props) =>{
    return (
        <span className={props.className}>
            {props.children}
        </span>
    );
}

export default GitInformation;