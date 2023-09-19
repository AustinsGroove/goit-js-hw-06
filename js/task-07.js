const inputRoller = document.querySelector(`input#font-size-control`);
const text = document.querySelector(`span#text`);

text.style.fontSize = `${inputRoller.value}px`;

inputRoller.addEventListener(`input`, (event) => {
  text.style.fontSize = `${event.currentTarget.value}px`;
});
