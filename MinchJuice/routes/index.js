const express = require("express");
const router = express.Router();
const userController = require("../controllers");
const mysql = require("mysql");

/* GET home page. */
router.get("/", userController.basicAPI);

router.get("/test", userController.testAPI);

router.post("/post_test", userController.postTestAPI);

let client = mysql.createConnection({
  user: "root",
  password: "k3711250",
  database: "mysqltest",
});

client.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
});

router.get("/create", function (req, res, next) {
  client.query("SELECT*FROM products;", function (err, result, fields) {
    if (err) {
      console.log(err);
      console.log("Some query has problems.");
    } else {
      res.render("create", { results: result });
    }
  });
});

router.post("/create", function (req, res, next) {
  const body = req.body;
  client.query(
    "INSERT INTO products(name,modelnumber,series) VALUES(?,?,?)",
    [body.name, body.modelnumber, body.series],

    function () {
      console.log(body.name);
      res.redirect("/create");
    }
  );
});
//connection

module.exports = router;
