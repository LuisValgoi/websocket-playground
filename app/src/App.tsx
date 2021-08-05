import React from "react";

import List from "./List";
import ListItem from "./ListItem";
import Title from "./Title";

function App(): JSX.Element {
  return (
    <>
      <Title text="List Item" />
      <List>
        <ListItem>
          <p>aisjdaisjdija</p>
        </ListItem>
      </List>
    </>
  );
}

export default App;
