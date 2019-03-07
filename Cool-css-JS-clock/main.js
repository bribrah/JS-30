
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const secondsDegrees = ((seconds/60) * 360) + 90;
    const minuteDegrees = ((minutes/60) * 360) + 90;
    const hourDegrees = ((hours/12) * 360) + 90;
    if (secondsDegrees === 90){
        secondHand.style.transition = 'all 0.0s';
    }
    else{
        secondHand.style.transition = 'all 0.1s cubic-bezier(0, -0.08, 0, 2.5)';
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate,1000)