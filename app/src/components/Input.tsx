import React, { ReactElement } from "react";

interface IInputProps {
  placeholder: string;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>((props, ref): ReactElement => {
  return <input ref={ref} placeholder={props.placeholder} />;
});

export default Input;
