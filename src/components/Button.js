import React from 'react';
import '../styles/Button.css'

function Button({ text, isclickButton, handleButtonClick }) {
  return(
    <button 
      className={ isclickButton ? 'click-button' : 'reset-button' }
      onClick={ handleButtonClick } >
        {text}
    </button>
  );
}

export default Button;