import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
var cursos = [new Curso("Practicas esenciales para el agilismo", 20, 90, true, 3019),
    new Curso("Ingenieria de software para la web", 15, 99, true, 2018),
    new Curso("Pruebas automatizadas", 25, 50, false, 2020),
    new Curso("Principios de diseño y arquitectura", 30, 75, true, 2020)];
export var ap = new Aprendiz("Juan Pablo", "Reyes", "avatar.png", 20, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticaTable = document.getElementById("estadisticas");
mostrarDatosAprendiz(ap);
mostrarestadisticas(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tboyAprendiz = document.createElement("tbody");
    tboyAprendiz.innerHTML = "<tr><td colspan=2> <img src=\"./".concat(aprendiz.avarPath, "\" height =100></td> </tr>\n    <tr><td>Nombres</td> <td>").concat(aprendiz.nombres, "</td></tr> \n    <tr><td>Apellidos</td> <td>").concat(aprendiz.apellidos, "</td></tr> \n    <tr><td>Edad</td> <td>").concat(aprendiz.edad, "</td></tr>\n    <tr><td>Nivel educativo</td> <td>").concat(aprendiz.nivelEducativo, "</td></tr>");
    aprendizTable.appendChild(tboyAprendiz);
}
function mostrarestadisticas(aprendiz) {
    var cantidadCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Numero de certificados</b></td><td>".concat(cantidadCertificados, "</td>");
    estadisticaTable.appendChild(trElement);
}
