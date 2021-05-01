const inputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (e) => {
  nameOutputRef.textContent = e.target.value ? e.target.value : "незнакомец";
});
