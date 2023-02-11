
var currentWeather = document.querySelector('#current-weather')
var searchBtn = document.querySelector('#search-Btn')
var fiveDayEl = document.querySelector('#fiveDay')
var windEl = document.querySelector('#wind')
var humidityEl = document.querySelector('#humidity')

// Api Key
var key = `a9854075d238a8c3e83e544ff046d4c4`

function checkLocalStorage() {
  const lastCity = localStorage.getItem('lastSearch')

  const buttonEl = document.createElement('button')
  buttonEl.textContent = lastCity
  buttonEl.addEventListener('click', function() {
    getWeather(lastCity)
  })

  buttonEl.classList.add('btn')

  document.getElementById('search-history').appendChild(buttonEl)
  
}

checkLocalStorage()

function clearHistoryDiv() {
  document.getElementById('search-history').innerHTML = ''
}

function getWeather(cityName) {
  const allSearches = JSON.parse(localStorage.getItem('city')) || []

  localStorage.setItem('lastSearch', cityName)
  localStorage.setItem('city', JSON.stringify(
    [allSearches, cityName]
  ))

  clearHistoryDiv()
  checkLocalStorage()

var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=imperial`
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      currentWeather.innerHTML = `<h3 id='title'>${data.name}</h3>
          <p>Temp: ${data.main.temp}</p>
          <p>Wind: ${data.wind.speed}</p>
          <p>Humidity: ${data.main.humidity}</p>
          <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`

var apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}&units=imperial`
    fetch(apiUrl2)
        .then(response => response.json())
        .then(fiveDay => {
          $('#fiveDay').empty()
          console.log(fiveDay.list.length)

        for (var i = 3; i < fiveDay.list.length; i += 8) {
            console.log(fiveDay.list[i])
            var card = document.createElement('div')
            card.classList.add('col-sm-2')

        var content = `
            <div class="card border-dark">
            <div id="dayOne" class="card-body">
                <h5 class="card-title">${fiveDay.list[i].dt_txt}</h5>
                  <p class="temp">Temp: ${fiveDay.list[i].main.temp}</p>
                  <p class="wind">Wind: ${fiveDay.list[i].wind.speed}</p>
                  <p class="humidity">Humidity: ${fiveDay.list[i].main.humidity}</p>
                <img src="http://openweathermap.org/img/wn/${fiveDay.list[i].weather[0].icon}@2x.png"/>
            </div>
            </div>
            `

        card.innerHTML = content
        fiveDayEl.appendChild(card)
          }
        })
    })
}
document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('#search-btn');
    searchBtn.addEventListener('click', () => {
      // Your event listener code here
    });
  });
  

