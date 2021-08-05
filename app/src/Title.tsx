import React, { ReactElement } from "react";

interface ITitleProps {
  text: string;
}

export default function Title({ text }: ITitleProps): ReactElement {
  return <h3>{text}</h3>;
}
