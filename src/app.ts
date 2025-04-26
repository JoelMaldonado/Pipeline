import express from "express";

const app = express();
const PORT = 2178;

app.get("/ping", (_req, res) => {
  res.send("Este es un nuevo cambio");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
