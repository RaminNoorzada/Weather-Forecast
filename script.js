// Global Variables

var searchHistory = [];
var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = 'a9854075d238a8c3e83e544ff046d4c4';

var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#serach-input');
var forecastContainer = document.querySelector('#forecast');

var todayContainer = document.querySelector('#today');
var searchHistoryContainer = document.querySelector('#history');
// Timezone plugins to day.js
dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugins_timezone);

function renderSearchHistory() {
    searchHistoryContainer.innerHTML = '';

    // Updates history to show recent search input 
    for (var i = searchHistory.length -1; i >= 0; i --) {
        var btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.setAttribute('today forecast');
        btn.classList.add('btn-history');

        // Search for city data by name
        btn.setAttribute('data-search', searchHistory[i]);
        btn.textContent = searchHistory[i];
        searchHistoryContainer.append(btn);
    }
}

// Update history in local storage
function appendToHistory(search) {

    if (searchHistory.indexOf(search) !== -1) {
        return;
    }
    searchHistory.push(search);
    
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
}

function initSearchHistory() {
    //
    //
    //

    //
}
// Function for current weathr data fieched from weather ipi
function renderCurrentWeather(city, weather) {
    var date = day.js().format('M/D/YYYY')
    //
    var tempF = weather.main.temp;
    var windMph = weather.wind.speed;
    var humidity =weather.main.humidity;
    var iconUrl = `https://openweathermap.org/img/w/${weather.weather[0].icon.png}`;
    var iconDescription =weather.weather[0].Description || weather[0].main;


}