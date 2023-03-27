import React, { ChangeEvent, FC } from 'react';
import './NumericInputStyles.scss';

interface InputProps{
	  value: number;
    id: string;
	  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input : FC<InputProps> = ({ 
  id,	
	value,
	onChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input 
          type='number'
          id={id}
          value={value}
          onChange={onChange}
      />
    </>
  );
}

export default Input;
