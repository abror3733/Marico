let elBurger = document.querySelector(".header__btn")
let elNavList =document.querySelector(".navbar")

elBurger.addEventListener("click",function(){
  elNavList.classList.toggle("nav-active")
  elBurger.classList.toggle("toggle")
})
