const linkBalanceNav = document.querySelector("#link-balance");
const linkCategoriasNav = document.querySelector("#link-categorias");
const linkReportesNav = document.querySelector("#link-reportes");

const mostrarOcultarFiltros = document.querySelector(
  "#mostrar-ocultar-filtros"
);
const formularioFiltros = document.querySelector("#formulario-filtros");
const selectCategoriasFiltros = document.querySelector("#select-categorias-filtros");

const main = document.querySelector("#main");

const cardNuevaOperacion = document.querySelector("#card-nueva-operacion");
const botonAgregarOperacion = document.querySelector(
  "#boton-agregar-operacion"
);
const botonCancelarOperacion = document.querySelector(
  "#boton-cancelar-operacion"
);

const sectionCardNuevaOperacion = document.querySelector(
  "#section-card-nueva-operacion"
);


const selectCategoriasNuevaOperacion = document.querySelector("#select-categorias-nueva-operacion");
const inputDescripcionNuevaOperacion = document.querySelector("#input-descripcion-nueva-operacion");
const inputMontoNuevaOperacion = document.querySelector("#input-monto-nueva-operacion");
const selectTipoNuevaOperacion = document.querySelector("#select-tipo-nueva-operacion");

const inputFechaNuevaOperacion = document.querySelector("#input-fecha-nueva-operacion");
const botonFormularioAgregarOperacion = document.querySelector("#boton-formulario-agregar-operacion");



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

//MOSTRAR OCULTAR FILTROS - MENU IZQUIERDO
mostrarOcultarFiltros.addEventListener("click", () => {
  formularioFiltros.classList.toggle("is-hidden");

  if (mostrarOcultarFiltros.innerText == "Ocultar Filtros") {
    mostrarOcultarFiltros.innerText = "Mostrar Filtros";
  } else {
    mostrarOcultarFiltros.innerText = "Mostrar Filtros";
  }
});

//MOSTRAR OCULTAR CARD NUEVA OPERACION
botonAgregarOperacion.onclick = () => {
  sectionCardNuevaOperacion.classList.remove("is-hidden");
  main.classList.add("is-hidden");
};

botonCancelarOperacion.onclick = () => {
  sectionCardNuevaOperacion.classList.add("is-hidden");
  main.classList.remove("is-hidden");
};

//MOSTRAR OCULTAR CARD CON CATEGORIAS
linkCategoriasNav.onclick = () => {
  sectionCardCategorias.classList.remove("is-hidden");
  main.classList.add("is-hidden");
};

linkBalanceNav.onclick = () => {
  sectionCardCategorias.classList.add("is-hidden");
  sectionCardReportes.classList.add("is-hidden");
  main.classList.remove("is-hidden");
};
//MOSTRAR OCULTAR CARD REPORTES
linkReportesNav.onclick = () => {
  sectionCardReportes.classList.remove("is-hidden");
  main.classList.add("is-hidden");
  sectionCardCategorias.classList.add("is-hidden");
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
      acc  +
      ` 
        <option value=${elemento}>${elemento}</option>
      `
    );
  }, ``);
  selectCategoriasFiltros.innerHTML = `<option>Todos</option> ${estructuraHtml}`;
  selectCategoriasNuevaOperacion.innerHTML =`<option>Todos</option> ${estructuraHtml}`;
};

actualizarCategoriasSelect();

// BOTON AGREGAR CATEGORIA AL ABM
botonAgregarCategoria.onclick = () => {
  const categoriaAgregada = inputAgregarCategoria.value;
  inputAgregarCategoria.value = "";
  const categoriasActualizadas = obtenerCategorias()
  categoriasActualizadas.push(categoriaAgregada);
   
  const categoriasAJSON = JSON.stringify(categoriasActualizadas);
  localStorage.setItem("categorias", categoriasAJSON);

  agregarCategoriasAlABMDeCategorias();
  actualizarCategoriasSelect();
 
};


// AGREGAR NUEVA OPERACION
const operaciones = [];


const guardarEnLS = () =>{
  const operacionesAJSON = JSON.stringify(operaciones);
  localStorage.setItem("operaciones", operacionesAJSON);
}

const recuperarDatosDeLS = () =>{
  const operacionesGuardadasEnLS = localStorage.getItem("operaciones");
  const operacionesDelLSaJS = JSON.parse(operacionesGuardadasEnLS)
  //hay que hacer un if para verificar si ha bdatos guardados en local storage para que no pise los objetos del array que guarda en el LS
  return operacionesDelLSaJS 
}


 
botonFormularioAgregarOperacion.onclick = (e) =>{
  e.preventDefault();
  operacionesPusheadas = operaciones.push (
    {descripcion: `${inputDescripcionNuevaOperacion.value}`,
     monto: `${inputMontoNuevaOperacion.value}`,
     tipo: `${selectTipoNuevaOperacion.value}`,
     categoria : `${selectCategoriasNuevaOperacion.value}`,
     fecha: `${inputFechaNuevaOperacion.value}`,
    }
  )
  guardarEnLS()
  recuperarDatosDeLS()
};



