const openMenu = document.querySelector(".hamburger-menu");
const btnBurger = document.querySelector(".fas.fa-bars");
const btnClose = document.querySelector(".close");


btnBurger.addEventListener("click",function(){
  openMenu.classList.add("active");
  console.log("Ho cliccato, lo giuro");
});

btnClose.addEventListener("click",function(){
  openMenu.classList.remove("active");
  console.log("Ho cliccato, lo giuro");
});

