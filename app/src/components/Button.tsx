import React, { MouseEvent, ReactElement } from "react";

interface IButtonProps {
  children: React.ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button(props: IButtonProps): ReactElement {
  return <button onClick={props.onClick}>{props.children}</button>;
}
