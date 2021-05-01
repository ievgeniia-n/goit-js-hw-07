const ulList = document.querySelector("#categories");
console.log(`В списке ${ulList.children.length} категорий`);

const itemLi = document.querySelectorAll(".item");
console.log(itemLi);

itemLi.forEach((itemLi) =>
  console.log(`Категория: ${itemLi.firstElementChild.textContent}
Количество элементов: ${itemLi.lastElementChild.children.length}`)
);
