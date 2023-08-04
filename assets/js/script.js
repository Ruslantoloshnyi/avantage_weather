"use strict"

const weatherBlock = document.querySelector('.weather');
const weatherCityName = document.querySelector('#city-name');
const weatherImage = document.querySelector('#weather-icon-img');
const weatherTemperature = document.querySelector('#temperature');
const weatherDiscription = document.querySelector('#weather-description');
const weatherFeelsLike = document.querySelector('#feels-like');
const weatherWind = document.querySelector('#wind');

async function loadWeather(e) {      

    const server = 'https://api.openweathermap.org/data/2.5/weather?lat=46.11&lon=32.28&lang=uk&units=metric&appid=e1d3e19cb41073246379146eba6389da';
    const response = await fetch(server, {
        method: 'GET',
    });
    const responseResult = await response.json();
    console.log(responseResult);
    if (response.ok) {
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.message;
    }
}

function getWeather(data) {
    weatherTemperature.textContent = Math.round(data.main.temp) + '°C'; 
    weatherImage.src = 'https://api.openweathermap.org/img/w/' + data.weather[0].icon;
    weatherDiscription.textContent = data.weather[0].description;
    weatherFeelsLike.textContent = Math.round(data.main.feels_like) + '°C';
    weatherWind.textContent = data.wind.speed + ' м/с'   
}

loadWeather();