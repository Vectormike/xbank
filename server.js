require("dotenv").config();
const app = require("./server/app");
const createDebug = require("debug");
const chalk = require("chalk");
const debug = createDebug("app");
const log = console.log;

//const PORT = process.env.PORT || 5000;

/**
 * Start Express server
 */

app.listen(process.env.PORT, () =>
  log(`${chalk.green(`Server is running on port ${process.env.PORT}`)}`)
);
