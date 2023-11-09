const apiKey = '81554bd75927a7723480d4a665928ad1';
const button = document.getElementById('btn');
const weatherInfo = document.getElementById('weather-info');

button.addEventListener('click', function() {
  const cityName = document.getElementById('cityInput').value;

  if (!cityName) {
    alert('Enter city name');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('ERROR . City not found. Try Aagain');
      }
      return response.json();
    })
    .then(data => {
      const htmlString = `<p>The weather in ${cityName} is : ${data.weather[0].description}</p><p>The temperature is : ${data.main.temp} K</p><p>And the wind speed is : ${data.wind.speed} m/s</p>`;
      weatherInfo.innerHTML = htmlString;
    })
    .catch(error => {
      alert(error.message); 
    });
});