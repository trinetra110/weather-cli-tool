import chalk from "chalk";
import axios from "axios";
import API_KEY from "../api.js";

async function latLoc(lat, lon) {
  try {
    const result = await axios.get(
      "http://api.openweathermap.org/geo/1.0/reverse?lat=" +
        lat +
        "&lon=" +
        lon +
        "&limit=1&appid=" +
        API_KEY
    );
    console.log(
      chalk.blue.bold("Location:"),
      chalk.greenBright(result.data[0].name),
    );
  } catch (error) {
    if (error.response) {
      console.log(error.response);
    } else {
      console.log(error.message);
    }
  }
}

export default latLoc;
