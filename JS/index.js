let modal = document.querySelector('.modal-screenshot');
let span = document.getElementsByClassName("close")[0];
let modalImg = document.getElementById("modal-img");



document.querySelectorAll('.screenshot').forEach(item => {
  item.onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
})

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}