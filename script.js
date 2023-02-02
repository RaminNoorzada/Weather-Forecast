// Global Variables

var searchHistory = [];
var weatherApiRootUrl = 'https://api.openweathermap.org';
var weatherApiKey = 'a9854075d238a8c3e83e544ff046d4c4';

var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#serach-input');
var forecastContainer = document.querySelector('#forecast');

var todayContainer = document.querySelector('#today');
var searchHistoryContainer = document.querySelector('#history');

// 14
// 15 

function renderSearchHistory() {
    searchHistoryContainer.innerHTML = '';
}