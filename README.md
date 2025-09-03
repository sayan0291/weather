# Weather App

A simple, modern weather application that displays current weather details for any city using the OpenWeatherMap API. The UI features a clean card layout with glassmorphism styling, a live clock with AM/PM, and key details like temperature, humidity, wind speed, and feels-like temperature.

## Features
- Live local date and time with AM/PM and seconds
- Search weather by city name
- Displays temperature, humidity, wind speed, and feels-like
- Dynamic weather icon based on conditions
- Responsive, modern, glassmorphism-inspired UI

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript
- OpenWeatherMap API

## Project Structure
```
weather_app/
├── images/
│   ├── clear.png
│   ├── clouds.png
│   ├── drizzle.png
│   ├── humidity.png
│   ├── mist.png
│   ├── rain.png
│   ├── search.png
│   ├── snow.png
│   └── wind.png
├── weather.html
├── weather.css
├── weather.js
└── README.md
```

## Getting Started

### 1) Open the project
- Open `weather.html` directly in your browser, or
- Use a local development server (recommended), e.g. VS Code Live Server extension

### 2) Configure your API key
This project uses the OpenWeatherMap API. Create a free account and get an API key.
- Sign up at: https://openweathermap.org/
- Go to API keys and copy your key
- Open `weather.js` and set your key:

```js
const apikey = "YOUR_API_KEY_HERE";
```

Note: Avoid committing real API keys to public repositories. Consider storing the key in environment variables if you convert this to a server-backed app.

## Usage
1. Enter a city name in the search box
2. Click the search icon
3. View the updated weather card with temperature, humidity, wind speed, feels-like, icon, and the live local time/date

## Customization
- UI colors and styles: edit `weather.css`
- Default city on load: update the value used in `checkweather` call inside the `DOMContentLoaded` handler in `weather.js`
- Icons: replace or add images in the `images/` folder

## Notes
- Ensure you have a stable internet connection for API calls and loading icons
- API rate limits apply according to your OpenWeatherMap plan
- Time displayed is the local time of the device running the app

## Acknowledgements
- Weather data by OpenWeatherMap (`https://openweathermap.org/`)
- Icons are provided in the `images/` folder

## License
This project is open-sourced under the MIT License. Feel free to use and modify it.
