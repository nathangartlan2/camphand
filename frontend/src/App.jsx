import { useState, useEffect } from "react";
import "./App.css";
import ApiClient from "./services/apiClient";

const client = new ApiClient();

function App() {
  const [message, setMessage] = useState("Loading...");
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .get("")
      .then((response) => {
        setMessage(response.message);
        setError(null);
      })
      .catch((ex) => {
        console.error("Error fetching data:", ex);
        setError("Failed to fetch data from API");
        setMessage("");
      });
  }, []);

  return (
    <div className="App">
      <h1>Camphand - React + FastAPI</h1>
      <div className="card">
        {error ? (
          <p className="error">{error}</p>
        ) : (
          <p className="message">{message}</p>
        )}
      </div>
      <p className="read-the-docs">
        The message above is fetched from the FastAPI backend
      </p>
    </div>
  );
}

export default App;
