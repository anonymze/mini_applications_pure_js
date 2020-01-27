const second_hand = document.getElementsByClassName('second')[0];
const minute_hand = document.getElementsByClassName('minute')[0];
const hour_hand = document.getElementsByClassName('hour')[0];

function set_date() {
    const now = new Date();
    const seconds = now.getSeconds();
    const seconds_degrees = ((seconds / 60) * 360) + 90; 
    second_hand.style.transition = (seconds_degrees === 90) ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    second_hand.style.transform = `rotate(${seconds_degrees}deg)`;

    const minutes = now.getMinutes();
    const minutes_degrees = ((minutes / 60) * 360) + 90;
    minute_hand.style.transition = (minutes_degrees === 90) ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    minute_hand.style.transform = `rotate(${minutes_degrees}deg)`;

    const hours = now.getHours();
    const hours_degrees = ((hours / 24) * 360) + 90;
    hour_hand.style.transition = (hours_degrees === 90) ? 'none' : 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    hour_hand.style.transform = `rotate(${hours_degrees}deg)`;
}

setInterval(set_date, 1000);