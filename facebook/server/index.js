const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const URI = "connect uri put it here";

app.use(express.json())
app.use(cors());

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const db = mongoose.connection;

Schema = mongoose.Schema;

let detail = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  }
});
 
var user = mongoose.model("detail", detail);

app.get('/', (req, res) => {
  res.json({
    messsage: "yo"
  })
});

app.post('/details', (req, res) => {
    console.log(req.body.email.toString() + " " + req.body.password.toString());
    new user({
      email: req.body.email,
      password: req.body.password
    }).save(function(err, doc) {
      if (err) res.json(err)
      else console.log('worked')
    });
});

app.listen('5000', () => {
  console.log('listening on port 5000!');
});