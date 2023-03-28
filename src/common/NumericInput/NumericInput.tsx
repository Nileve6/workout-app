import React, { ChangeEvent, FC } from 'react';
import './NumericInputStyles.scss';

interface InputProps{
	  value: number;
    id: string;
    min?: number,
    max?: number,
	  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input : FC<InputProps> = ({ 
  id,	
	value,
	onChange,
  min,
  max,
}) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input 
          type='number'
          id={id}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
      />
    </>
  );
}

export default Input;
