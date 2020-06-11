import React from 'react';

const ChartCard = props =>{
    return(
        <div className="shadow-lg rounded p-5 xl:p-5 lg: mt-5 mx-2 bg-white">
            {props.children}
        </div>
    );
}

export default ChartCard;