const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

const config = sqlite.open({
  filename: "weather.db",
  driver: sqlite3.Database,
});

module.exports = config;
