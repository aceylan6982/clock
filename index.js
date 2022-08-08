setInterval(setClock,1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const clockEl = document.getElementById("clock-el")

function setClock() {
   
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; 
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
    clockEl.innerHTML = ` Time : ${(hoursRatio *12).toFixed(0)}: ${(minutesRatio*60).toFixed(0)}: ${(secondsRatio*60).toFixed(0)}`
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360)
    
} 


setClock()

