class Utils {
  static isLessThan1Hour(date) {
    const NOW = Date.now();
    const ONE_HOUR = 60 * 60 * 1000;

    if (NOW - date < ONE_HOUR) {
      return true;
    }

    return false;
  }

  static mapDataForDB(data, obj = false, isNew = true) {
    const mappedData = {
      id: null,
      city: data.name,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      main: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      updated_at: Date.now(),
    };

    if (!isNew) {
      delete mappedData.id;
    }

    if (obj) {
      return mappedData;
    }

    return Object.values(mappedData);
  }
}

module.exports = Utils;
