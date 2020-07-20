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
        let cityInput = $('#input').val(); // Inputs and saves a city
        let inputCities = []; // Empty array to contain input cities

        inputCities = JSON.parse(localStorage.getItem('inputCities')) || []; // Getting input cities
        inputCities.push(cityInput); // Pushing input cities to the empty array
        localStorage.setItem('inputCities', JSON.stringify(inputCities)); // Saving input cities to localStorage

        displayWeather(cityInput); // Calling in function
    })

    // Daily forecast function & API
    function displayWeather(cityInput) {

    }

    // Empty Data

    // if / else if / else / conditionals template

    // Ajax block - 1-day forecast

    // Ajax block - 5-day forecast

    // LocalStorage block

});