const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
// middlewares
// app.use(bodyParser.json());
app.use(express.json());

app.post("/backend-api/conversation", (req, res) => {
  const message = req.query.message;
  console.log(message);
  // machine learning thing
  res.json({
    output: "2 + 2 = 4",
  });
});

// app.post("/add", function (req, res) {
//   // console.log(req.headers["authorization"]);

//   console.log(req.body);

//   res.send({
//     msg: "2 + 2 = 4",
//   });
// });

// app.get("/route-handler", function (req, res) {
//   res.json({
//     name: "Ishav",
//     age: 21,
//   });
// });

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})