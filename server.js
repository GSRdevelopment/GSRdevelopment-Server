const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

const DB = process.env.DB.replace("<password>", process.env.PASSWORD);

// Connect to DB
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("SUCCESSFULLY CONNECTED TO DB");
  });

// Start Server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening on port ${port}...`);
});
