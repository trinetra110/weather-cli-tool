import chalk from "chalk";
import axios from "axios";
import API_KEY from "../api.js";
import locLat from "./locLat.js";

async function aqiCal(city) {
  try {
    const [lat, lon] = await locLat(city);
    const result = await axios.get(
      "http://api.openweathermap.org/data/2.5/air_pollution?lat=" +
        lat +
        "&lon=" +
        lon +
        "&limit=1&appid=" +
        API_KEY
    );
    const aqi = result.data.list[0].main.aqi;
    var st = "";
    if (aqi == 1) {
      st = " (Good)";
    } else if (aqi == 2) {
      st = " (Fair)";
    } else if (aqi == 3) {
      st = " (Moderate)";
    } else if (aqi == 4) {
      st = " (Poor)";
    } else if (aqi == 5) {
      st = " (Very Poor)";
    }
    console.log(chalk.blue.bold("AQI:"), chalk.greenBright(aqi + st));
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    } else {
      console.log(error.message);
    }
  }
}

export default aqiCal;
