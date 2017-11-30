$(document).ready(function(){
    

    var description;
    
    //How many times is JSON retrieved?
    var retrieveNumber = 0;

    /*Retrieve weather info from OpenWeatherMap. 
      Replace ********************* with your own API key. */
    
    function getWeatherJSON() {
        retrieveNumber++;

        $.getJSON("http://api.openweathermap.org/data/2.5/forecast?id=660158&APPID=***********************", function(weatherData){
            description = "Weather: "+ weatherData.list[0].weather[0].description + " Temperature: " + Math.round(weatherData.list[0].main.temp - 273.15) + " Celsius";
        });
   
        console.log("Current weather data retrieved, this was attempt number: " + retrieveNumber);
        enterData();
            
    }


    //Insert weather data to html
    function enterData() {
        document.getElementById("weatherNow").innerHTML = description;

    }

    //Start everything and update every 10 seconds
    function run() {
        setInterval(getWeatherJSON, 3000);
    }
    
    run();
})