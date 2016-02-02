$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup =
"<h1>Windy City Weather</h1>" +

  "<h3>Up-to-the Minute Weather Monitoring</h3>" +

    "<p>It is <b>currently</b> " + data.currently.summary + " in Chicagoland.</p>"
      +
    "<p>The <b>actual temperature</b> is reading in at " + data.currently.temperature + " degrees, with a <b>'feel-like'</b> temperature of " + data.currently.apparentTemperature + ".</p>"
        +
    "<p>The <b>high</b> today is " + data.daily.data[0].temperatureMax + " degrees (with a feel-like high of " + data.daily.data[0].apparentTemperatureMax + ").</p>"
      +
    "<p>The <b>low</b> today is " + data.daily.data[0].temperatureMin + " degrees (with a feel-like low of " + data.daily.data[0].apparentTemperatureMin + ").</p>"
    +
    "<p>The <b>windspeed</b> is " + data.currently.windSpeed + " miles per hour, and there is a " + data.currently.precipProbability + " percent <b>chance of precipitation.</b></p>"
  +
"<h3>3-Day Forecast</h3>" +

"<h4>Tomorrow</h4>" +

    "<p><b>Tomorrow, we can expect</b> " + data.daily.data[1].summary +
    " The <b>high</b> for tomorrow will reach " + data.daily.data[1].temperatureMax + " degrees, while <b>feeling like</b> " + data.daily.data[1].apparentTemperatureMax + "." +
    " The <b>low</b> for tomorrow will reach " + data.daily.data[1].temperatureMin + " degrees, while <b>feeling like</b> " + data.daily.data[1].apparentTemperatureMin + "." +
    " We can expect the <b>windspeed</b> to be " + data.daily.data[1].windSpeed + " miles per hour, and we'll have a " + data.currently.precipProbability + " percent <b>chance of precipitation.</b></p>"



    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
