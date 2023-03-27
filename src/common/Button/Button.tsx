import React, { FC, ReactNode } from 'react';
import './ButtonStyles.scss';

interface ButtonProps{
    children: ReactNode;
    color?: string;
    id?: string;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'submit' | 'button';
}

const Button : FC<ButtonProps> = ({ children, onClick, id, disabled, type }) => {
  return (
    <button id={id} onClick={onClick} disabled={disabled} className={"text"} type={type}>
        {children}
    </button>
  );
}

export default Button;
