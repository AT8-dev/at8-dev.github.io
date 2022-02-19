function handleClick() {
  var e = document.getElementById('Links'); 'block' === e.style.display?e.style.display = 'none': e.style.display = 'block'
}
document.getElementById('year').innerText = (new Date).getUTCFullYear();