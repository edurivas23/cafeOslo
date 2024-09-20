var lanzador = "#desp-boton";
var lista = "#listado";
var menuDesp = "menuDespl"

function nav(){
    var lanz = document.querySelector(lanzador);
    lanz.addEventListener("click",despliegaMenu, false);
}
function despliegaMenu(e){
    e.preventDefault();
    var despl = document.querySelector(lista);
    despl.classList.toggle(menuDesp);

}

document.querySelector("html").classList.add("js");
nav();
