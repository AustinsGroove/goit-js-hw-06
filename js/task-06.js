const textInput = document.querySelector(`input#validation-input`);

textInput.addEventListener("blur", (ev) => {
  if (
    ev.currentTarget.value.length ===
    parseInt(textInput.getAttribute(`data-length`))
  ) {
    textInput.setAttribute(`class`, `valid`);
  } else {
    textInput.setAttribute(`class`, `invalid`);
  }
});
