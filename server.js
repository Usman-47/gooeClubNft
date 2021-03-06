const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.static("./build"));
app.all("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Server listening on port 8000!");
});
