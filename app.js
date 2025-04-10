let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

let hr = document.getElementById('hr');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

setInterval(() => {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  //partie numerique
  hrs.innerHTML = (hours < 10 ? '0' : '') + hours;
  min.innerHTML = (minutes < 10 ? '0' : '') + minutes;
  sec.innerHTML = (seconds < 10 ? '0' : '') + seconds;

  //partie analogique

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  hr.style.transform = `rotateZ(${hourDeg}deg)`;
  mn.style.transform = `rotateZ(${minuteDeg}deg)`;
  sc.style.transform = `rotateZ(${secondDeg}deg)`;
}, 1000);
