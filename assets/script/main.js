/* Acceder al boton hamburguesa a través de la clase .menu-toggle*/ 
var menuToggle = document.querySelector('.menu-burger');


/*Acceder al menú de opciones vertical , a traves  de la clase .nav-menu*/
var navMenu = document.querySelector('.nav');


/*Programa el evento click del boton  hamburguesa para alternar la visualización de la barra de menú vertical */

menuToggle.onclick = () => {
  
  navMenu.classList.toggle('active');
}

let scrollTop = document.querySelector(".scroll-up");
console.log(scrollTop);

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100) {
    scrollTop.classList.add("visible");
  } else {
    scrollTop.classList.remove("visible");
  }

})