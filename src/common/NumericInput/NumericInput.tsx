import React, { ChangeEvent, FunctionComponent } from "react";
import "./NumericInputStyles.scss";

interface NumbericInputProps {
  value: number;
  id: string;
  label: string;
  min?: number;
  max?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const NumericInput: FunctionComponent<NumbericInputProps> = ({
  id,
  value,
  label,
  onChange,
  min,
  max,
}) => (
  <>
    <label htmlFor={id}>{label.toUpperCase()}</label>
    <input
      type="number"
      id={id}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
    />
  </>
);

export default NumericInput;
