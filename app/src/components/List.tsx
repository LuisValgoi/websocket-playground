import React, { ReactElement } from "react";
import { InternalChildren } from "../interfaces/children";

interface IListProps extends InternalChildren {}

export default function List({ children }: IListProps): ReactElement {
  return <ul>{children}</ul>;
}
