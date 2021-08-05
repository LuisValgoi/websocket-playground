import React, { ReactElement } from "react";

import { InternalChildren } from "../interfaces/children";

interface IListItemProps extends InternalChildren {}

export default function ListItem({ children }: IListItemProps): ReactElement {
  return <li>{children}</li>;
}
