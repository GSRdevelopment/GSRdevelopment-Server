const express = require("express");
const cors = require("cors");
const projectRouter = require("./Routes/projectRouter");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

//Endpoints
app.use("/api/v1/projects", projectRouter);

//Export
module.exports = app;
