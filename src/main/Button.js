import React from 'react';
import './Button.css';

const Button = ({onClick, children}) => (
    <div className="button">
        <button onClick={onClick}>{children}</button>
    </div>
)

export default Button;