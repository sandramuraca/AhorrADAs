/**********ELEMENTOS DEL DOM**********/
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

// Esto no deberia estar aqui, es un manejador de eventos, deberia estar con el resto de las funciones. 
// Atencion ademas al espaciado, sean mas prolijas: las funciones deben tener espacio entre la flecha y el {
burgerIcon.addEventListener("click", () =>{
  navBarMenu.classList.toggle("is-active")
  navBarBurger.classList.toggle("is-active")
});

//DESPLEGABLE FILTROS
const mostrarOcultarFiltros = document.querySelector("#mostrar-ocultar-filtros");
const formularioFiltros = document.querySelector("#formulario-filtros");
const selectTipoFiltros = document.querySelector("#select-tipo-filtros")
const selectCategoriasFiltros = document.querySelector("#select-categorias-filtros");

//CARD BALANCE

const totalGananciasCardBalance = document.querySelector("#total-ganancias-card-balance");
const totalGastosCardBalance = document.querySelector("#total-gastos-card-balance");
const balanceCardBalance = document.querySelector("#balance-card-balance");

//NUEVA OPERACION
const formularioCompletoNuevaOperacion = document.querySelector("#form-nueva-operacion");
const sectionCardNuevaOperacion = document.querySelector("#section-card-nueva-operacion");
// declaran esta variable pero nunca la usan
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
// declaran esta variable pero nunca la usan
const botonFormularioAgregarOperacion = document.querySelector("#boton-formulario-agregar-operacion");
const contenedorGrillaOperaciones = document.querySelector("#contenedor-grilla-operaciones");

//FOMULARIO EDITAR OPERACION
const sectionCardEditarOperacion = document.querySelector("#section-card-editar-operacion");
const formEditarOperacion = document.querySelector("#form-editar-operacion");
const inputDescripcionEditarOperacion = document.querySelector("#input-descripcion-editar-operacion");
const inputMontoEditarOperacion = document.querySelector("#input-monto-editar-operacion");
const selectTipoEditarOperacion = document.querySelector("#select-tipo-editar-operacion");
const selectCategoriasEditarOperacion = document.querySelector("#select-categorias-editar-operacion");
const inputFechaEditarOperacion = document.querySelector("#input-fecha-editar-operacion");
// declaran esta variable pero nunca la usan
const botonCancelarEditarOperacion = document.querySelector("#boton-cancelar-editar-operacion");

///CATEGORIAS
const sectionCardCategorias = document.querySelector("#section-card-categorias");
const inputAgregarCategoria = document.querySelector("#input-agregar-categorias");
const botonAgregarCategoria = document.querySelector("#boton-agregar-categoria");
const listadoCategorias = document.querySelector("#listado-categorias");

const sectionCardReportes = document.querySelector("#section-card-reportes");

//CARD REPORTES
const nombreCategoriaReportes = document.querySelector("#nombre-categoria-reportes");
const totalGananciaReportes = document.querySelector("#total-ganancia-reportes");
const totalGastoReportes = document.querySelector("#total-gasto-reportes");
const balanceReportes = document.querySelector("#balance-reportes");

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
  sectionCardEditarOperacion.classList.add("is-hidden");
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
  sectionCardEditarOperacion.classList.add("is-hidden");
};

//MOSTRAR OCULTAR CARD BALANCE
linkBalanceNav.onclick = () => {
  sectionCardCategorias.classList.add("is-hidden");
  sectionCardReportes.classList.add("is-hidden");
  main.classList.remove("is-hidden");
  sectionCardNuevaOperacion.classList.add("is-hidden");
  sectionCardEditarOperacion.classList.add("is-hidden");
};

//MOSTRAR OCULTAR CARD REPORTES
linkReportesNav.onclick = () => {
  sectionCardReportes.classList.remove("is-hidden");
  main.classList.add("is-hidden");
  sectionCardCategorias.classList.add("is-hidden");
  sectionCardNuevaOperacion.classList.add("is-hidden");
  sectionCardEditarOperacion.classList.add("is-hidden");
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
    // usen comillas simples, no backticks, cuando no van a interpolar variables: ""
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
    // misma observacion aqui
  }, ``);

  selectCategoriasFiltros.innerHTML = `<option value="Todos">Todos</option> ${estructuraHtml}`;
  selectCategoriasNuevaOperacion.innerHTML = `${estructuraHtml}`;
  selectCategoriasEditarOperacion.innerHTML = `${estructuraHtml}`;
};

// Es dificil seguir el flujo de ejecucion del codigo si tienen las funciones auxiliares mezcladas 
// con estas ejecuciones, que ocurren apenas carga la pagina
// Pongan estas ejecuciones al final de todo
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
// Sean mas prolijas con los espaciados, esta funcion deberia estar asi:
// const colorDeMontoOperaciones = (tipo) => {
//   if (tipo === "Gastos") {
//     return "has-text-danger"
//   } else {
//     return "has-text-success"
//   }
// };

const colorDeMontoOperaciones = (tipo) =>{
  if(tipo === "Gastos"){
    return "has-text-danger"
  }else{
    return "has-text-success"
  }
};

// FUNCION AUXILIAR PARA OCULTAR O MOSTRAR IMAGEN DE CARD OPERACIONES
// el espaciado asi: () => {
const ocultarImagenSiHayOperaciones = () =>{
  const toggleDeImagen = 
  contenedorImgTextoOperaciones.classList.add("is-hidden");
  titulosGrillaOperaciones.classList.remove("is-hidden");
  sectionCardNuevaOperacion.classList.add("is-hidden");
  main.classList.remove("is-hidden");

  return toggleDeImagen;
};

// FUNCION AUXILIAR PARA LIMPIAR CAMPOS DE FORM NUEVA OPERACION, CADA VEZ QUE SE INGRESA UNA NUEVA
// el espaciado asi: () => {
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
    // usen comillas simples aqui
  }, ``);

  contenedorGrillaOperaciones.innerHTML = estructuraHTML;

  botonesEliminarOperacion();
  botonesEditarOperacion();
};

// EVENTO PARA PUSHEAR NUEVAS OPERACIONES AL ARRAY
formularioCompletoNuevaOperacion.onsubmit = (e) => {
  e.preventDefault();
  // aqui falta un const!
  operacionesPusheadas = operaciones.push({
    // no es necesario aqui usar backticks ni interpolacion: no estan agregando nada a estos valores
    // deberia ir asi:
    // descripcion: inputDescripcionNuevaOperacion.value,
    // monto: inputMontoNuevaOperacion.value,
    // tipo: selectTipoNuevaOperacion.value,
    // categoria: selectCategoriasNuevaOperacion.value,
    // fecha: inputFechaNuevaOperacion.value,
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
// el espaciado asi: () => {
const botonesEliminarOperacion = () =>{
  const botonEliminarOperacion = document.querySelectorAll(".boton-eliminar-operacion");

  for (let i = 0; i < botonEliminarOperacion.length; i++) {
    botonEliminarOperacion[i].onclick = () =>{
      const idBotonEliminar = botonEliminarOperacion[i].id.slice(15);
      // aqui falta un const!
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
// el espaciado asi: () => {
const mostrarCardEditarOperacion = (id) =>{
  sectionCardEditarOperacion.classList.remove("is-hidden");
  main.classList.add("is-hidden");

  const objeto = operaciones[id];
  // no dejen console log en una entrega
  console.log(objeto.tipo)

  inputDescripcionEditarOperacion.value = objeto.descripcion;
  inputMontoEditarOperacion.value = objeto.monto;
  selectTipoEditarOperacion.value = objeto.tipo;
  selectCategoriasEditarOperacion.value = objeto.categoria;
  inputFechaEditarOperacion.value = objeto.fecha;

  // no dejen codigo comentado en una entrega
  // botonCancelarEditarOperacion.onclick = () =>{
  //   sectionCardEditarOperacion.classList.add("is-hidden");
  // }

  // el espaciado asi: () => {
  formEditarOperacion.onsubmit = (e) =>{
    e.preventDefault();
    sectionCardEditarOperacion.classList.add("is-hidden");

    objeto.descripcion = inputDescripcionEditarOperacion.value;
    objeto.monto = Number(inputMontoEditarOperacion.value);
    objeto.tipo = selectTipoEditarOperacion.value ;
    objeto.categoria = selectCategoriasEditarOperacion.value;
    objeto.fecha = inputFechaEditarOperacion.value;
    
    guardarEnLS();
    recuperarDatosDeLS();
    mostrarOperacionesEnHTML();
  }
};

// FUNCION EDITAR OPERACION
const botonesEditarOperacion = () =>{
  const botonEditarOperacion = document.querySelectorAll(".boton-editar-operacion");

  for (let i = 0; i < botonEditarOperacion.length; i++) {
    botonEditarOperacion[i].onclick = () =>{
      const idBotonEditar = botonEditarOperacion[i].id.slice(13);
      // aqui falta un const!
      idBotonEditarANumber = Number(idBotonEditar);

      mostrarCardEditarOperacion(idBotonEditarANumber);
      
    };
  };
};
mostrarOperacionesEnHTML();


//FILTRO POR TIPO - CATEGORIA - FECHA - ORDEN


// Cada uno de estos filtros funciona por separado - no saben lo que tienen seleccionados los demas
// Si selecciono "filtrar por tipo gasto" voy a ver todos los gastos
// Pero si despues seleccciono "filtar por categoria comida" voy a ver todas las categorias comidas, gastos y operaciones, 
// a pesar de que tengo seleccionado "gasto" en tipo
// Los filtros deben trabajar todos juntos. Como vimos en clase, deben estar todos subsumidos en una unica funcion

// Necesitamos una funcion que se llame aplicarFiltros, por ejemplo. Cuando llamamos a selectTipoFiltros.onchange, 
// selectCategoriasFiltros.onchange e inputFecha.oninput, lo que hacemos es ejecutar siempre la misma funcion. 
// Esa funcion va a ir leyendo cada uno de los valores de los input y aplicando eso. 

// Lo vimos en la clase 70. Por favor repansenla y si algo no esta claro, escribanme. Es importante que entiendan esta logica. 
// SELECT POR TIPO EN FILTROS
selectTipoFiltros.onchange = () => {
  const operacionesFiltradas = [...operaciones]
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
};

//SELECT DE CATEGORIAS EN FILTROS
selectCategoriasFiltros.onchange = () => {
    const operacionesFiltradas = [...operaciones]
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
  // Corrijan el tabulado aqui:
};
mostrarOperacionesFiltradasEnHTML()
};

//FILTRO FECHA
const inputFecha = document.querySelector("#input-fecha")

inputFecha.oninput = () => {
  
  const operacionesFiltradas = [...operaciones]
  const fechaDesde = inputFecha.value
 
  const filtroPorFecha = operacionesFiltradas.filter((operacion) =>{
    return new Date(operacion.fecha)  > new Date(fechaDesde)
  })

  const mostrarOperacionesFiltradasEnHTML = () => {
    operaciones = recuperarDatosDeLS();
    const estructuraHTML = filtroPorFecha.reduce((acc, elemento, index) => {
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
  // corrijan el tabulado aqui
};
mostrarOperacionesFiltradasEnHTML()
};


/// CARD REPORTES BALANCE DE OPERACIONES

// No dejen console log!

//separamos el array ccategorias

// Esta funcion se llama "separarPorCategoria" pero no hace lo que dice. Lo que hace es mucho mas que 
// separar por categoria: completa la seccion balance para que tenga los datos de las operaciones. 
// El nombre de la funcion deberia reflejar lo que la funcion hace - si no es imposible entender lo que hace su codigo

// Su seccion balances no se actualiza cuando agregamos o editamos una operacion - deberiamos estar llamando 
// a esta funcion cada vez que agregamos o editamos. 
const separarPorCategoria = () => {

  let arrayOperacionPorCategoria = [];
  
  categorias.map((categoria) => {
    arrayOperacionPorCategoria.push([]);
  });

  operaciones.map((operacion) => {
    const indiceCategoria = categorias.indexOf(operacion.categoria)

    arrayOperacionPorCategoria[indiceCategoria].push(operacion);
  });
  console.log(arrayOperacionPorCategoria);
 
  let sumaGastos = 0;
  let sumaGanancias = 0;
  for (let i = 0; i < arrayOperacionPorCategoria.length; i++) {
     for (let j = 0; j < arrayOperacionPorCategoria[i].length; j++) {
      //  dejen espacios entre los parentesis y las llaves en el if else!
       if(arrayOperacionPorCategoria[i][j].tipo === "Gastos"){
          sumaGastos = sumaGastos + Number(arrayOperacionPorCategoria[i][j].monto)
      
       }
       else{
          sumaGanancias = sumaGanancias + Number(arrayOperacionPorCategoria[i][j].monto)
       }
       
       nombreCategoriaReportes.innerHTML = arrayOperacionPorCategoria[i][j].categoria;
       totalGananciaReportes.innerHTML = sumaGanancias;
       totalGastoReportes.innerHTML = sumaGastos;
       balanceReportes.innerHTML = sumaGanancias - sumaGastos;

     }
  }
    
  const balancePorCategoria = sumaGanancias - sumaGastos;
  console.log(sumaGastos);
  console.log(sumaGanancias);
  console.log(balancePorCategoria);
};
separarPorCategoria();


// CARD BALANCE
const separarPorGasto = operaciones.filter((operacion) => {
  return operacion.tipo === "Gastos";
}); 
console.log(separarPorGasto);

const separarPorGanancia = operaciones.filter((operacion) => {
  return operacion.tipo === "Ganancias";
}) ;
console.log(separarPorGanancia);

const sumaGastos = separarPorGasto.reduce((acc, curr) => {
  console.log(curr.monto);
  return acc + Number(curr.monto);
}, 0);
 console.log(sumaGastos);

const sumaGanancias = separarPorGanancia.reduce((acc, curr) => {
  console.log(curr.monto)
  return acc + Number(curr.monto);
}, 0);
console.log(sumaGanancias);

const balanceCardBalancePrincipal = sumaGanancias - sumaGastos ;

//CAMBIO DEL HTML DE CARD BALANCE
const actualizarBalancePrincipal = () =>{
  totalGananciasCardBalance.innerHTML = sumaGanancias;
  totalGastosCardBalance.innerHTML = sumaGastos;
  balanceCardBalance.innerHTML = balanceCardBalancePrincipal;
};
actualizarBalancePrincipal();

//CAMBIO DE COLOR TOTAL BALANCE
const cambioDeColorTotalBalance = () =>{
  if(balanceCardBalancePrincipal >= 0){
    balanceCardBalance.classList.add("has-text-primary");
  }
  else{
    balanceCardBalance.classList.add("has-text-danger");
  }
};
cambioDeColorTotalBalance();

//CATEGORIA CON MAYOR GANANCIA

// const categoriaConMasGanancia = () => {


// }
