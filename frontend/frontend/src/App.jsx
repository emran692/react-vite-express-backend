import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [balance, setBalance] = useState(null);
  const [message, setMessage] = useState("");

 useEffect(() => {
  axios.get("http://localhost:5000/api/message")
    .then(res => {
      console.log("MESSAGE API RESPONSE:", res.data);
      setMessage(res.data.message);
    })
    .catch(err => console.log("MESSAGE API ERROR:", err));

  axios.get("http://localhost:5000/api/balance")
    .then(res => {
      console.log("BALANCE API RESPONSE:", res.data);
      setBalance(res.data.balance);
    })
    .catch(err => console.log("BALANCE API ERROR:", err));
}, []);


  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>React + Express Integration</h1>

      <h2>API Message:</h2>
      <p>{message}</p>

      <h2>Bank Balance:</h2>
      <p>₹{balance}</p>
    </div>
  );
}

export default App;
