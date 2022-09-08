//Imports ---declarations
const express = require("express");
require("dotenv").config();
require("express-async-errors"); //Replaces user defined try catch errors in controllers.
const connectDb = require("./db/dbConfig");
const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGO_URI
const notFound = require("./middleware/notFound")
const errorHandler = require("./middleware/errorHandler")
const authRoute = require("./routes/authRoute")




const app = express();
// Middlewares
app.use(express.json());




// Routes
app.use("/api/v1/auth", authRoute);

app.use(notFound)
app.use(errorHandler)

const start = async () => {
  try {
    await connectDb(MONGODB_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

