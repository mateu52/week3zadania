import React from 'react';
import "./menu.css";

const styles={
    color:'red'
};

function MenuLink({to , isActive, children }){

    return(
        <a href={to} style={isActive ? styles : null}   >
        {children}
        </a>
    )
}

export default MenuLink;