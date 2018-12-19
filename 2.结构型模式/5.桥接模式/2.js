let express = require("express");
let app = express();
let path = require("path");

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "2.html"));
});
app.get("/user/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    id,
    name: id
  });
});
app.listen(8080, () => {
  console.log(8080);
});
