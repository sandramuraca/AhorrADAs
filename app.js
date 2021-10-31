//MOSTRAR OCULTAR FILTROS - MENU IZQUIERDO
const mostrarOcultarFiltros = document.querySelector("#mostrar-ocultar-filtros")
const formularioFiltros = document.querySelector("#formulario-filtros")

mostrarOcultarFiltros.addEventListener("click", ()=>{
    formularioFiltros.classList.toggle("is-hidden")
    
    if (mostrarOcultarFiltros.innerText == 'Ocultar Filtros'){
        mostrarOcultarFiltros.innerText = 'Mostrar Filtros';
         } else {
            mostrarOcultarFiltros.innerText == 'Ocultar filtros';
         }
     }
 )