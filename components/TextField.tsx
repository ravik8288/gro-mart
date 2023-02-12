import React from 'react';
type TextFieldProps = {
  children?: React.ReactNode;
  onChange?: (req_e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  placeholder?: string;
};
function TextField(props: TextFieldProps) {
  const { children, onChange, type, className, placeholder } = props;
  return (
    <input
      placeholder={placeholder}
      className={className}
      type={type}
      onChange={onChange}
    >
      {children}
    </input>
  );
}

export default TextField;
