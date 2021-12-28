Chicas, felicitaciones por la entrega de su trabajo. Sé que fue un TP muy, muy complejo y me alegra ver que pudieron entregar una web funcional que se esmera en cumplir las consignas. 

Su trabajo está muy bien, aunque sufre de algunos momentos en donde se nota que está a las apuradas. Tomense el tiempo necesario para emprolijar su código, revisen si hay variables que declaran pero no usan, no dejen código comentado, no dejen console log. Todos estos son factores importantes, que van a determinar como les va en un challenge para entrar a una empresa, y es importante que vayan acostumbrandose desde ya a mantener la calidad de la entrega, mas allá de los desafíos específicos del código. Sean prolijas: es como corregir la gramática antes de un TP de la facu. 

Con respecto a los puntos de evaluación, 

- Respeta la consigna

Cumplido en general. Hay varios puntos que estan incompletos, muchos por apuro más que por no entender cómo hacerlo

A nivel organización del código, que ya deberían manejar mejor:
- imagen-proyecto.png deberia estar en assets con el resto de las imágenes, no en la carpeta principal
- La carpeta vscode no deberia estar. Borrenla de github si vscode la agrega automaticamente.
- no hay favicon

- Estructura correcta de documento HTML

Cumplido. Ocasionalmente tienen etiquetas mal cerradas -un mal casi inevitable cuando trabajamos con tantos divs- y algunas otras cositas a mejorar que les dejo anotadas. Presten atención a los ids -hay lugares en donde se nota que copiaron y pegaron y quedó mal. 

- Respeta el diseño dado

Cumplido en general, pero sufre del mismo problema general de su código: apuro. 
- El padding en el titulo de la subsección "filtros" es incorrecto, está muy cerca del borde. 
- La orientacion de los botones en agregar y editar operacion es incorrecta, deben ir a la izquierda
- La imagen operaciones insuficientes en reportes aparece siempre, aunque haya operaciones. 

Este punto es importante para futuros challenges: deben acercarse lo más posible al diseño propuesto. 

- Respeta el funcionamiento

Cumplido con excepciones. Las mas importantes, y que les recomiendo arreglar antes de publicar este codigo o agregarlo a sus portfolios: 

- Los filtros no funcionan bien. Funcionan uno por uno, en lugar de todos a la vez. Lo dejé comentado en el js: hablamos de esto en la clase 70 - por favor revisenla. Es importante que esta lógica quede clara. 

- No veo ningún intento de ordenar en la seccion filtros. Habria sido importante hacer al menos uno, de la A a la Z por ejemplo, para mostrar que entendieron como hacer un sort. 

- No funcionan los botones de editar o eliminar categoría. Me llama la atención ya que tienen la lógica muy bien implementada en editar operación- era solo repetirla para las categorías. 

- Los datos que se muestran en Balance no se actualizan al agregar operaciones o editarlas. Deberian estar llamando a la funcion "separarPorCategoria" (les dejé una nota sobre el nombre) cada vez que agregan o editan operaciones. 


- Respeta el flujo de pantallas

Cumplido. 

- Responsive funciona correctamente

Cumplido, aunque algo desprolijo. 

- Código bien indentado

Desprolijo, hay problemas en js como en html. Les dejé algunos comentarios. 

- Buenos nombres de funciones y variables

Cumplido con algunas excepciones que les comento. 

- Funciones pequeñas

Cumplido

- Nombres de branchs adecuados

Cumplido con excepciones, como "arreglo". Sean mas especificas: qué estamos arreglando en esa rama?

- Lógica clara y simple

En general muy bien lograda, aunque hay ocasiones en donde es difícil saber exactamente qué se ejecuta antes y después, y muchas funciones que se ejecutan en lugares erróneos. Tomense el trabajo de poner todas sus funciones axuliares arriba, y todo lo que es ejecución del código apenas carga la pagina debajo. Se van a sorprender. 

- Buen uso estructuras de datos (arrays y objetos)

Correctísimo. 

- Buen uso de estructuras de control (condicionales y bucles)

Correctísimo. 

- Buen uso de métodos funcionales de array (map, filter, reduce, etc)

Correcto. 

- Reutilización de lógica / funciones

Bien

- Commits con mensajes adecuados

En general súper bien. 

- Un PR por funcionalidad, fix o mejora

Cumplido. 

- PRs con buenos títulos

Cumplido!

### Nota final: 8
