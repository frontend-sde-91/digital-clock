const hourElement = document.getElementById("hours");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");

function timeNoter() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    hourElement.innerText = hour;
    minuteElement.innerText = minute;
    secondElement.innerText = second;
    setTimeout(() => {
        timeNoter()
    }, 1000)
}

timeNoter()

