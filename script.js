$(document).ready(function(){
var lat;
var long;
var fTemp;
var cTemp;
  $.getJSON("http://ip-api.com/json", function(data2){
    lat = data2.lat;
    long= data2.lon;
     
    var api= "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=a0021476b75389ad37c9b7d0b0ef71e2"    
  $.getJSON(api, function(data){
  //alert(data.coord.lat);
    var city = data.name;
    var weatherType = data.weather[0].description;
    var kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var tempSwap = true;
    
    fTemp = (kTemp*(9/5)-459.67).toFixed(1);
    cTemp = (kTemp-273).toFixed(1);
    //console.log(city);
    //console.log(api);
    $("#city").html(city);
    $("#weatherType").html(weatherType);
    $("#fTemp").html(fTemp+" &#8457;");
    windSpeed= (2.237*(windSpeed)).toFixed(1);
    $("#windSpeed").html(windSpeed+" mph");
    
    if (fTemp> 80){
        $("body").css("background-image","url(https://images.unsplash.com/23/beach-tracks.JPG)")
      }
      else if (fTemp>70 ){
        $("body").css("background-image","url(https://images.unsplash.com/photo-1475067960556-0c046647639b)")
      }
      else if (fTemp >10){
        $("body").css("background-image","url(https://images.unsplash.com/photo-1473157548731-112b3b175783)")
      }
    
    $("#fTemp").click(function(){
      if (tempSwap === false){
        $("#fTemp").html(fTemp+" &#8457;");
        tempSwap = true;
      }
      else{
        $("#fTemp").html(cTemp+" &#8451;");
        tempSwap=false;
      }
    });
  }); 
  });
 });