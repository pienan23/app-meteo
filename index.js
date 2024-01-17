
const apikeys='&appid=fffdb3f7f74de0730b4bc6b194f3e2be&units=metric'
const ApiUrl="https://api.openweathermap.org/data/2.5/weather?q="
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');

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

}
searchBtn.addEventListener('click',()=>{
    weathers(searchBox.value);
})

    
