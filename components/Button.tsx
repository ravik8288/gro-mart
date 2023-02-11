import React from 'react';
type ButtonProps = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
};
function Button(props: ButtonProps) {
  const { children, onClick, type, className } = props;
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
