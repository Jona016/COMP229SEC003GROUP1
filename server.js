const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Basic CRUD operations without database
const items = []; // This will temporarily hold our data

app.get("/api/items", (req, res) => {
  res.json(items);
});

app.post("/api/items", (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).send(`Item added with name: ${item.name}`);
});

app.put("/api/items/:name", (req, res) => {
  const { name } = req.params;
  const { newName } = req.body;
  const item = items.find((i) => i.name === name);
  if (item) {
    item.name = newName;
    res.send(`Item with name ${name} has been updated to ${newName}`);
  } else {
    res.status(404).send("Item not found");
  }
});

app.delete("/api/items/:name", (req, res) => {
  const { name } = req.params;
  const index = items.findIndex((i) => i.name === name);
  if (index !== -1) {
    items.splice(index, 1);
    res.send(`Item with name ${name} has been deleted`);
  } else {
    res.status(404).send("Item not found");
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
