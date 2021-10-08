const Weather = require("./models/Weather.js");
const Utils = require("./services/Utils.js");

const cors = require("cors");
const express = require("express");
const app = express();

const dotenv = require("dotenv").config();

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const { city } = req.body;

  try {
    const weatherExist = await Weather.findInDB(city);
    if (weatherExist && Utils.isLessThan1Hour(weatherExist.updated_at)) {
      console.log("from cache");
      return res.status(200).send({ success: true, data: weatherExist });
    }

    let newInfo = await Weather.fetchInfo(city);
    if (weatherExist) {
      console.log("update");
      await Weather.update(weatherExist.id, newInfo);
    } else {
      console.log("insert");
      await Weather.insert(newInfo);
    }

    return res
      .status(200)
      .send({ success: true, data: Utils.mapDataForDB(newInfo, true) });
  } catch (err) {
    res.status(500).send({ success: false, data: err });
  }
});
console.log(process.env.API_KEY);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App run on port ${PORT}`));
