const express = require("express");

// Constants
const PORT = process.env.PORT;

// App
const app = express();
app.get("/", (req, res) => {
  res.send(`
  <h1 style="text-align:center;">Good Morning Abduallh & 👩‍🍳  Hamzah good 👦</h1>

`);
});

app.listen(PORT);
console.log(`Running on ${PORT}`);
