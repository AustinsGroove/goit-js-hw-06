const minusBtn = document.querySelector(`button[data-action = "decrement"]`);
const plusBtn = document.querySelector(`button[data-action = "increment"]`);
const counter = document.querySelector(`#value`);

let counterValue = 0;

minusBtn.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = `${counterValue}`;
});
plusBtn.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = `${counterValue}`;
});
