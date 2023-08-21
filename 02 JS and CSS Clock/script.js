const hourHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setDate(){
    const now = new Date();

    // second degrees
    const second = now.getSeconds();
    const secondDegrees = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    // minute degrees
    const mins = now.getMinutes();
    const minuteDegrees = ((mins / 60) * 360) + ((second / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minuteDegrees}deg)`;

    // hour degrees
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();