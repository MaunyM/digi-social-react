import React, { useEffect, useState } from "react";
import "./App.css";

const api = process.env.REACT_APP_API_URL;

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${api}/api/message`)
      .then((response) => response.json())
      .then((response) => setMessage(response));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {JSON.stringify(message)}
        {process.env.NODE_ENV}
      </header>
    </div>
  );
}

export default App;
