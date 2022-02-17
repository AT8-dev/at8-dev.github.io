document.getElementById("year").innerHTML = (new Date).getUTCFullYear();
function handleClick() {
  var l = document.getElementById('Links'); 'block' === l.style.display?l.style.display = 'none': l.style.display = 'block'
}