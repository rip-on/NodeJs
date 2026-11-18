const button = document.getElementById('search-button');
const input = document.getElementById('input-city');

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(cityName) {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=d913058932504023b9d14026261811&q=${cityName}&aqi=yes`);
    return await promise.json();

}

button.addEventListener("click", async()=>{
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    cityName.innerText = `${result.location.name}, ${result.location.region} ${result.location.country}`;
    cityTime.innerText = `${result.location.localtime}`;
    cityTemp.innerText = `${result.current.temp_c}°C`;
    document.getElementById("root").innerHTML = `<h3>${result.current.condition.text}</h3>`
    document.getElementById('humid').innerHTML = `Humidity: ${result.current.humidity}`
    document.getElementById("pic").src = `https:${result.current.condition.icon}`;
});  

