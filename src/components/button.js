import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const colors={
  emerald:"#2ecc71",
  amethyst:"#9b59b6"
};
function Button({bgColor=colors.amethyst, color=colors.emerald}){
  const styles={
    backgroundColor:bgColor,
    color:color,
    margin:10
  };


  return(
    <button label="Click Me"style={styles} ><FontAwesomeIcon icon={faCoffee} />Click Me</button>
  );
}

export default Button;