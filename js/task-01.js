const numOfCategories = document.querySelectorAll(".item");

console.log("Number of categories:", numOfCategories.length);


numOfCategories.forEach(el => {
    console.log("Category:", el.firstElementChild.textContent);
    console.log("Elements:", el.lastElementChild.children.length);
})
