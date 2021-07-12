const daysT = document.querySelector('.days')
const hoursT = document.querySelector('.hours')
const minutesT = document.querySelector('.minutes')
const secondsT = document.querySelector('.seconds')

let time = setInterval(()=>{
    let destination = new Date("Mon July 19 2021").getTime();  // Destination date
    let now = new Date().getTime(); // Current Date and time
    
    let ms = 1000;  // milliseconds
    let se = 60;    // seconds
    let mn = 60;    // minutes
    let hr = 24;    // hour
    

    let countdown = destination - now;

    let  days = Math.floor(countdown / (ms * se * mn * hr));
    
    let hours = Math.floor(countdown % (ms * se * mn * hr) / (ms * se *  mn));
    
    let minutes = Math.floor(countdown % (ms *  se * mn ) / (ms * se));
    
    let seconds = Math.floor(countdown % (ms * se) / (ms));
     
    daysT.innerHTML = days;
    hoursT.innerHTML = hours;
    minutesT.innerHTML = minutes;
    secondsT.innerHTML = seconds;



},1000)
