import React from 'react';

function Card({ title, intro, showMore}){

    return(
        <div>
            <h1>{title}</h1>
            <p>{intro}</p>
            <p>{showMore}</p>
        </div>
    );
}

export default Card;