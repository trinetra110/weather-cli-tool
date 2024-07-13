import chalk from "chalk";
import axios from "axios";
import API_KEY from "../api.js";

async function locLat(city) {
  try {
    const result = await axios.get(
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
        city +
        "&limit=1&appid=" +
        API_KEY
    );
    console.log(
      chalk.blue.bold("Latitude:"),
      chalk.greenBright(result.data[0].lat),
      chalk.blue.bold("\nLongitude:"),
      chalk.greenBright(result.data[0].lon)
    );
    return [result.data[0].lat, result.data[0].lon];
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    } else {
      console.log(error.message);
    }
  }
}

export default locLat;
