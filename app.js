//********ELEMENTOS DEL DOM*************** */
//MAIN
const main = document.querySelector("#main");

//BOTONES NAV
const linkBalanceNav = document.querySelector("#link-balance");
const linkCategoriasNav = document.querySelector("#link-categorias");
const linkReportesNav = document.querySelector("#link-reportes");

//MENU CELU
const burgerIcon = document.querySelector("#burger")
const navBarMenu = document.querySelector("#nav-links")
const navBarBurger = document.querySelector(".navbar-burger")

// MENU HAMBURGUESA FUNCIONALIDAD
burgerIcon.addEventListener("click", () =>{
  navBarMenu.classList.toggle("is-active")
  navBarBurger.classList.toggle("is-active")
});

//DESPLEGABLE FILTROS
const mostrarOcultarFiltros = document.querySelector(
  "#mostrar-ocultar-filtros"
);
const formularioFiltros = document.querySelector("#formulario-filtros");
const selectCategoriasFiltros = document.querySelector(
  "#select-categorias-filtros"
);

//NUEVA OPERACION
const sectionCardNuevaOperacion = document.querySelector(
  "#section-card-nueva-operacion"
);
const cardNuevaOperacion = document.querySelector("#card-nueva-operacion");
const botonAgregarOperacion = document.querySelector(
  "#boton-agregar-operacion"
);
const botonCancelarOperacion = document.querySelector(
  "#boton-cancelar-operacion"
);

//FORMULARIO NUEVA OPERACION
const selectCategoriasNuevaOperacion = document.querySelector(
  "#select-categorias-nueva-operacion"
);
const inputDescripcionNuevaOperacion = document.querySelector(
  "#input-descripcion-nueva-operacion"
);
const inputMontoNuevaOperacion = document.querySelector(
  "#input-monto-nueva-operacion"
);
const selectTipoNuevaOperacion = document.querySelector(
  "#select-tipo-nueva-operacion"
);

const inputFechaNuevaOperacion = document.querySelector(
  "#input-fecha-nueva-operacion"
);
const botonFormularioAgregarOperacion = document.querySelector(
  "#boton-formulario-agregar-operacion"
);

const contenedorGrillaOperaciones = document.querySelector(
  "#contenedor-grilla-operaciones"
);

///CATEGORIAS
const sectionCardCategorias = document.querySelector(
  "#section-card-categorias"
);
const inputAgregarCategoria = document.querySelector(
  "#input-agregar-categorias"
);
const botonAgregarCategoria = document.querySelector(
  "#boton-agregar-categoria"
);
const listadoCategorias = document.querySelector("#listado-categorias");

const sectionCardReportes = document.querySelector("#section-card-reportes");

//**********FUNCIONALIDADES: VER OCULTAR PANELES*************** */

//MOSTRAR OCULTAR FILTROS - MENU IZQUIERDO
mostrarOcultarFiltros.addEventListener("click", () => {
  formularioFiltros.classList.toggle("is-hidden");

  if (mostrarOcultarFiltros.innerText == "Ocultar Filtros") {
    mostrarOcultarFiltros.innerText = "Mostrar Filtros";
  } else {
    mostrarOcultarFiltros.innerText = "Ocultar Filtros";
  }
});

//MOSTRAR OCULTAR CARD NUEVA OPERACION
botonAgregarOperacion.onclick = () => {
  sectionCardNuevaOperacion.classList.remove("is-hidden");
  main.classList.add("is-hidden");
  sectionCardReportes.classList.add("is-hidden");
  sectionCardCategorias.classList.add("is-hidden");
};

botonCancelarOperacion.onclick = () => {
  sectionCardNuevaOperacion.classList.add("is-hidden");
  main.classList.remove("is-hidden");
};

//MOSTRAR OCULTAR CARD CON CATEGORIAS
linkCategoriasNav.onclick = () => {
  sectionCardCategorias.classList.remove("is-hidden");
  main.classList.add("is-hidden");
  sectionCardNuevaOperacion.classList.add("is-hidden");
  sectionCardReportes.classList.add("is-hidden");
};

linkBalanceNav.onclick = () => {
  sectionCardCategorias.classList.add("is-hidden");
  sectionCardReportes.classList.add("is-hidden");
  main.classList.remove("is-hidden");
  sectionCardNuevaOperacion.classList.add("is-hidden");
};

//MOSTRAR OCULTAR CARD REPORTES
linkReportesNav.onclick = () => {
  sectionCardReportes.classList.remove("is-hidden");
  main.classList.add("is-hidden");
  sectionCardCategorias.classList.add("is-hidden");
  sectionCardNuevaOperacion.classList.add("is-hidden");
};

///***************************************** */
//ARRAY LISTADO CATEGORIAS POR DEFECTO
const categorias = [
  "Comidas",
  "Servicios",
  "Salidas",
  "Educación",
  "Transporte",
  "Trabajo",
  "Salud",
];

// TRAER DATA DE LOCALSTORAGE
const obtenerCategorias = () => {
  const categoriasGuardadasEnElLocalStorage =
    localStorage.getItem("categorias");
  const categoriasGuardadasJSONaJS = JSON.parse(
    categoriasGuardadasEnElLocalStorage
  );
  if (categoriasGuardadasEnElLocalStorage === null) {
    return categorias;
  } else {
    return categoriasGuardadasJSONaJS;
  }
};

// FUNCION PARA MOSTRAR CATEGORIAS EN HTML
const agregarCategoriasAlABMDeCategorias = () => {
  const categorias = obtenerCategorias();
  const estructuraHtml = categorias.reduce((acc, elemento) => {
    return (
      acc +
      ` 
        <div class="columns" >
          <div class="column">
            <div class="columns is-vcentered is-mobile mt-4">
              <div class="column is-9">
                <p class="tag">${elemento}</p>
              </div>
              <div class="column is-3">
                <div class="columns is-justify-content-flex-end is-mobile">
                  <button class="button is-ghost is-small">Editar</button>
                  <button class="button is-ghost is-small">Eliminar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    );
  }, ``);
  listadoCategorias.innerHTML = estructuraHtml;
};
agregarCategoriasAlABMDeCategorias();

//ACTUALIZACION DE CATEGORIAS DE SELECT DE CARD FILTROS
const actualizarCategoriasSelect = () => {
  const categorias = obtenerCategorias();
  const estructuraHtml = categorias.reduce((acc, elemento) => {
    return (
      acc +
      ` 
        <option value=${elemento}>${elemento}</option>
      `
    );
  }, ``);
  selectCategoriasFiltros.innerHTML = `<option>Todos</option> ${estructuraHtml}`;
  selectCategoriasNuevaOperacion.innerHTML = `<option>Todos</option> ${estructuraHtml}`;
};

actualizarCategoriasSelect();

// BOTON AGREGAR CATEGORIA AL ABM
botonAgregarCategoria.onclick = () => {
  const categoriaAgregada = inputAgregarCategoria.value;
  inputAgregarCategoria.value = "";
  const categoriasActualizadas = obtenerCategorias();
  categoriasActualizadas.push(categoriaAgregada);

  const categoriasAJSON = JSON.stringify(categoriasActualizadas);
  localStorage.setItem("categorias", categoriasAJSON);

  agregarCategoriasAlABMDeCategorias();
  actualizarCategoriasSelect();
};

// AGREGAR NUEVA OPERACION
let operaciones = [];

const guardarEnLS = () => {
  const operacionesAJSON = JSON.stringify(operaciones);
  localStorage.setItem("operaciones", operacionesAJSON);
};

const recuperarDatosDeLS = () => {
  const operacionesGuardadasEnLS = localStorage.getItem("operaciones");
  const operacionesDelLSaJS = JSON.parse(operacionesGuardadasEnLS);

  if (operacionesGuardadasEnLS === null) {
    return operaciones;
  } else {
    return operacionesDelLSaJS;
  }
};
recuperarDatosDeLS();

const mostrarOperacionesEnHTML = () => {
  operaciones = recuperarDatosDeLS();
  const estructuraHTML = operaciones.reduce((acc, elemento, index) => {
    return (
      acc +
      `
          <div class="columns is-align-items-center">
            <div class="column is-3 has-text-weight-semibold">   
              <p>${elemento.descripcion}</p>
            </div>
            
            <div class="column is-3 ">   
              <p class="tag">${elemento.categoria}<p>
            </div>
  
            <div class="column is-2 has-text-right">
              <p class="has-text-grey">${elemento.fecha}</p>
            </div>
  
            <div class="column is-2 has-text-right is-align-items-center has-text-danger has-text-weight-bold ">
              <p>$${elemento.monto}</p>
            </div>
               
            <div class="column is-2 has-text-right">   
              <p>
                <button class="button is-ghost is-small boton-editar" id="boton-editar-${index}">Editar</button>
                <button class="button is-ghost is-small boton-eliminar" id="boton-eliminar-${index}">Eliminar</button>
              </p>
            </div>
          </div>    
        `
    );
  }, ``);

  contenedorGrillaOperaciones.innerHTML = estructuraHTML;
};
mostrarOperacionesEnHTML();

//hacer funcion auxiliar para mostrar las operaciones pusheadas al array en el HTML
const contenedorImgTextoOperaciones = document.querySelector(
  "#contenedor-img-y-textos-operaciones"
);
const titulosGrillaOperaciones = document.querySelector(
  "#titulos-grilla-operaciones"
);

botonFormularioAgregarOperacion.onclick = (e) => {
  e.preventDefault();
  operacionesPusheadas = operaciones.push({
    descripcion: `${inputDescripcionNuevaOperacion.value}`,
    monto: `${inputMontoNuevaOperacion.value}`,
    tipo: `${selectTipoNuevaOperacion.value}`,
    categoria: `${selectCategoriasNuevaOperacion.value}`,
    fecha: `${inputFechaNuevaOperacion.value}`,
  });

  contenedorImgTextoOperaciones.classList.add("is-hidden");
  titulosGrillaOperaciones.classList.remove("is-hidden");
  sectionCardNuevaOperacion.classList.add("is-hidden");
  main.classList.remove("is-hidden");

  guardarEnLS();
  recuperarDatosDeLS();
  mostrarOperacionesEnHTML();
};
