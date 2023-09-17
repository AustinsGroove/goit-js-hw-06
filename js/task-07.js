const inputRoller = document.querySelector(`input#font-size-control`);
const text = document.querySelector(`span#text`);

inputRoller.addEventListener(`input`, (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
