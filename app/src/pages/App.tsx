import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import * as Constants from "../shared/constants";

import AddButton from "../components/Button";
import Input from "../components/Input";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Title from "../components/Title";
import Container from "../layouts/Container";

type Messages = string[];

function App(): JSX.Element {
  const socket = socketIOClient(Constants.HOST);
  const inputRef = React.createRef<HTMLInputElement>();
  const [messages, setMessages] = useState<Messages>([]);

  const loadMessages = (m: Messages) => setMessages(m);

  const handleSendButton = () => socket.emit(Constants.WS.CUSTOM_MESSAGE, [...messages, inputRef.current?.value]);

  useEffect(() => {
    socket.on(Constants.WS.CUSTOM_MESSAGE, loadMessages);

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Container>
      <Title text="Messages" />

      <Input ref={inputRef} placeholder="message" />
      <AddButton onClick={handleSendButton}>Add</AddButton>

      <List>
        {messages.map((item: string, index: number) => (
          <ListItem key={index}>
            <p>{item}</p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
