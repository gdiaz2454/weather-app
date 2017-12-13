function weather(){var cities = $("#city").val();
console.log(cities);
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ cities +"&appid=576f05e853872c59636f966e192ba478", function (w){
  var temp = w.main.temp;
  $("#temp").html(temp)
  console.log(w.main.temp)
  var wind = w.wind.speed;
  $("#wind").html(wind)
  console.log(w.wind)
});
}
