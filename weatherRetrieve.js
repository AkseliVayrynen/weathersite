function getWeatherJSON() {
    

    $.getJSON("http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=****************************").then(function(data) {
        console.log(data);
    });
}