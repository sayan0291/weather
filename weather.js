// https://api.openweathermap.org/data/2.5/weather?q=Haldia&appid=376c9d7ac8cd10ed33b5c01e02d3b7f1&units=metric

const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric"
const apikey = "376c9d7ac8cd10ed33b5c01e02d3b7f1"

let temp = document.querySelector('.temp')
let main = document.querySelector('.main')
let humidity = document.querySelector('.humidity')
let wind_speed = document.querySelector('.wind_speed')
let feels = document.querySelector('.feels_like')
let pressure = document.querySelector('.pressure')
const search = document.querySelector('.material-symbols-outlined')
const search_city = document.querySelector('.search-city')
let weathericon = document.querySelector('.weather-icon')
let city_name = document.querySelector('.city-name')


async function checkweather(city) {
    const response = await fetch(apiurl + `&q=${city}` + `&appid=${apikey}`)
    let data = await response.json();
    
    if(data.cod == "404"){
        alert("Enter a Valid City Name")
        return;
    }

    

    if (data.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Humidity") {
        weathericon.src = "images/humidity.png";
    } else if (data.weather[0].main == "Snow") {
        weathericon.src = "images/snow.png";
    } else if (data.weather[0].main == "Wind") {
        weathericon.src = "images/wind.png";
    } else if (data.weather[0].main == "Mist") {
        weathericon.src = "images/mist.png";
    } else {
        weathericon.src = "images/mist.png";
    }
    
    city_name.textContent = `${city}`;
    temp.textContent = `${Math.round(data.main.temp)}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    feels.textContent = `${Math.round(data.main.feels_like)}°C`;
    wind_speed.textContent = `${Math.round(data.wind.speed)}km/h`;
    main.textContent = `${data.weather[0].main}`;
    pressure.textContent = `${data.main.pressure}mb`;
}

document.addEventListener('DOMContentLoaded', () => {
    checkweather("Haldia")
})

search.addEventListener('click',function(){
    const city = search_city.value.trim();
    checkweather(city);
})

//default city name and add more data as output you are not a discover