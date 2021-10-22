const openMenu = document.querySelector(".hamburger-menu");
const btnBurger = document.querySelector(".close");

console.log(btnBurger);
console.log(openMenu);

btnBurger.addEventListener("click",function(){
  openMenu.addClass("active");
});
