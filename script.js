const key = "2efdcc3b712b4f06a94110043231102";
const url = "http://api.weatherapi.com/v1";
const currentWeather = "/current.json?key=";
let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temperature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
    event.preventDefault();
    if (!inputBox.value) {
        alert("Please Enter The City Name.")
        return;
    }
    const city = inputBox.value;
    const fetchData = await fetch(
        `${url}${currentWeather}${key}&q=${city}`
    );
    const orgData = await fetchData.json();
    data = orgData

    countryName.innerHTML = data.location.country;
    stateName.innerHTML = data.location.region;
    cityName.innerHTML = data.location.name;
    humidity.innerHTML = data.current.humidity;
    windSpeed.innerHTML = data.current.wind_kph;
    temprature.innerHTML = data.current.temp_c;
    logoImage.src = data.current.condition.icon;
    weatherStatus.innerHTML = data.current.condition.text;
}