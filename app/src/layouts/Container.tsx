import React, { ReactElement } from "react";
import { InternalChildren } from "../interfaces/children";

interface IContainerProps extends InternalChildren {}

export default function Container({ children }: IContainerProps): ReactElement {
  return <div>{children}</div>;
}
