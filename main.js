const API_KEY = 'd2d0f041449845cda0b184213241704';
//http://api.weatherapi.com/v1/current.json?key=d2d0f041449845cda0b184213241704&q=London
const form = document.querySelector("#form");
const input = document.querySelector("#input_city");
const header = document.querySelector(".head");
let query;
let city;

form.onsubmit = function(e){
    e.preventDefault();
    city = input.value.trim();
    query = `//api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    console.log(city);

    fetch(query).then((response)=>{
        return response.json()
    })
    .then((data)=>{
        const lastCard = document.querySelector(".card");
        if(lastCard) lastCard.remove();
        if(data.error){
            const html = `<div class="card">${data.error.message}</div>`;
            header.insertAdjacentHTML("afterend", html);
        }
        else {
        console.log(data);
        console.log(data.location.name);
        console.log(data.location.country);
        console.log(data.current.temp_c);
        console.log(data.current.condition.text);
        
        const html = `<div class="card"> 
           <div class="card_sity">
            <h2>${data.location.name}<span>${data.location.country}</span></h2>
           </div>
           <div class="card_weather">
            <div class="card_value">${data.current.temp_c}<sup>°С</sup></div>
            <img class="card_image" src="/WEATHER.io/pictures/Weather_icon.png" alt="Weather_icon">
           </div>
           <div class="card_description">${data.current.condition.text}</div>
           </div>`;
        header.insertAdjacentHTML("afterend", html);
         }
         })
}

