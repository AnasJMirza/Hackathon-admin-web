import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <div className='button-body'  style={{width:`${props.width}`}}>
            {props.title}
        </div>
    );
};

export default Button;