const timeNodes = document.querySelectorAll('[data-time]');

const timeArray = Array.from(timeNodes);
const seconds = timeArray.map(time => time.dataset.time)
            .map(num => num.split(":"))
            .map(splitTime => splitTime[0]*60 + parseInt(splitTime[1]));

let total = seconds.reduce((total,current) => total + current);

const hours = Math.floor(total/3600);
total = total % (60*60);
const minutes = Math.floor(total / 60)
const totalSeconds = total % 60;
console.log(hours +":" + minutes + ":" + totalSeconds);