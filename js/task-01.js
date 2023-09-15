// // console.log(document.querySelector("ul#categories"));
// const categoriesObj = document.querySelector("ul#categories");
// console.log(`Number of categories: ${categoriesObj.children.length}`);

// console.log(categoriesObj);

const categoriesArr = document.querySelectorAll("ul#categories>.item");
console.log(`Number of categories: ${categoriesArr.length}`);

categoriesArr.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("ul>li").length}`);
});
