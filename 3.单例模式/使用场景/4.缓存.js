let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");
let cache = {};
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/user/:id", function(req, res) {
  console.log(0);
  let id = req.params.id;
  let user = cache.id;
  if (user) {
    res.json(user);
  } else {
    fs.readFile(`./users/${id}.json`, `utf8`, function(err, data) {
      let user = JSON.parse(data);
      cache.id = user;
      res.json(user);
    });
  }
});
app.get("/user", function(req, res) {
  let user = req.query;
  fs.writeFile(`./users/${user.id}.josn`, JSON.stringify(user), err => {
    console.log(err);
    res.json({ code: 0, data: "写入成功" });
  });
});
app.listen(3000, function() {
  console.log("已连接3000端口");
});
