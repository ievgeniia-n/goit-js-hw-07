const valueRef = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);

let counterValue = 0;
const changeCurrentValue = () => {
  valueRef.textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
};
const decrement = () => {
  counterValue -= 1;
};

incrementBtn.addEventListener("click", () => {
  increment();
  changeCurrentValue();
});

decrementBtn.addEventListener("click", () => {
  decrement();
  changeCurrentValue();
});
