const app = require("./server/app");
const createDebug = require("debug");
const chalk = require("chalk");
const debug = createDebug("app");

// Middlewares
app.use(morgan("dev"));

/**
 * Start Express server
 */

app.listen(process.env.PORT, () =>
  debug(`Server is running on port ${chalk.green(process.env.PORT)}`)
);
