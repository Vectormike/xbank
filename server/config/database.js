require("dotenv").config();
const mongoose = require("mongoose");
const createDebug = require("debug");
const chalk = require("chalk");
const log = console.log;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    log(`${chalk.green(`Database is connected`)}`);
  } catch (error) {
    console.log(log(`Database is not connected... ${chalk.red(error)}`));
    process.exit(1);
  }
};

module.exports = connectDB;
