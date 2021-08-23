import React from 'react';
//import MenuLink from './MenuLink';
import "./menu.css";
const styles={
    marginBottom:15
};

function Menu({ children }){

    return(
        <nav style={styles}>
            {children}
        </nav>
    );
}

export default Menu;