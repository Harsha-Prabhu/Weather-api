// location = document.querySelector('.location');
// temperature = document.querySelector('.temperature');
// fore_desc = document.querySelector('.fore-desc');
// fore_deets = document.querySelector('.fore-deets');
timeEl = document.getElementById('time');
dateEl = document.getElementById('date');

// date = document.querySelector('.date');
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu','Fri', 'Sat'];
setInterval(() => {
    const time = new Date();
    const month = time.getMonth() ;
    const day = time.getDay();
    const date = time.getDate();
    const hour = time.getHours() ;
    const minutes = time.getMinutes() ;
    const hour24 = hour >= 13 ? hour:hour%12;
    const ampm = hour >= 12 ? 'PM':'AM';

    timeEl.innerHTML = hour24 + ':' + minutes +" " + ampm;
    dateEl.innerHTML = '<h3>' + days[day] +","+ date+" "+ months[month] +'</h3>'
},1000);

const API_key = '4f365f503b22394f46fb723d29231df6';

function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success)=>{
        console.log(success);
        var lat = success.coords.latitude;
        var lon = success.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&unit=celcius&appid=${API_key}`).then(res => res.json).then(data =>{
            console.log(data);
        })
    }
)}
 getWeatherData();

