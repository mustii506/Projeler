const url = 'https://api.openweathermap.org/data/2.5/';
const key = '2b1bd84c7ba1f3b6704ba91e8695583f';

const setQuery = (e) => {
    if (e.keyCode == '13') {
        getResult(searchBar.value);
    }
};

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
    
    fetch(query)
        .then(weather => {
            return weather.json();
        })  
        .then(displayResult)
        .catch(error => {
            console.error('Hata oluştu:', error);
        });
};

const displayResult = (result) => {
    let city = document.querySelector('.sehir');
    city.innerText = `${result.name}, ${result.sys.country}`;

    let temperature = document.querySelector('.sicaklik');
    temperature.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.aciklama');
   desc.innerText = result.weather[0].description;

   let minmax = document.querySelector('.minmax');
   minmax.innerText = `${(result.main.temp_min)}°C - ${(result.main.temp_max)}°C`;
};

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener("keypress", setQuery);
function büyült()
{
    document.getElementsByTagName("input")[0].style.width="300px";
    document.getElementsByTagName("input")[0].style.transition="all, 0.6s";
    document.getElementsByTagName("input")[0].style.border="2px solid white";
    document.getElementsByTagName("input")[0].style.backgroundColor="white";
    document.getElementsByTagName("input")[0].style.color="black";
    document.getElementsByTagName("input")[0].style.borderRadius="10px";
}
function daralt()
{
    document.getElementsByTagName("input")[0].style.width="200px";
    document.getElementsByTagName("input")[0].style.borderBottom="2px solid white";
    
}