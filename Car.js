let speed = 0;
let i;
function updateSpeed(speed) {
  {
    let x = 0;
    clearInterval(i);
    i = setInterval(() => {
      x -= speed;
      document.querySelector(".bg").style.backgroundPosition = `${x}px bottom`;
    }, 10);
    let dirn = speed >= 0 ? "normal" : "reverse";
    z = document.querySelectorAll(".Tyre")
    if (speed) {
      z.forEach(e => { e.style.animation = `rotate ${5 / Math.abs(speed)}s linear infinite`; e.style.animationDirection = dirn; })
    }
    else { z.forEach(e => { e.style.animation = "none"; }) }
  }
}
