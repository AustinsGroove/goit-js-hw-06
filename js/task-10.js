function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const numInput = document.querySelector(`div#controls > input`);
const dataCreateBtn = document.querySelector(`button[data-create]`);
const dataDestroyBtn = document.querySelector(`button[data-destroy]`);
const divCollection = document.querySelector(`div#boxes`);

let num = 0;

numInput.addEventListener(`blur`, (ev) => {
  num = ev.currentTarget.value;
});

dataCreateBtn.addEventListener("click", () => createBoxes(num));

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const width = 30 + 10 * i;
    const height = 30 + 10 * i;
    divCollection.insertAdjacentHTML(
      `beforeend`,
      `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};"></div>`
    );
  }
}

dataDestroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  divCollection.innerHTML = "";
  numInput.value = "";
  num = 0;
}
