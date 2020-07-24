# SunnyMoon Weather App
The **"SunnyMoon"** is a weather dashboard application with search functionality to find the current weather conditions and the future weather outlook for cities around the world. The user will be able to plan a personal trip or a business trip based on the displayed data.

Technologies: HTML5, CSS3, powered by JavaScript, jQuery and the OpenWeather API

Deployment url: https://jonphoenix.github.io/sunnymoon-weather-app/


## Application Features


```
As a traveler
I want to see the weather outlook for multiple cities
so that I can plan a trip accordingly
```

How do you deliver this? Here are some guidelines:

- Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions.

- Use AJAX to hook into the API to retrieve data in JSON format.

- Your app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

- Display the following under current weather conditions:

  - City

  - Date

  - Icon image (visual representation of weather conditions)

  - Temperature

  - Humidity

  - Wind speed

  - UV index

- Include a search history so that users can access their past search terms. Clicking on the city name should perform a new search that returns current and future conditions for that city.

- Include a 5-Day Forecast below the current weather conditions. Each day for the 5-Day Forecast should display the following:

  - Date

  - Icon image (visual representation of weather conditions)

  - Temperature

  - Humidity

![weather dashboard](./Assets/06-Server-Side-APIs-homework-demo.png)

### Hints

- Create multiple functions within your application to handle the different parts of the dashboard:

  - Current conditions

  - 5-Day Forecast

  - Search history

  - UV index

- You will need to make more than one AJAX call.

- You will need to hardcode some of the parameters in the API's URL. User input will determine some of the other parameters.

- Use `localStorage` to store any persistent data.

## Minimum Requirements

- Functional, deployed application.

- GitHub repository with a unique name and a README describing the project.

- User can search for weather reports by city using the openweathermap API.

- After searching for a city, the following information is displayed:

  - Current temperature

  - Current humidity

  - Windspeed

  - Uv index

  - 5 day forecast

- Application uses icons to represent weather conditions.

- Application stores previously searched for cities in localstorage and displays them to the user.

- Application loads last searched city forecast on page load.

## Bonus

- Use the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to add the user's current location to the initial landing page.

- Add the application to your portfolio.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

- Your commit history is a signal to employers that you are actively working on projects and learning new skills.

- Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

- Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

- Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

- Don't commit half-done work, for the sake of your collaborators (and your future self!).

- Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

- The URL of the deployed application

- The URL of the GitHub repository
