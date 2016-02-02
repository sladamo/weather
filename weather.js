$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup =

"<h1>Windy City Weather</h1>" +

  "<h3>Up-to-the Minute Weather Monitoring</h3>" + 

    "<ul><li><p>It is <b>currently</b> " + data.currently.summary + " in Chicagoland.</p></li>"
      +
    "<li><p>The <b>actual temperature</b> is " + data.currently.temperature + " degrees, with a <b>'feel-like'</b> temperature of " + data.currently.apparentTemperature + ".</p></li>"
        +
    "<li><p>The <b>high</b> for today is " + data.daily.data[0].temperatureMax + " degrees (with a feel-like high of " + data.daily.data[0].apparentTemperatureMax + ").</p></li>"
      +
    "<li><p>The <b>low</b> for today is " + data.daily.data[0].temperatureMin + " degrees (with a feel-like low of " + data.daily.data[0].apparentTemperatureMin + ").</p></li>"
    +
    "<li><p>The <b>windspeed</b> is " + data.currently.windSpeed + " miles per hour, and the <b>chance of precipitation</b> is " + data.currently.precipProbability + ".</p></li></ul>"
  +
"<h3>3-Day Forecast</h3>" +

"<ul><h4>Tomorrow</h4>" +

    "<ul><li>" + data.daily.data[1].summary +
    " The <b>high</b> will reach " + data.daily.data[1].temperatureMax + " degrees, while <b>feeling like</b> " + data.daily.data[1].apparentTemperatureMax + "." +
    " The <b>low</b> will reach " + data.daily.data[1].temperatureMin + " degrees, while <b>feeling like</b> " + data.daily.data[1].apparentTemperatureMin + "." +
    " We can expect the <b>windspeed</b> to be " + data.daily.data[1].windSpeed + " miles per hour, and the <b>chance of precipitation</b> is " + data.daily.data[1].precipProbability + ".</p></li></ul></ul>"
+
"<ul><h4>The Day After Tomorrow</h4>" +

        "<ul><li>" + data.daily.data[2].summary +
        " The <b>high</b> will reach " + data.daily.data[2].temperatureMax + " degrees, while <b>feeling like</b> " + data.daily.data[2].apparentTemperatureMax + "." +
        " The <b>low</b> will reach " + data.daily.data[2].temperatureMin + " degrees, while <b>feeling like</b> " + data.daily.data[2].apparentTemperatureMin + "." +
        " We can expect the <b>windspeed</b> to be " + data.daily.data[2].windSpeed + " miles per hour, and the <b>chance of precipitation</b> is " + data.daily.data[2].precipProbability + ".</p></li></ul></ul>"
+
"<ul><h4>The Day After The Day After Tomorrow</h4>" +

        "<ul><li>" + data.daily.data[3].summary +
        " The <b>high</b> will reach " + data.daily.data[3].temperatureMax + " degrees, while <b>feeling like</b> " + data.daily.data[3].apparentTemperatureMax + "." +
        " The <b>low</b> will reach " + data.daily.data[3].temperatureMin + " degrees, while <b>feeling like</b> " + data.daily.data[3].apparentTemperatureMin + "." +
        " We can expect the <b>windspeed</b> to be " + data.daily.data[3].windSpeed + " miles per hour, and the <b>chance of precipitation</b> is " + data.daily.data[3].precipProbability + ".</p></li></ul></ul>"
+
"<h1>You stay classy, Chicago!</h1>"

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
