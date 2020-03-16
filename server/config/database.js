const mongoose = require("mongoose");
const createDebug = require("debug");
const chalk = require("chalk");
const debug = createDebug("app");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true
    });
    debug(`${chalk.green(`Database is connected`)}`);
  } catch (error) {
    console.log(debug(`Database is not connected... ${chalk.red(error)}`));
    process.exit(1);
  }
};
