const express = require("express");
const connectDB = require("./config/database");

const app = express();

connectDB();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Primary routes
 */

module.export = app;
