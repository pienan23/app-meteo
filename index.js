
const apikeys='&appid=fffdb3f7f74de0730b4bc6b194f3e2be&units=metric'
const ApiUrl="https://api.openweathermap.org/data/2.5/weather?q="
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const weatherIcones=document.querySelector('.weather #weatherIcones');
// lien api : https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=fffdb3f7f74de0730b4bc6b194f3e2be&units=metric

// site https://openweathermap.org
async function weathers(city) {
  const response = await fetch(ApiUrl + city +apikeys );
  const data = await response.json();
  console.log(data);

  document.querySelector('.city').innerHTML=data.name;
  document.querySelector('.temperater').innerHTML=Math.round( data.main.temp)  +'°C';
  document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
  document.querySelector('.wind').innerHTML=data.wind.speed + " km/h";

  //utilisation des icone
  if(data.weather[0].main == "Clouds"){
    weatherIcones.src='images/clouds.png';
  }
 else if(data.weather[0].main == "Clear"){
    weatherIcones.src='images/clear.png';  
 }


 else if(data.weather[0].main == "Drizzle"){
    weatherIcones.src='images/drizzle.png';  
 }

 else if(data.weather[0].main == "Mist"){
    weatherIcones.src='images/mist.png';  
 }

 else if(data.weather[0].main == "Rain"){
    weatherIcones.src='images/rain.png';  
 }

 else if(data.weather[0].main == "Snow"){
    weatherIcones.src='images/snow.png';  
 }


}
searchBtn.addEventListener('click',()=>{
    weathers(searchBox.value);
})

    
