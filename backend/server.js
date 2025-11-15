const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// sample API endpoint
app.get("/api/balance", (req, res) => {
  res.json({
    balance: 1500,
    currency: "INR",
    status: "success",
  });
});

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express API!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
