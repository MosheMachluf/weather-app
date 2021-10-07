--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS "weather" (
	"id"	INTEGER UNIQUE,
	"city"	TEXT NOT NULL,
	"temp"	REAL NOT NULL,
	"feels_like"	REAL NOT NULL,
	"temp_min"	REAL NOT NULL,
	"temp_max"	REAL NOT NULL,
	"main"	TEXT NOT NULL,
	"description"	TEXT NOT NULL,
	"icon"	TEXT NOT NULL,
	"updated_at"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE weather;