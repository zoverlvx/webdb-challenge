const express = require("express");
const configureMiddleware = require("../config/middleware");

/*
const projectRouter = require("../routes/projectRouter");
const actionRouter = require("../routes/actionRouter");
*/

// Server initialization
const server = express();

//Middleware
configureMiddleware(server);

//Routes
/*
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);
*/

module.exports = server;
