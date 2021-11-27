/**********ELEMENTOS DEL DOM**********/
//MAIN
const main = document.querySelector("#main");

//BOTONES NAV
const linkBalanceNav = document.querySelector("#link-balance");
const linkCategoriasNav = document.querySelector("#link-categorias");
const linkReportesNav = document.querySelector("#link-reportes");

//DESPLEGABLE FILTROS
const mostrarOcultarFiltros = document.querySelector("#mostrar-ocultar-filtros");
const formularioFiltros = document.querySelector("#formulario-filtros");
const selectTipoFiltros = document.querySelector("#select-tipo-filtros")
const selectCategoriasFiltros = document.querySelector("#select-categorias-filtros");


//NUEVA OPERACION
const formularioCompletoNuevaOperacion = document.querySelector("#form-nueva-operacion");
const sectionCardNuevaOperacion = document.querySelector("#section-card-nueva-operacion");
const cardNuevaOperacion = document.querySelector("#card-nueva-operacion");
const botonAgregarOperacion = document.querySelector("#boton-agregar-operacion");
const botonCancelarOperacion = document.querySelector("#boton-cancelar-operacion");
const contenedorImgTextoOperaciones = document.querySelector("#contenedor-img-y-textos-operaciones");
const titulosGrillaOperaciones = document.querySelector("#titulos-grilla-operaciones");

//FORMULARIO NUEVA OPERACION
const selectCategoriasNuevaOperacion = document.querySelector("#select-categorias-nueva-operacion");
const inputDescripcionNuevaOperacion = document.querySelector("#input-descripcion-nueva-operacion");
const inputMontoNuevaOperacion = document.querySelector("#input-monto-nueva-operacion");
const selectTipoNuevaOperacion = document.querySelector("#select-tipo-nueva-operacion");
const inputFechaNuevaOperacion = document.querySelector("#input-fecha-nueva-operacion");
const botonFormularioAgregarOperacion = document.querySelector("#boton-formulario-agregar-operacion");
const contenedorGrillaOperaciones = document.querySelector("#contenedor-grilla-operaciones");

//FOMULARIO EDITAR OPERACION
const sectionCardEditarOperacion = document.querySelector("#section-card-editar-operacion");

///CATEGORIAS
const sectionCardCategorias = document.querySelector("#section-card-categorias");
const inputAgregarCategoria = document.querySelector("#input-agregar-categorias");
const botonAgregarCategoria = document.querySelector("#boton-agregar-categoria");
const listadoCategorias = document.querySelector("#listado-categorias");

const sectionCardReportes = document.querySelector("#section-card-reportes");

/**************FUNCIONALIDADES: VER OCULTAR PANELES***************/

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
  sectionCardEditarOperacion.add("is-hidden");
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
  sectionCardEditarOperacion.add("is-hidden");
};

//MOSTRAR OCULTAR CARD BALANCE
linkBalanceNav.onclick = () => {
  sectionCardCategorias.classList.add("is-hidden");
  sectionCardReportes.classList.add("is-hidden");
  main.classList.remove("is-hidden");
  sectionCardNuevaOperacion.classList.add("is-hidden");
  sectionCardEditarOperacion.add("is-hidden");
};

//MOSTRAR OCULTAR CARD REPORTES
linkReportesNav.onclick = () => {
  sectionCardReportes.classList.remove("is-hidden");
  main.classList.add("is-hidden");
  sectionCardCategorias.classList.add("is-hidden");
  sectionCardNuevaOperacion.classList.add("is-hidden");
  sectionCardEditarOperacion.add("is-hidden");
};

/******************************************/
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
  const categoriasGuardadasJSONaJS = JSON.parse(categoriasGuardadasEnElLocalStorage);
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
  selectCategoriasFiltros.innerHTML = `<option value="Todos">Todos</option> ${estructuraHtml}`;
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


// ***********AGREGAR NUEVA OPERACION***********
let operaciones = [];

// FUNCION PARA COLOR MONTO, SEGÚN SU TIPO
const colorDeMontoOperaciones = (tipo) =>{
  if(tipo === "Gastos"){
    return "has-text-danger"
  }else{
    return "has-text-success"
  }
};

// FUNCION AUXILIAR PARA OCULTAR O MOSTRAR IMAGEN DE CARD OPERACIONES
const ocultarImagenSiHayOperaciones = () =>{
  const toggleDeImagen = 
  contenedorImgTextoOperaciones.classList.add("is-hidden");
  titulosGrillaOperaciones.classList.remove("is-hidden");
  sectionCardNuevaOperacion.classList.add("is-hidden");
  main.classList.remove("is-hidden");

  return toggleDeImagen;
};

// FUNCION AUXILIAR PARA LIMPIAR CAMPOS DE FORM NUEVA OPERACION, CADA VEZ QUE SE INGRESA UNA NUEVA
const limpiarCamposDelFormOperacion = () =>{
  inputDescripcionNuevaOperacion.value = "";
  inputMontoNuevaOperacion.value = "";
  selectTipoNuevaOperacion.value = "Todos";
  selectCategoriasNuevaOperacion.value = "Todos";
  inputFechaNuevaOperacion.value = "dd/mm/aaaa"
};

const guardarEnLS = () => {
  const operacionesAJSON = JSON.stringify(operaciones);
  localStorage.setItem("operaciones", operacionesAJSON);
};

const recuperarDatosDeLS = () => {
  const operacionesGuardadasEnLS = localStorage.getItem("operaciones");
  const operacionesDelLSaJS = JSON.parse(operacionesGuardadasEnLS);

  if (operacionesGuardadasEnLS === null) {
    return operaciones;
  } 
  else {
    ocultarImagenSiHayOperaciones();
    return operacionesDelLSaJS;
  }
};
recuperarDatosDeLS();

// FUNCION PARA MOSTRAR OPERACIONES EN HTML
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
  
            <div class="column is-2 has-text-right is-align-items-center ${colorDeMontoOperaciones(elemento.tipo)} has-text-weight-bold">
              <p>$${elemento.monto}</p>
            </div>
               
            <div class="column is-2 has-text-right">   
              <p>
                <button class="button is-ghost is-small boton-editar-operacion" id="boton-editar-${index}">Editar</button>
                <button class="button is-ghost is-small boton-eliminar-operacion" id="boton-eliminar-${index}">Eliminar</button>
              </p>
            </div>
          </div>    
        `
    );
  }, ``);

  contenedorGrillaOperaciones.innerHTML = estructuraHTML;

  botonesEliminarOperacion();
  botonesEditarOperacion();
};

// EVENTO PARA PUSHEAR NUEVAS OPERACIONES AL ARRAY
formularioCompletoNuevaOperacion.onsubmit = (e) => {
  e.preventDefault();
  operacionesPusheadas = operaciones.push({
    descripcion: `${inputDescripcionNuevaOperacion.value}`,
    monto: `${inputMontoNuevaOperacion.value}`,
    tipo: `${selectTipoNuevaOperacion.value}`,
    categoria: `${selectCategoriasNuevaOperacion.value}`,
    fecha: `${inputFechaNuevaOperacion.value}`,
  });

  ocultarImagenSiHayOperaciones();
  guardarEnLS();
  recuperarDatosDeLS();
  mostrarOperacionesEnHTML();
  limpiarCamposDelFormOperacion();
};

// FUNCION ELIMINAR OPERACION
const botonesEliminarOperacion = () =>{
  const botonEliminarOperacion = document.querySelectorAll(".boton-eliminar-operacion");

  for (let i = 0; i < botonEliminarOperacion.length; i++) {
    botonEliminarOperacion[i].onclick = () =>{
      const idBotonEliminar = botonEliminarOperacion[i].id.slice(15);
      idBotonEliminarANumber = Number(idBotonEliminar);
      
      const arrayOperacionesFiltrado = operaciones.filter((elemento, index) =>{
        return index !== idBotonEliminarANumber;
      });

      operaciones = arrayOperacionesFiltrado;
      guardarEnLS();
      recuperarDatosDeLS();
      mostrarOperacionesEnHTML(arrayOperacionesFiltrado);
    };
  };
};

//FUNCION AUXILIAR PARA MOSTRAR CARD EDITAR OPERACION
const mostrarCardEditarOperacion = (id) =>{
  sectionCardEditarOperacion.classList.remove("is-hidden");
  main.classList.add("is-hidden");

  const containerEditarOperacion = document.querySelector(".container-editar-operacion");

  const objeto = operaciones[id];

  const crearFormEditarOperacion = `
  <form id="form-editar-operacion" action="">
    <div class="field ml-6 mr-6">
    <label class="label">Descripción</label>
        <div class="control">
            <input class="input my-1" value="${objeto.descripcion}" id="input-descripcion-editar-operacion" type="text" required> 
        </div>
    </div>

    <div class="field ml-6 mr-6">
      <label class="label">Monto</label>
          <div class="control">
              <input class="input my-1" value="${objeto.monto}" id="input-monto-editar-operacion" type="number" min="1" max="10"> 
          </div>
    </div>

    <div class="field ml-6 mr-6">
      <label class="label">Tipo</label> 
          <div class="control">
              <div class="select is is-fullwidth">
                  <select class="select" value="${objeto.tipo}" id="select-tipo-editar-operacion">
                      <option>Todos</option>
                      <option>Gastos</option>
                      <option>Ganancias</option>
                      </select>
              </div>
          </div>
    </div>         

    <div class="field ml-6 mr-6">
      <label class="label">Categoría</label> 
          <div class="control">
              <div class="select is is-fullwidth">
                  <select class="select" value="${objeto.categoria}" id="select-categorias-editar-operacion">
                      
                  </select>
              </div>
          </div>
    </div>

    <div class="field ml-6 mr-6">
      <label class="label">Fecha</label> 
          <div class="control">
              <input class="input my-1" value="${objeto.fecha}" type="date" id="input-fecha-editar-operacion"> 
          </div>
    </div>

    <div class="buttons mt-6 mb-3">
      <button class="button is-light" id="boton-cancelar-editar-operacion"> Cancelar </button>
      <input type="submit" class="button is-success" value="Editar" id="boton-formulario-editar-operacion"> 
    </div>
        
  </form>`;

  containerEditarOperacion.innerHTML = crearFormEditarOperacion;

  
  const inputDescripcionEditarOperacion = document.querySelector("#input-descripcion-editar-operacion");
  const inputMontoEditarOperacion = document.querySelector("#input-monto-editar-operacion");
  const selectTipoEditarOperacion = document.querySelector("#select-tipo-editar-operacion");
  const selectCategoriasEditarOperacion = document.querySelector("#select-categorias-editar-operacion");
  const inputFechaEditarOperacion = document.querySelector("#input-fecha-editar-operacion");
  const botonCancelarEditarOperacion = document.querySelector("#boton-cancelar-editar-operacion");

  botonCancelarEditarOperacion.onclick = () =>{
    sectionCardEditarOperacion.classList.add("is-hidden");
  }

  const formEditarOperacion = document.querySelector("#form-editar-operacion");

  formEditarOperacion.onsubmit = (e) =>{
    e.preventDefault();
    sectionCardEditarOperacion.classList.add("is-hidden");

    const nuevaDescripcion = inputDescripcionEditarOperacion.value;
    const nuevoMonto = Number(inputMontoEditarOperacion.value);
    const nuevoTipo = selectTipoEditarOperacion.value ;
    const nuevaCategoria = selectCategoriasEditarOperacion.value;
    const nuevaFecha = inputFechaEditarOperacion.value;

    objeto.descripcion = nuevaDescripcion;
    objeto.monto = nuevoMonto;
    objeto.tipo = nuevoTipo;
    objeto.categoria = nuevaCategoria;
    objeto.fecha = nuevaFecha;
    
    guardarEnLS();
    recuperarDatosDeLS();
    mostrarOperacionesEnHTML();
  };

  agregarCategoriasAlABMDeCategorias();
  actualizarCategoriasSelect();
};

// FUNCION EDITAR OPERACION
const botonesEditarOperacion = () =>{
  const botonEditarOperacion = document.querySelectorAll(".boton-editar-operacion");

  for (let i = 0; i < botonEditarOperacion.length; i++) {
    botonEditarOperacion[i].onclick = () =>{
      const idBotonEditar = botonEditarOperacion[i].id.slice(13);
      idBotonEditarANumber = Number(idBotonEditar);

      mostrarCardEditarOperacion(idBotonEditarANumber);
      
    };
  };
}

mostrarOperacionesEnHTML();



//FILTRO POR TIPO - CATEGORIA - FECHA - ORDEN
//select por tipo en filtros
const operacionesFiltradas = [...operaciones]

selectTipoFiltros.onchange = () => {
  const filtradoPorTipo = operacionesFiltradas.filter((operacion) =>{
    if (selectTipoFiltros.value === "Todos"){
      return operacion
    }  
    return operacion.tipo === selectTipoFiltros.value
  })
  
   const mostrarOperacionesFiltradasEnHTML = () => {
    operaciones = recuperarDatosDeLS();
    const estructuraHTML = filtradoPorTipo.reduce((acc, elemento, index) => {
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
  
            <div class="column is-2 has-text-right is-align-items-center ${colorDeMontoOperaciones(elemento.tipo)} has-text-weight-bold">
              <p>$${elemento.monto}</p>
            </div>
               
            <div class="column is-2 has-text-right">   
              <p>
                <button class="button is-ghost is-small boton-editar-operacion" id="boton-editar-${index}">Editar</button>
                <button class="button is-ghost is-small boton-eliminar-operacion" id="boton-eliminar-${index}">Eliminar</button>
              </p>
            </div>
          </div>    
        `
    );
  }, ``);

  contenedorGrillaOperaciones.innerHTML = estructuraHTML;

  botonesEliminarOperacion();
  botonesEditarOperacion();
};

mostrarOperacionesFiltradasEnHTML()
}


//select de categorias en filtros
selectCategoriasFiltros.onchange = () => {
 
  const filtradoPorCategoria = operacionesFiltradas.filter((operacion) =>{
    if (selectCategoriasFiltros.value === "Todos"){
      return operacion
    }  
    return operacion.categoria === selectCategoriasFiltros.value
  })

const mostrarOperacionesFiltradasEnHTML = () => {
    operaciones = recuperarDatosDeLS();
    const estructuraHTML = filtradoPorCategoria.reduce((acc, elemento, index) => {
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
  
            <div class="column is-2 has-text-right is-align-items-center ${colorDeMontoOperaciones(elemento.tipo)} has-text-weight-bold">
              <p>$${elemento.monto}</p>
            </div>
               
            <div class="column is-2 has-text-right">   
              <p>
                <button class="button is-ghost is-small boton-editar-operacion" id="boton-editar-${index}">Editar</button>
                <button class="button is-ghost is-small boton-eliminar-operacion" id="boton-eliminar-${index}">Eliminar</button>
              </p>
            </div>
          </div>    
        `
    );
  }, ``);

  contenedorGrillaOperaciones.innerHTML = estructuraHTML;

  botonesEliminarOperacion();
  botonesEditarOperacion();
};

mostrarOperacionesFiltradasEnHTML()
}