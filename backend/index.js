const mongoose = require("mongoose");
const app = require("./app");
// const config = require("./config/config");
const express = require("express");



//Creating the express app
app.use(express.json());
// const DB_URI = config.mongoose.url
mongoose
  .connect("mongodb+srv://meroopkumar2:W4QgscLR9mZZTXUK@cluster0.txetmn4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to DB "))
  .catch(() => console.log("Failed to connect at DB at"));
app.listen(8082, () => {
  console.log(`App is running on port 8082`);
});


//W4QgscLR9mZZTXUK  -- password
