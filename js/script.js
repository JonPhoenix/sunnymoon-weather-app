// SunnyMoon Weather App project script

// Function: jQuery / on-click event user - city
$(document).ready(function() {
    
    console.log('ready');

    // Choosing city / user's input
    $('#icon-button').on('click', function(event) {
        event.preventDefault();
        // Variable - input and save a city
        let cityInput = $('#input').val();
        // Variable - array for input cities
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

        // Api call weather / cityInput / units / my api key / currentDay variable
        let currentDay = 'https://api.openweathermap.org/data/2.5/weather?q='
        + cityInput + '&units=imperial' + '&appid=f1a16cad1c18080e4ffd997bda8b2d9d';
        
        console.log('current day: ', currentDay);

        // Ajax url call - then - function / 1-day forecast
        $.ajax({
            url: currentDay,
            method: 'GET',
        }).then(function(weatherResponse) {
            // Variable for weather icons
            let weatherIcon = 'http://openweathermap.org/img/wn/' 
            + weatherResponse.weather[0].icon + '.png';

            // Current day variable
            let currentDate = moment().format('M/DD/YYYY');

            // Appending daily weather details to HTML / icons, temperature, humidity, wind speed
            $('#daily-weather').append(
                "<div class='col s12 m6'>" 
                + "<h2 class='daily'>" + weatherResponse.name + " ( " + currentDate + " )" + "&nbsp" 
                + "<img src='" + weatherIcon + "'>" + "</h2>"
                + "<ul class='daily'>" + "Temperature: " + weatherResponse.main.temp + " °F" + "</ul>" 
                + "<ul class='daily'>" + "Humidity: " + weatherResponse.main.humidity + " %" + "</ul>" 
                + "<ul class='daily'>" + "Wind Speed: " + weatherResponse.wind.speed + " mph" + "</ul>" 
                + "</div>"
            );
            
            console.log(weatherResponse);

            // Variable - coordinate latitude
            let coordinateLat = weatherResponse.coord.lat;
            // Variable - coordinate longitude
            let coordinateLon = weatherResponse.coord.lon;
            
            // Api call weather / lat&lon / units / my api key / fiveDays variable
            let fiveDays = 'https://api.openweathermap.org/data/2.5/onecall?' 
            + 'lat=' + coordinateLat + '&lon=' + coordinateLon + '&units=imperial' 
            + '&appid=f1a16cad1c18080e4ffd997bda8b2d9d';
            
            console.log('five days: ', fiveDays);

            // Ajax url call - then - function / 5-day forecast / UV Index button
            $.ajax({
                url: fiveDays,
                method: 'GET',
            }).then(function(weatherResponse) {
                // Appending UV Index inside a button to HTML daily weather details
                $('#daily-weather').append(
                    "<div class='col s12 m6'>" 
                    + "<button class='uvi-btn' id='uvIndex' class='daily'>" + "UV Index: " 
                    + weatherResponse.current.uvi + "</button>"
                    + "</div>"
                );

                // Conditionals for UV Index button colors
                if (weatherResponse.current.uvi <= 2.99) {
                    $('#uvIndex').addClass('low');
                }
                else if (weatherResponse.current.uvi <= 5.99) {
                    $('#uvIndex').addClass('moderate');
                }
                else if (weatherResponse.current.uvi <= 7.99) {
                    $('#uvIndex').addClass('high');
                }
                else if (weatherResponse.current.uvi <= 10.99) {
                    $('#uvIndex').addClass('very-high');
                }
                else if (weatherResponse.current.uvi > 11) {
                    $('#uvIndex').addClass('extreme');
                }
                
            })

        })

        // LocalStorage block for input cities

    }

});