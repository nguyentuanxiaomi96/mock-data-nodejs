const express = require("express");
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  return res.json("tuan");
});

app.post("/thecao", (req, res) => {
  const thecao = req.body.thecao

  return res.json({
    "thecao": thecao
  })
});

app.listen(8181, function () {
  console.log("listening on 8181");
});
