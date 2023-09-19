const categoriesArr = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesArr.length}`);

categoriesArr.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
