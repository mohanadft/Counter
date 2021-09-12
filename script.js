let counter = document.querySelector(".counter"),
  counterText = 0;

counter.textContent = counterText;

function increase() {
  counterText++;
  counter.textContent = counterText;
}

function decrease() {
  counterText--;
  counter.textContent = counterText;
}

function reset() {
  counterText = 0;
  counter.textContent = counterText;
}
