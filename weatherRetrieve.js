$(document).ready(function(){
    

    
    //How many times is JSON retrieved?
    var retrieveNumber = 0;

    /*Retrieve weather info from OpenWeatherMap. 
      Replace ********************* with your own API key. */
    
    var description;
    var temperature;
    
    function getWeatherJSON() {
        retrieveNumber++;
        
        $.getJSON("http://api.openweathermap.org/data/2.5/forecast?id=**********************", function(weatherData) {
            temperature = Math.round(weatherData.list[0].main.temp - 273.15);
            description = weatherData.list[0].weather[0].description;
        });
    

        console.log("Current weather data retrieved, this was attempt number: " + retrieveNumber);
        enterData();
            
    }


    //Insert weather data to html
    function enterData() {
        document.getElementById("temperature").innerHTML = temperature + " °C";
        document.getElementById("description").innerHTML = description;
    }

    //Start everything and update every 10 seconds
    function run() {
        setInterval(getWeatherJSON, 3000);
    }
    
    run();
})