$(document).ready(function(){
    

    
    //How many times has JSON been retrieved?
    var retrieveNumber = 0;
    
    var temperature;
    var weatherId;
    
    //Gets JSON data from OpenWeatherMap. Replace ********************* with your own API key.
    function getWeatherJSON() {
        retrieveNumber++;
        
        $.getJSON(" http://api.openweathermap.org/data/2.5/forecast?id=660158&APPID=****************************", function(weatherData) {
            temperature = Math.round(weatherData.list[0].main.temp - 273.15);
            weatherId = weatherData.list[0].weather[0].id;
        });
    

        console.log("Current weather data retrieved, this was attempt number: " + retrieveNumber + " and the id is: " + weatherId);
        enterData();
        handleWeatherIcon(weatherId);
            
    }
    
    
    //Handles the received id for weather and inserts an according icon. Only "usual" weather conditions are handled, thus we leave extremes out. 
    function handleWeatherIcon(id) {
        var iconSource;

        if (id >= 200 && id <= 232) { //Thunderstorms
            console.log("Thunderstorms");
            iconSource = "http://openweathermap.org/img/w/11d.png";
            
        } else if (id >= 300 && id <= 321) { //Drizzle
            console.log("Drizzle");
            iconSource = "http://openweathermap.org/img/w/09d.png";
            
        } else if (id >= 500 && id <= 531) { //Rain 
            console.log("Rain");
            iconSource = "http://openweathermap.org/img/w/09d.png";
            
        } else if (id >= 600 && id <= 622) { //Snow
            console.log("Snow");
            iconSource = "http://openweathermap.org/img/w/13d.png";
            
        } else if (id === 800) { //Sunny
            console.log("Sunny");
            iconSource = "http://openweathermap.org/img/w/01d.png";
            
        } else if (id ==== 801) { //Few clouds
            console.log("Few clouds");
            iconSource = "http://openweathermap.org/img/w/02d.png";
            
        } else if (id >= 802 && id <= 804) { //Clouds
            console.log("Clouds");
            iconSource = "http://openweathermap.org/img/w/03d.png";
            
        } else {
            console.log("The id received from OpenWeatherMap could not be used at this time. There might be some extreme conditions going on, for instance. This can also occur when the weather data is retrieved for the first time.");
        }
        
        if (iconSource != undefined) {
            document.getElementById("weatherIcon").src = iconSource;
        }
    }


    //Insert weather data to html
    function enterData() {
        document.getElementById("temperature").innerHTML = temperature + " °C";
    }

    //Start everything and update every 3 seconds
    function run() {
        setInterval(getWeatherJSON, 3000);
    }
    
    run();
})