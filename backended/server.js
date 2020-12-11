const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => console.log(`Hello from port ${port}`));

const db =
  "mongodb+srv://Project:project123@project.s5pmb.mongodb.net/<>?retryWrites=true&w=majority";

mongoose.connect(db, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () => {
  console.log("mongoose is firing");
});

// ==============database connected=================UP

// =========== send form data to database ========= down

const Schema = mongoose.Schema;
const myFormSchema = new Schema({
  firstName: String,
  lastName: String,
  number: String,
  email: String,
  gender: String,
  howDidHearAboutUs: String,
  textarea: String,
  date: {
    type: String,
    default: new Date(Date.now()),
  },
});

const myForm = mongoose.model("myForm", myFormSchema);

app.post("/messages", (req, res) => {
  res.send(res.body);

  const newMyForm = myForm(req.body);

  newMyForm.save((error, newMyForm) => {
    if (error) {
      console.log({ status: 1, result: error });
    } else {
      console.log({ status: 1, result: newMyForm });
    }
  });
});
