import { series } from "./data.js";
console.log(series);
var seriesTable = document.getElementById("series");
var divBody = document.getElementById("tabla");
mostrarSeries(series);
mostrarPromedio(series);
function mostrarSeries(seriesx) {
    var seriesBody = document.createElement("tbody");
    for (var _i = 0, seriesx_1 = seriesx; _i < seriesx_1.length; _i++) {
        var seriex = seriesx_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td id=\"bold\">".concat(seriex.numero, "</td>\n        <td> <a href=\"").concat(seriex.paginaWeb, "\">").concat(seriex.nombre, "</a> </td>\n        <td> ").concat(seriex.canal, " </td>\n        <td> ").concat(seriex.seasons, " </td>");
        seriesBody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesBody);
}
function mostrarPromedio(seriesx) {
    var seriesPromedio = document.createElement("p");
    var contador = 0;
    var index = 0;
    for (var _i = 0, seriesx_2 = seriesx; _i < seriesx_2.length; _i++) {
        var seriex = seriesx_2[_i];
        contador += seriex.seasons;
        index += 1;
    }
    var promedio = contador / index;
    seriesPromedio.innerHTML = "Seasons average : ".concat(promedio);
    divBody.appendChild(seriesPromedio);
}
