const textInput = document.querySelector(`input#name-input`);
const textOutput = document.querySelector(`span#name-output`);

textInput.addEventListener("input", (ev) => {
  textOutput.textContent = ev.currentTarget.value;
  if (ev.currentTarget.value === "") {
    textOutput.textContent = "Anonymous";
  }
});
