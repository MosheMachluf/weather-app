const fetch = require("node-fetch");
const dbPromise = require("../db/connection.js");
const Utils = require("../services/Utils.js");

const API_KEY = process.env.API_KEY;

class Weather {
  static async findInDB(city) {
    const db = await dbPromise;
    const result = await db.all("SELECT * FROM weather WHERE city = ?", [city]);
    return result[0];
  }

  static async fetchInfo(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    return await response.json();
  }

  static async insert(data) {
    const db = await dbPromise;
    const sql = "INSERT INTO weather VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ? );";
    const result = await db.run(sql, Utils.mapDataForDB(data));
    return result;
  }

  static async update(id, newData) {
    const db = await dbPromise;
    const sql = `UPDATE weather SET city=?, temp=?, feels_like=?, temp_min=?, temp_max=?, main=?, description=?, icon=? updated_at=? WHERE id=?`;
    const result = await db.run(sql, [
      ...Utils.mapDataForDB(newData, false, false),
      id,
    ]);

    return result;
  }
}

module.exports = Weather;
