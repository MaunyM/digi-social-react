import React from "react";
import "./App.css";
import { MessageList } from "./features/message/messageList";


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <MessageList></MessageList>
        {process.env.NODE_ENV}
      </header>
    </div>
  );
}

export default App;
