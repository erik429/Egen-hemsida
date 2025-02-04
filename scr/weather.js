const apiKey = 'a9f2409c3a1b8942ab32e7cd54223e97';
const weatherContainer = document.getElementById('weather-info');

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=${apiKey}`);
        const data = await response.json();

        if (response.ok) {
            const weatherHTML = `
                <p>Temperatur: ${data.main.temp} &deg;C</p>
                <p>${data.weather[0].description}</p>
                <p>Vindhastighet: ${data.wind.speed} m/s</p>
            `;
            weatherContainer.innerHTML = weatherHTML;
        } else {
            weatherContainer.innerHTML = `<p>Misslyckades att hämta väderdata: ${data.message}</p>`;
        }
    } catch (error) {
        weatherContainer.innerHTML = `<p>Fel vid hämtning av väderdata!</p>`;
        console.error(error);
    }
}

fetchWeather();
