const linkBalanceNav = document.querySelector("#link-balance")
const linkCategoriasNav = document.querySelector("#link-categorias")
const linkReportesNav = document.querySelector("#link-reportes")

const mostrarOcultarFiltros = document.querySelector("#mostrar-ocultar-filtros")
const formularioFiltros = document.querySelector("#formulario-filtros")

const main = document.querySelector("#main")

const cardNuevaOperacion = document.querySelector("#card-nueva-operacion")
const botonAgregarOperacion = document.querySelector("#boton-agregar-operacion")
const botonCancelarAgregarOperacion = document.querySelector("#cancelar-agregar-operacion")

const sectionCardNuevaOperacion = document.querySelector("#section-card-nueva-operacion")
const sectionCardCategorias = document.querySelector("#section-card-categorias")
const sectionCardReportes = document.querySelector("#section-card-reportes")

//MOSTRAR OCULTAR FILTROS - MENU IZQUIERDO
mostrarOcultarFiltros.addEventListener("click", ()=>{
    formularioFiltros.classList.toggle("is-hidden")
    
    if (mostrarOcultarFiltros.innerText == 'Ocultar Filtros'){
        mostrarOcultarFiltros.innerText = 'Mostrar Filtros'
    } else {
        mostrarOcultarFiltros.innerText = 'Mostrar Filtros'
    }
    
    }
 )

 //MOSTRAR OCULTAR CARD NUEVA OPERACION
 botonAgregarOperacion.onclick =()=>{
   sectionCardNuevaOperacion.classList.remove("is-hidden")
    main.classList.add("is-hidden")
 }

 botonCancelarAgregarOperacion.onclick=()=>{
    sectionCardNuevaOperacion.classList.add("is-hidden")
    main.classList.remove("is-hidden")
 }

 //MOSTRAR OCULTAR CARD CON CATEGORIAS
 linkCategoriasNav.onclick =()=>{
    sectionCardCategorias.classList.remove("is-hidden")
    main.classList.add("is-hidden")
 }

 linkBalanceNav.onclick =()=>{
    sectionCardCategorias.classList.add("is-hidden")
    sectionCardReportes.classList.add("is-hidden")
    main.classList.remove("is-hidden")
 }

 //MOSTRAR OCULTAR CARD REPORTES
 linkReportesNav.onclick =()=>{
    sectionCardReportes.classList.remove("is-hidden")
    main.classList.add("is-hidden")
    sectionCardCategorias.classList.add("is-hidden")
 }