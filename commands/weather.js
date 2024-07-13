import chalk from "chalk";
import axios from "axios";
import locLat from "./locLat.js";
import API_KEY from "../api.js";

async function weather(city) {
  try {
    const [lat, lon] = await locLat(city);
    const result = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=" +
        API_KEY +
        "&units=metric"
    );
    console.log(
      chalk.blue.bold("Weather condition:"),
      chalk.greenBright(result.data.weather[0].main)
    );
    console.log(
      chalk.blue.bold("Description:"),
      chalk.greenBright(result.data.weather[0].description)
    );
    console.log(
      chalk.blue.bold("Current temperature:"),
      chalk.greenBright(result.data.main.temp + " C")
    );
    console.log(
      chalk.blue.bold("Feels like:"),
      chalk.greenBright(result.data.main.feels_like + " C")
    );
    console.log(
      chalk.blue.bold("Pressure:"),
      chalk.greenBright(result.data.main.pressure + " hPa")
    );
    console.log(
      chalk.blue.bold("Humidity:"),
      chalk.greenBright(result.data.main.humidity + " %")
    );
    console.log(
      chalk.blue.bold("Visibility:"),
      chalk.greenBright(result.data.visibility + " m")
    );
    console.log(
      chalk.blue.bold("Wind speed:"),
      chalk.greenBright(result.data.wind.speed + " m/s")
    );
    console.log(
      chalk.blue.bold("Cloudiness:"),
      chalk.greenBright(result.data.clouds.all + " %")
    );
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    } else {
      console.log(error.message);
    }
  }
}

export default weather;
