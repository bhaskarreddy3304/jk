const apikey = "b70b8c7ee4ce549fc371c07a3f7b8204";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "https://graph.org/file/be4e9603966f71f8c6927.jpg5";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "https://graph.org/file/2b743f6073c923e806e23.jpg";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "https://graph.org/file/b41aa2916b02c18d91b49.jpg";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "https://graph.org/file/b41aa2916b02c18d91b49.jpg";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "https://graph.org/file/b41aa2916b02c18d91b49.jpg";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
