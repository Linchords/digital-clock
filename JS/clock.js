'use strict'

const date = new Date();

let hrs = document.getElementById('hrs');
let min = document.getElementById('mins');
let sec = document.getElementById('sec');
let dateElement = document.getElementById('date');


function getDayName(dayIndex) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex];
}


function getMonthName(monthIndex) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
}

setInterval(() => {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let period = "AM";

    if (hours >= 12) {
        period = "PM";
    }

    hours = hours % 12;
    hours = hours ? hours : 12; 

    hrs.innerHTML = hours.toString().padStart(2, '0');
    min.innerHTML = currentTime.getMinutes().toString().padStart(2, '0');
    sec.innerHTML = currentTime.getSeconds().toString().padStart(2, '0');

    let periodElement = document.getElementById('period');
    if (!periodElement) {
        periodElement = document.createElement('span');
        periodElement.id = 'period';
        document.getElementById('clock').appendChild(periodElement);
    }
    periodElement.innerHTML = ` ${period}`;

    let dayName = getDayName(currentTime.getDay());
    let day = currentTime.getDate().toString().padStart(2, '0');
    let monthName = getMonthName(currentTime.getMonth());
    let year = currentTime.getFullYear();

    dateElement.textContent = `${dayName} ${day} ${monthName} ${year}`;

}, 1000);

