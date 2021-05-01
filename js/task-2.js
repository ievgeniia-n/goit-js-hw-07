const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createIngredientList = (ingredient) => {
  const ingredientName = document.createElement(`li`);
  ingredientName.textContent = ingredient;
  return ingredientName;
};

const ingredientsRef = document.querySelector("#ingredients");

const ingredientList = ingredients.map((el) => createIngredientList(el));

ingredientsRef.append(...ingredientList);

console.log(ingredients);
