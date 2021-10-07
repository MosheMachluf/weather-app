import { useState, useEffect } from "react";
import { fetchWeather } from "../services/api";
import useHttp from "../hooks/use-http";

import { Container } from "@mui/material";
import SelectArea from "./SelectArea";

const Weather = () => {
  const { sendRequest, status, data } = useHttp(fetchWeather);
  const [area, setArea] = useState("");

  useEffect(() => {
    if (status === "completed") {
    }
  }, [status]);

  const handleChange = (value) => {
    setArea(value);
    sendRequest(value.split(",")[0]);
  };

  return (
    <Container maxWidth="sm">
      <SelectArea handleChange={handleChange} area={area} />
      <h2>{area}</h2>
      {status === "completed" && (
        <div className="weather-card">
          <div className="icon">
            <img
              src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
              alt={data.main}
            />

            <h3 className="title-temp">{data.temp}&deg;</h3>
          </div>
          <div className="details">
            <ul>
              <li>{data.main}</li>
              <li>{data.description}</li>
              <li>
                <span>{data.temp_min}&deg;</span> -{" "}
                <span>{data.temp_max}&deg;</span>
              </li>
            </ul>
          </div>
        </div>
      )}
      {status === "pending" && <h2>Loading....</h2>}
    </Container>
  );
};

export default Weather;
