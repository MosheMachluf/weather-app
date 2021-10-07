const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

const config = sqlite.open({
  filename: "weather.db",
  driver: sqlite3.Database,
});

const setup = async () => {
  const db = await config;
  await db.migrate({
    table: "weather",
    migrationsPath: "./migrations/",
  });
};
setup();

module.exports = config;
