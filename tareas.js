const fs = require("fs");
const { stat } = require("node:fs");
const tareas = {
  path: "tareas.json",
  leer: function () {
    const listado = fs.readFileSync(this.path, "utf-8");
    return JSON.parse(listado);
  },
  agregar: function (titulo, status) {
    let agrega = JSON.stringify(titulo, status);
    return agrega;
  }
};

module.exports = tareas;

// module.exports = {tareas, calculadora}  // exportar varias cosas

// manera directa de exportar

// exports.tareas = {
//   path: "tareas.json",
//   leer: function () {
//     const tareas = fs.readFileSync(this.path);
//     console.log(tareas);
//   }
// };

// module.exports = tareas;
