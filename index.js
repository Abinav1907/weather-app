const apikey = "0479c1ee8fbc92adb2556153e68b947a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const weathericon = document.querySelector(".weather-icon");
const searchbtn = document.querySelector(".search button");
async function checkweather(city){
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.opacity = "1";
    document.querySelector(".error").style.visibility = "visible";
  }else{
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp)   + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if(data.weather[0].main=="Clouds"){
    weathericon.src = "images/clouds.png";
  }
  else if(data.weather[0].main=="Clear"){
    weathericon.src = "images/clear.png";
  }
  else if(data.weather[0].main=="Rain"){
    weathericon.src = "images/rain.png";
  }
  else if(data.weather[0].main=="Drizzle"){
    weathericon.src = "images/drizzle.png";
  }
  else if(data.weather[0].main=="Mist"){
    weathericon.src = "images/mist.png";
  }
  else if(data.weather[0].main=="Snow"){
    weathericon.src = "images/snow.png";
  }
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
  document.querySelector(".error").style.opacity = "0";
  document.querySelector(".weather").style.opacity = "1";
  document.querySelector(".weather").style.visibility = "visible";
}
  
  

}

searchbtn.addEventListener("click", ()=>{
  checkweather(search.value);
})