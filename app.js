const tareas = require("./tareas");

const listado = tareas.leer();
const agrega = tareas.agregar();

let accion = process.argv[2];
console.log(accion);
switch (accion) {
  case "listar":
    for (let i = 0; i < listado.length; i++) {
      console.log(`Titulo ${listado[i].titulo} status: ${listado[i].status}`);
    }
    break;
  case "agregar":
    titulo = process.argv[3];
    stat = process.argv[4];
    tareas.agregar(titulo, stat);
    // listado.titulo[listado.length + 1] = titulo;
    // listado.status[listado.length + 1] = status;
    break;
  default:
    console.log("Accion no soportada");
}
// console.log(listado);
//otro comentario para probar
