#! /usr/bin/env node
import { program } from "commander";
import latLoc from "./commands/latLoc.js";
import locLat from "./commands/locLat.js";
import aqiCal from "./commands/aqiCal.js";
import weather from "./commands/weather.js";

program.command("lat-loc <lat> <lon>").description("Convert latitude, longitude to location (city)").action(latLoc);
program.command("loc-lat <city>").description("Convert city (location) to latitude, longitude").action(locLat);
program.command("aqi-cal <city>").description("Provides the AQI of the location").action(aqiCal);
program.command("weather <city>").description("Provides the weather details of the location").action(weather);

program.parse();
