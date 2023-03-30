import { FunctionComponent, PropsWithChildren } from "react";
import "./ButtonStyles.scss";

interface ButtonProps extends PropsWithChildren {
  id?: string;
  disabled?: boolean;
  onClick?: VoidFunction;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  id,
  disabled,
  type,
}) => (
  <button
    id={id}
    onClick={onClick}
    disabled={disabled}
    className="button"
    type={type}
  >
    {typeof children === "string" ? children.toUpperCase() : children}
  </button>
);

export default Button;
