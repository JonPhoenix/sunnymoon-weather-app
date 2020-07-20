// SunnyMoon Weather App project script
// Variables declaration - Dates
// Current day var
let currentDate = moment().format('M/DD/YYYY');

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

        // API weather - current day
    }


    // if / else if / else / conditionals template

    // Ajax block - 1-day forecast

    // Ajax block - 5-day forecast

    // LocalStorage block

});