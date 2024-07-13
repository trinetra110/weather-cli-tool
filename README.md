# weather-cli-tool
A Command Line Interface (CLI) tool for:
1. Accessing weather data of a location
2. Accessing AQI of a location
3. Getting coordinates of a location and vice-versa.

Setup:
1. Install [Node.js](https://nodejs.org/en/download/prebuilt-installer) on your computer
2. Create a account on [OpenWeather](https://openweathermap.org/) and go to the [API keys section](https://home.openweathermap.org/api_keys) 
3. Copy the API KEY
4. In your terminal, run: 
```bash
npm i @trinetra116/weather-cli-tool
```
5. In the file "node_modules/weather-cli-tool/api.js", and paste your API KEY like this:
```bash
const API_KEY="your API KEY";
```
6. Now you can run your cli-tool using the command:
```bash
weather <sub-command..> <arguements...>
```
7. For guidelines on how to use the tool, run: 
```bash
weather --help
```
