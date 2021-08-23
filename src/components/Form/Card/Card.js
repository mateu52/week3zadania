import React from 'react';
import "./card.css";
//import  cardimg from"../Img/cardimg"

function Card({ title, intro, showMore}){

    return(
        <div className="menuCard">
            <h1>{title}</h1>
            <h3>September 12,2016</h3>
            <div className="imgClass">
                <img src="https://www.szaragora.pl/media/k2/items/cache/8da476f72f06a276b1f930cdb28c21f1_XL.jpg"></img>

            </div>
            <div className="textDown">
                <p>{intro}</p>
                <p>{showMore}</p>
            </div>
        </div>
    );
}

export default Card;