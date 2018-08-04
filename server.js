const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var socket = require("socket.io");

const register = require("./routes/api/register");
const faq = require("./routes/api/faq");
const searchtoken = require("./routes/api/searchtoken");

const app = express();

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//db config
const db = require("./config/keys").mongoURI;

//connect to mongo
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongo db connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello world"));

//use Routes
app.use("/api/register", register);
app.use("/api/faq", faq);
app.use("/api/searchtoken", searchtoken);
//asign port no
const port = process.env.PORT || 5000;
var server = app.listen(port, () => console.log("server running at" + port));
var io = socket(server);

io.on("connection", socket => {
  console.log(socket.id);

  socket.on("SEND_MESSAGE", function(data) {
    io.emit("RECEIVE_MESSAGE", data);
  });
});
