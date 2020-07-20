// SunnyMoon Weather App project script

// Function: jQuery / on-click event user - city
$(document).ready(function() {
    console.log('ready');

    // Choosing city / user's input
    $('#icon-button').on('click', function(event) {
        event.preventDefault();
        // Variable inputs and saves a city
        let cityInput = $('#input').val();
        // Variable array to contain input cities
        let inputCities = [];

        // Getting input cities
        inputCities = JSON.parse(localStorage.getItem('inputCities')) || [];
        // Pushing input cities to the empty array
        inputCities.push(cityInput);
        // Saving input cities to localStorage
        localStorage.setItem('inputCities', JSON.stringify(inputCities));

        // Calling in function
        displayWeather(cityInput);
    })

    // Daily forecast function & API
    function displayWeather(cityInput) {

        // Emptying previous data
        $('#daily-weather').empty();
        $('#five-day').empty();
        $('#day-1').empty();
        $('#day-2').empty();
        $('#day-3').empty();
        $('#day-4').empty();
        $('#day-5').empty();

        // Api open weather / cityInput / units / my api key / currentDay variable
        let currentDay = 'https://api.openweathermap.org/data/2.5/weather?q='
        + cityInput + '&units=imperial' + '&appid=f1a16cad1c18080e4ffd997bda8b2d9d';
        console.log('currentDay: ', currentDay);

        // Ajax call - then - function / 1-day forecast
        $.ajax({
            url: currentDay,
            method: 'GET',
        }).then(function(weatherResponse) {
            // Variable for weather icons
            let weatherIcons = 'http://openweathermap.org/img/wn/' 
            + weatherResponse.weather[0].icon + '.png';

            // Current day variable
            let currentDate = moment().format('M/DD/YYYY');

            // Appending daily weather details to HTML / icons, temperature, humidity, wind speed
            $('#daily-weather').append(
                "<div class='col s12 m6'>" 
                + "<h2 class='daily'>" + weatherResponse.name + " (" + currentDate + ")" + "&nbsp" 
                + "<img src='" + weatherIcons + "'>" + "</h2>"
                + "<ul class='daily'>" + "Temperature: " + weatherResponse.main.temp + " °F" + "</ul>" 
                + "<ul class='daily'>" + "Humidity: " + weatherResponse.main.humidity + " %" + "</ul>" 
                + "<ul class='daily'>" + "Wind Speed: " + weatherResponse.wind.speed + " mph" + "</ul>" 
                + "</div>"
            );

            console.log(weatherResponse);


        })

        // Ajax call block / 5-day forecast

        // LocalStorage block

    }

});