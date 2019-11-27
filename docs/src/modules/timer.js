//таймер на сайте
function getTimeRemaining(endtime) {

  let t = Date.parse(endtime) - Date.now();
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  // let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    // 'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  // let days = clock.querySelector('.days');
  let hours = clock.querySelector('#timer-hours');
  let minutes = clock.querySelector('#timer-minutes');
  let seconds = clock.querySelector('#timer-seconds');

  function updateClock() {
    let t = getTimeRemaining(endtime);

    // days.textContent = t.days;
    hours.textContent = ('0' + t.hours).slice(-2);
    minutes.textContent = ('0' + t.minutes).slice(-2);
    seconds.textContent = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      hours.textContent = '00';
      minutes.textContent = '00';
      seconds.textContent = '00';
    }
  }
  let timeinterval = setInterval(updateClock, 1000);
  updateClock();
}

export default initializeClock;