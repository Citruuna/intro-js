function ticToc() {
  let HOURHAND = document.getElementById("hour");
  let MINUTEHAND = document.getElementById("minute");
  let SECONDHAND = document.getElementById("second");
  /** declaring the time */
  const date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  /**declaring the positions */
  let hrPosition = (hr * 360) / 12 + ((min / 60) * 360) / 12;
  let minPosition = (min * 360) / 60 + (sec * 360) / 60 / 60;
  let secPosition = (sec * 360) / 60;

  setInterval(function() {
    secPosition += 6;
    minPosition += sec / 60;
    hrPosition += hr / 60;
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
  }, 1000);
}
