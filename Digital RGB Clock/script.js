const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const meridiem = document.querySelector(".meridiem");

const getTime = () => {
    const currentTime = new Date();

    let getHours = currentTime.getHours();
    hours.innerText = textFormat(getHours);

    const getMinutes = currentTime.getMinutes();
    minutes.innerText = textFormat(getMinutes);

    const getSeconds = currentTime.getSeconds();
    seconds.innerText = textFormat(getSeconds);

    getHoursFormat();
};

const textFormat = (time) => {
    if(time < 10) {
        return `0${time}`;
    } else {
        return time;
    };
};

const getHoursFormat = () => {
    const currentTime = new Date();

    let getHours = currentTime.getHours();
    hours.innerText = textFormat(getHours);

    if (getHours > 12) {
        meridiem.innerHTML = "PM";        
    } else if (getHours < 12) {
        meridiem.innerHTML = "AM";
    };

    if (getHours === 13) {
        hours.innerText = 1;
    } else if (getHours === 14) {
        hours.innerText = 2;
    } else if (getHours === 15) {
        hours.innerText = 3;
    } else if (getHours === 16) {
        hours.innerText = 4;
    } else if (getHours === 17) {
        hours.innerText = 5;
    } else if (getHours === 18) {
        hours.innerText = 6;
    } else if (getHours === 19) {
        hours.innerText = 7;
    } else if (getHours === 20) {
        hours.innerText = 8;
    } else if (getHours === 21) {
        hours.innerText = 9;
    } else if (getHours === 22) {
        hours.innerText = 10;
    } else if (getHours === 23) {
        hours.innerText = 11;
    }
};

setInterval(getTime, 1000);