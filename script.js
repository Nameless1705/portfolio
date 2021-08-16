// Active burger
document.querySelector('.icon-menu').addEventListener('click', function(){
    document.querySelector('.icon-menu span').classList.toggle('active');
    document.querySelector('.menu-body').classList.toggle('js');
    document.querySelector('body').classList.toggle('js');
  })



  // Timer Main
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector(".days");
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      if (t.total <= 0) {
        document.getElementById("countdown").className = "hidden";
        document.getElementById("deadline-message").className = "visible";
        clearInterval(timeinterval);
        return true;
      }
   
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
      minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
      secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock('countdown', deadline);



  //Modal Login
var modal = document.getElementById("popup-login");
var btn = document.getElementById("login-btn");
var exit = document.getElementsByClassName("close")[0];
var bd = document.querySelector('body');

btn.onclick = function() {
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
    bd.style.overflow = "hidden";
}

exit.onclick = function() {
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
    bd.style.overflow = "visible";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.opacity = "0";
        modal.style.visibility = "hidden";
        bd.style.overflow = "visible";
    }

}
